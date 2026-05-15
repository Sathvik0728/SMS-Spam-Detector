from flask import Flask, render_template, request, jsonify
import joblib

app = Flask(__name__)

# Load trained ML model
model = joblib.load('model.pkl')

@app.route('/')
def home():

    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():

    data = request.get_json()

    message = data['message']

    # Prediction

    prediction = model.predict([message])[0]

    # Probability scores

    probability = model.predict_proba([message])[0]

    spam_confidence = round(probability[1] * 100, 2)

    ham_confidence = round(probability[0] * 100, 2)

    # Word count

    word_count = len(message.split())

    # Character count

    char_count = len(message)

    # Classification

    if prediction == 1:

        result = "Spam Detected"

        description = (
            "This message contains suspicious "
            "spam-related patterns and keywords."
        )

        category = "SPAM"

    else:

        result = "Safe Message"

        description = (
            "This message appears legitimate "
            "and does not contain spam signals."
        )

        category = "SAFE"

    return jsonify({

        'prediction': result,

        'description': description,

        'category': category,

        'spam_confidence': spam_confidence,

        'ham_confidence': ham_confidence,

        'word_count': word_count,

        'char_count': char_count
    })

if __name__ == '__main__':

    app.run(debug=True)