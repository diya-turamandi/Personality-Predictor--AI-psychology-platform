import csv
import random

path = 'data/personality_training_data.csv'
headers = [
    'social_preference',
    'alone_time',
    'group_comfort',
    'communication_style',
    'decision_style',
    'personality_type'
]

choices = {
    'Introvert': {
        'social_preference': ['Prefers solitude', 'Balanced'],
        'alone_time': ['Moderate', 'High'],
        'group_comfort': ['Uncomfortable', 'Neutral'],
        'communication_style': ['Reserved', 'Thoughtful'],
        'decision_style': ['Analytical', 'Reflective', 'Consensus-driven']
    },
    'Ambivert': {
        'social_preference': ['Balanced', 'Prefers solitude', 'Prefers groups'],
        'alone_time': ['Low', 'Moderate', 'High'],
        'group_comfort': ['Uncomfortable', 'Neutral', 'Comfortable'],
        'communication_style': ['Reserved', 'Thoughtful', 'Direct', 'Expressive'],
        'decision_style': ['Analytical', 'Reflective', 'Consensus-driven', 'Impulsive']
    },
    'Extrovert': {
        'social_preference': ['Prefers groups', 'Balanced'],
        'alone_time': ['Low', 'Moderate'],
        'group_comfort': ['Neutral', 'Comfortable'],
        'communication_style': ['Direct', 'Expressive'],
        'decision_style': ['Impulsive', 'Consensus-driven', 'Analytical']
    }
}

rows = []
for i in range(200):
    if i < 70:
        personality = 'Introvert'
    elif i < 140:
        personality = 'Ambivert'
    else:
        personality = 'Extrovert'

    profile = choices[personality]
    row = [
        random.choice(profile['social_preference']),
        random.choice(profile['alone_time']),
        random.choice(profile['group_comfort']),
        random.choice(profile['communication_style']),
        random.choice(profile['decision_style']),
        personality
    ]
    rows.append(row)

with open(path, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(headers)
    writer.writerows(rows)

print(f'Created {path} with {len(rows)} rows')
