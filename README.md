# AI Powered SMS Spam Detector

A modern machine learning web application that detects whether an SMS message is **Spam** or **Safe** using Natural Language Processing and Machine Learning.

## Live Demo

https://sms-spam-detector-v0s7.onrender.com

---

# Project Preview

This project provides:

- Real-time SMS spam detection
- Modern SaaS-style UI
- Flask backend integration
- Machine Learning prediction system
- Animated frontend interactions
- Live deployment on Render
- Responsive design for desktop and mobile

---

# Features

## AI Spam Detection
- Detects spam and safe messages instantly
- Uses Machine Learning for classification
- Provides confidence score

## Modern Frontend
- Premium responsive UI
- Animated gradient background
- Glassmorphism design
- Interactive loading animation
- Floating AI robot animation

## Analytics Dashboard
- Message length analysis
- Word count tracking
- Spam confidence progress bar
- Classification result card

## User Experience
- Sample message buttons
- Character limit counter
- Smooth animations and hover effects
- Mobile responsive design

---

# Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts

## Backend
- Python
- Flask

## Machine Learning
- Scikit-learn
- TF-IDF Vectorization
- Multinomial Naive Bayes

## Deployment
- Render
- GitHub

---

# Machine Learning Workflow

## Step 1 — Data Collection
The model is trained using an SMS spam dataset containing spam and ham messages.

## Step 2 — Text Preprocessing
Messages are cleaned and converted into numerical vectors using TF-IDF Vectorization.

## Step 3 — Model Training
A Multinomial Naive Bayes classifier is trained on the dataset.

## Step 4 — Prediction
The trained model predicts whether a message is spam or safe.

---

# Project Structure

```bash
SMS-SPAM/
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
├── train_model.py
├── model.pkl
├── spam_sms.csv
├── requirements.txt
├── Procfile
└── README.md
```

---

# Installation

## Clone Repository

```bash
git clone https://github.com/Sathvik0728/SMS-Spam-Detector
```

## Navigate to Project

```bash
cd sms-spam-detector
```

## Create Virtual Environment

### Windows

```bash
python -m venv venv
venv\Scripts\activate
```

### Mac/Linux

```bash
python3 -m venv venv
source venv/bin/activate
```

---

# Install Dependencies

```bash
pip install -r requirements.txt
```

---

# Train Machine Learning Model

```bash
python train_model.py
```

This creates:

```bash
model.pkl
```

---

# Run Application

```bash
python app.py
```

Open browser:

```bash
http://127.0.0.1:5000
```

---

# Sample Test Messages

## Spam Messages

```text
Congratulations! You won a FREE iPhone. Click now to claim reward.
```

```text
URGENT! Your account has won ₹10,000 cash prize.
```

## Safe Messages

```text
Hey bro are you coming to college tomorrow?
```

```text
Please send me the project report before evening.
```

---

# Deployment

This project is deployed using:

- Render
- GitHub

## Build Command

```bash
pip install -r requirements.txt
```

## Start Command

```bash
gunicorn app:app
```

---

# Future Improvements

- Dark / Light mode
- Email spam detection
- Prediction history
- User authentication
- NLP preprocessing visualization
- Deep learning models
- Multi-language support
- Dashboard analytics

---

# Screenshots

Add screenshots here after uploading project images.

Example:

- Homepage UI
- Spam detection result
- Safe message result
- Analytics dashboard

---

# Author

Banda Sathvik

Computer Science Engineering Student

---

# License

This project is created for educational and portfolio purposes.

