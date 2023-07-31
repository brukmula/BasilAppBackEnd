import json
import requests

uri = "http://127.0.0.1:3000/"
# uri = "https://basil-backend-feutdwkkwq-uc.a.run.app/"

if __name__ == '__main__':
    signin_headers: dict = {
        'email': 'username2@email.com',
        'password': 'password'
    }
    token = requests.post(f"{uri}signin", headers=signin_headers).text
    print(token)

    data = {
        'book': 'Genesis',
        'chapter': 1,
        'verse': 1,
        'note': "example note",
        'shared': True,
        'tags': ['testing', 'one', 'two']
    }
    headers = {
        'user': token
    }

    response = requests.post(f"{uri}notes", headers=headers, json=data)
    print(response.text)

    for i in range(1, 32):
        data['verse'] = i
        response = requests.post(f"{uri}notes", headers=headers, json=data)
        print(response.text)

    body = {
        'tag': 'testing'
    }

    note = requests.get(f"{uri}notes", headers=headers, json=body)
    print(note.text)

    body2 = {
        'book': 'Genesis',
        'chapter': 1,
        'verse': 1
    }

    note2 = requests.get(f"{uri}notes", headers=headers, json=body2)
    print(note2.text)

