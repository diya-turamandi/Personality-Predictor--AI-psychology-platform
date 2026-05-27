"""
Beginner-friendly personality classifier using Logistic Regression.

This script reads the CSV dataset, trains a model, evaluates accuracy,
then saves the model and encoders for use in the Flask backend.
"""

import pandas as pd
import joblib
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report


def load_data(csv_path):
    """Load the CSV file into a pandas DataFrame."""
    return pd.read_csv(csv_path)


def encode_features(df, feature_columns):
    """Convert categorical text features to numeric values with LabelEncoder."""
    encoded_df = df.copy()
    encoders = {}

    for column in feature_columns:
        encoder = LabelEncoder()
        encoded_df[column] = encoder.fit_transform(encoded_df[column])
        encoders[column] = encoder

    return encoded_df, encoders


def encode_target(df, target_column):
    """Convert the personality type labels to numeric values."""
    label_encoder = LabelEncoder()
    encoded_target = label_encoder.fit_transform(df[target_column])
    return encoded_target, label_encoder


def build_and_train_model(X_train, y_train):
    """Create and train a Logistic Regression model."""
    model = LogisticRegression(max_iter=200)
    model.fit(X_train, y_train)
    return model


def evaluate_model(model, X_test, y_test, label_encoder):
    """Evaluate the model and print accuracy and performance metrics."""
    predictions = model.predict(X_test)
    accuracy = accuracy_score(y_test, predictions)
    print(f"Accuracy score: {accuracy:.3f}\n")

    decoded_preds = label_encoder.inverse_transform(predictions)
    decoded_true = label_encoder.inverse_transform(y_test)

    print("Classification report:")
    print(classification_report(decoded_true, decoded_preds, digits=3))


def main():
    data_path = 'data/personality_training_data.csv'
    df = load_data(data_path)

    features = [
        'social_preference',
        'alone_time',
        'group_comfort',
        'communication_style',
        'decision_style'
    ]
    target = 'personality_type'

    encoded_df, feature_encoders = encode_features(df, features)
    encoded_target, target_encoder = encode_target(df, target)

    X_train, X_test, y_train, y_test = train_test_split(
        encoded_df[features],
        encoded_target,
        test_size=0.25,
        random_state=42,
        stratify=encoded_target
    )

    model = build_and_train_model(X_train, y_train)
    evaluate_model(model, X_test, y_test, target_encoder)

    joblib.dump(model, 'model.pkl')
    joblib.dump(feature_encoders, 'feature_encoders.pkl')
    joblib.dump(target_encoder, 'label_encoder.pkl')

    print('Saved model.pkl, feature_encoders.pkl, and label_encoder.pkl')


if __name__ == '__main__':
    main()
