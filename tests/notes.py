import json
import requests

uri = "http://127.0.0.1:3000/"
# uri = "https://basil-backend-feutdwkkwq-uc.a.run.app/"

if __name__ == '__main__':
    signin_headers: dict = {
        'email': 'username@email.com',
        'password': 'password'
    }
    token = requests.post(f"{uri}signin", headers=signin_headers).text
    print(token)

    data = {
        'book': 'Genesis',
        'chapter': 1,
        'verse': 1,
        'note': "example note"
    }
    headers = {
        'user': token
    }

    response = requests.post(f"{uri}notes", headers=headers, json=data)
    print(response.text)
