"""
Compare Logistic Regression, Decision Tree, and Random Forest classifiers
for personality prediction using beginner-friendly code.

This script prints accuracy scores and confusion matrices for each model.
"""

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, confusion_matrix, classification_report


def load_data(path):
    return pd.read_csv(path)


def encode_columns(df, columns):
    encoded = df.copy()
    encoders = {}
    for column in columns:
        encoder = LabelEncoder()
        encoded[column] = encoder.fit_transform(encoded[column])
        encoders[column] = encoder
    return encoded, encoders


def build_models():
    return {
        'Logistic Regression': LogisticRegression(max_iter=200),
        'Decision Tree': DecisionTreeClassifier(random_state=42),
        'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42)
    }


def evaluate(model, X_test, y_test):
    y_pred = model.predict(X_test)
    return {
        'accuracy': accuracy_score(y_test, y_pred),
        'confusion_matrix': confusion_matrix(y_test, y_pred),
        'classification_report': classification_report(y_test, y_pred, digits=3)
    }


def main():
    data_path = 'data/personality_training_data.csv'
    df = load_data(data_path)

    feature_columns = [
        'social_preference',
        'alone_time',
        'group_comfort',
        'communication_style',
        'decision_style'
    ]
    target_column = 'personality_type'

    encoded_df, feature_encoders = encode_columns(df, feature_columns)
    y_encoded, target_encoder = encode_columns(df, [target_column])
    y_encoded = y_encoded[target_column]

    X_train, X_test, y_train, y_test = train_test_split(
        encoded_df[feature_columns],
        y_encoded,
        test_size=0.25,
        random_state=42,
        stratify=y_encoded
    )

    models = build_models()
    results = {}

    for name, model in models.items():
        model.fit(X_train, y_train)
        results[name] = evaluate(model, X_test, y_test)

    print('Model comparison for personality prediction:')
    print('--------------------------------------------------')
    for name, result in results.items():
        print(f'\n{name}')
        print(f'Accuracy: {result["accuracy"]:.3f}')
        print('Confusion matrix:')
        print(result['confusion_matrix'])
        print('Classification report:')
        print(result['classification_report'])

    print('Target label mapping:')
    for label, encoded in zip(target_encoder[target_column].classes_, target_encoder[target_column].transform(target_encoder[target_column].classes_)):
        print(f'  {encoded} -> {label}')


if __name__ == '__main__':
    main()
