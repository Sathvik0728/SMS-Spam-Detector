async function predictSpam() {

    const message =
        document.getElementById('message').value;

    if (message.trim() === '') {

        alert("Please enter a message");
        return;
    }

    // Show loading

    document.getElementById('loadingBox')
        .classList.remove('hidden');

    document.getElementById('result')
        .classList.add('hidden');

    // Disable button

    document.getElementById('analyzeBtn')
        .disabled = true;

    document.getElementById('btnText')
        .innerText = "Analyzing...";

    // API Request

    const response = await fetch('/predict', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            message: message
        })

    });

    // Fake AI delay

    await new Promise(resolve =>
        setTimeout(resolve, 1500)
    );

    const data = await response.json();

    // Hide loading

    document.getElementById('loadingBox')
        .classList.add('hidden');

    // Enable button

    document.getElementById('analyzeBtn')
        .disabled = false;

    document.getElementById('btnText')
        .innerText = "Analyze Message";

    // Show result

    document.getElementById('result')
        .classList.remove('hidden');

    // Prediction

    document.getElementById('prediction')
        .innerText = data.prediction;

    // Description

    document.getElementById('resultText')
        .innerText = data.description;

    // Elements

    const progressFill =
        document.getElementById('progressFill');

    const confidenceValue =
        document.getElementById('confidenceValue');

    const classification =
        document.getElementById('classification');

    const messageLength =
        document.getElementById('messageLength');

    const totalWords =
        document.getElementById('totalWords');

    const resultCard =
        document.getElementById('result');

    const warningIcon =
    document.querySelector('.warning-icon');

    const resultIcon =
    document.getElementById('resultIcon');

    // Spam

    if (data.category === "SPAM") {

        progressFill.style.width =
            data.spam_confidence + "%";

        progressFill.style.background =
            "#ef4444";

        confidenceValue.innerText =
            data.spam_confidence + "%";

        classification.innerText =
            "SPAM";

        classification.style.color =
            "#dc2626";

        document.getElementById('prediction')
            .style.color = "#dc2626";

        resultCard.style.background =
            "#fef2f2";

        resultCard.style.border =
            "1px solid #fecaca";

        warningIcon.style.background =
        "#fee2e2";

        warningIcon.style.color =
        "#ef4444";

        resultIcon.className =
            "fa-solid fa-triangle-exclamation";
    }

    // Safe

    else {

        progressFill.style.width =
            data.ham_confidence + "%";

        progressFill.style.background =
            "#22c55e";

        confidenceValue.innerText =
            data.ham_confidence + "%";

        classification.innerText =
            "SAFE";

        classification.style.color =
            "#16a34a";

        document.getElementById('prediction')
            .style.color = "#16a34a";

        resultCard.style.background =
            "#f0fdf4";

        resultCard.style.border =
            "1px solid #bbf7d0";

            warningIcon.style.background =
    "#dcfce7";

        warningIcon.style.color =
    "#16a34a";

    resultIcon.className =
    "fa-solid fa-circle-check";
    }

    // Message Length

    messageLength.innerText =
        data.char_count + " chars";

    // Word Count

    totalWords.innerText =
        data.word_count;
}

// Sample Buttons

function setMessage(text) {

    document.getElementById('message').value = text;

    updateCounts();
}

// Character Counter

function updateCounts() {

    const message =
        document.getElementById('message').value;

    document.getElementById('charCount')
        .innerText =
        message.length + "/500";
}