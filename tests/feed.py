import requests
import json

uri = "http://127.0.0.1:3000/"
# uri = "https://basil-backend-feutdwkkwq-uc.a.run.app/"

if __name__ == '__main__':
    signin_headers: dict = {
        'email': 'username@email.com',
        'password': 'password'
    }
    token = requests.post(f"{uri}signin", headers=signin_headers).text
    print(token)

    headers = {
        'user': token
    }

    feed = requests.get(f"{uri}feed?pageSize=3", headers=headers)
    print(json.dumps(feed.json(), indent=4))

    feed2 = requests.get(f"{uri}feed?page=2&pageSize=3", headers=headers)
    print(json.dumps(feed2.json(), indent=4))


