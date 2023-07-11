import requests

uri = "http://127.0.0.1:3001/signin"

if __name__ == '__main__':
    headers: dict = {
        'email': 'username@email.com',
        'password': 'password'
    }
    response = requests.post(uri, headers=headers)
    print(response.text)
