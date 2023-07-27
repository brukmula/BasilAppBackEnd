import requests

uri = "http://127.0.0.1:3000/signup"

if __name__ == '__main__':
    headers: dict = {
        'email': 'username2@email.com',
        'password': 'password'
    }
    response = requests.post(uri, headers=headers)
    print(response.text)
