# PythonBuddyReactFlask

Refactored version of Pythonbuddy (https://github.com/PythonBuddy)

Installation
(This assumes you are using Python 2 and virtualenv for Python2)

```
git clone https://github.com/ethanchewy/PythonBuddyReactFlask.git
cd PythonBuddyReactFlask
pip install virtualenv
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
npm install
```

Then in one terminal:
```
export FLASK_APP=app.py
flask run
```

In another:
```
npm start
```

Go to http://localhost:3000/