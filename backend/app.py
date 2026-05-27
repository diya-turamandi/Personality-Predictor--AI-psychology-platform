from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import os

app = Flask(__name__)
CORS(app)

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model.pkl')
FEATURE_ENCODERS_PATH = os.path.join(BASE_DIR, 'feature_encoders.pkl')
LABEL_ENCODER_PATH = os.path.join(BASE_DIR, 'label_encoder.pkl')

model = joblib.load(MODEL_PATH)
feature_encoders = joblib.load(FEATURE_ENCODERS_PATH)
label_encoder = joblib.load(LABEL_ENCODER_PATH)

FEATURE_COLUMNS = [
    'social_preference',
    'alone_time',
    'group_comfort',
    'communication_style',
    'decision_style'
]

PERSONALITY_DESCRIPTIONS = {
    'Introvert': 'A thoughtful, reflective personality who values calm space and deep focus.',
    'Extrovert': 'An energetic, social personality who thrives in group interaction and conversation.',
    'Ambivert': 'A flexible personality that enjoys both quiet time and social activity.'
}

PERSONALITY_INSIGHTS = {
    'Introvert': {
        'career_suggestions': [
            'Data Analyst',
            'Writer / Editor',
            'Software Developer',
            'Research Specialist'
        ],
        'communication_strengths': 'Clear active listening, thoughtful written communication, and calm explanation.',
        'productivity_style': 'Focused deep work in a quiet environment, with structured task blocks.',
        'learning_style': 'Self-paced reading, reflection, and individualized study sessions.'
    },
    'Extrovert': {
        'career_suggestions': [
            'Sales Manager',
            'Event Coordinator',
            'Marketing Specialist',
            'Customer Success Lead'
        ],
        'communication_strengths': 'Energetic storytelling, strong verbal persuasion, and quick collaboration.',
        'productivity_style': 'High-energy teamwork, brainstorming sessions, and flexible task switching.',
        'learning_style': 'Interactive workshops, group discussions, and hands-on practice.'
    },
    'Ambivert': {
        'career_suggestions': [
            'Product Manager',
            'UX Designer',
            'Consultant',
            'Operations Coordinator'
        ],
        'communication_strengths': 'Balanced dialogue, adaptable collaboration, and thoughtful input in groups.',
        'productivity_style': 'Combination of focused solo time and collaborative checkpoints.',
        'learning_style': 'Mixed learning with both group exercises and independent study.'
    }
}


def transform_payload(payload):
    sample = []

    for feature in FEATURE_COLUMNS:
        if feature not in payload:
            raise ValueError(f"Missing feature: {feature}")

        encoder = feature_encoders[feature]
        value = payload[feature]

        if value not in encoder.classes_:
            raise ValueError(f"Invalid value for {feature}: {value}")

        sample.append(int(encoder.transform([value])[0]))

    return sample


@app.route('/predict', methods=['POST'])
def predict():
    payload = request.get_json(force=True)
    sample = transform_payload(payload)
    prediction = model.predict([sample])[0]
    personality_type = label_encoder.inverse_transform([prediction])[0]
    insights = PERSONALITY_INSIGHTS.get(personality_type, {})

    return jsonify({
        'personality_type': personality_type,
        'description': PERSONALITY_DESCRIPTIONS.get(personality_type, ''),
        'insights': insights
    })


@app.errorhandler(Exception)
def handle_error(error):
    return jsonify({'error': str(error)}), 400


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
