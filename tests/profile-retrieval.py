import requests
import json

uri = "http://127.0.0.1:3000/"
# uri = "https://basil-backend-feutdwkkwq-uc.a.run.app/"

if __name__ == '__main__':
    signin_headers: dict = {
        'email': 'username@email.com',
        'password': 'password'
    }
    response = requests.post(f"{uri}signin", headers=signin_headers)
    print(response.text)

    profile_jwt_headers = {
        'user': response.text
    }
    profile_jwt_response = requests.get(f"{uri}profile", headers=profile_jwt_headers)
    print(profile_jwt_response.text)

    uid = profile_jwt_response.json()['uid']

    profile_uid_headers = {
        'user': uid
    }
    profile_uid_response = requests.get(f"{uri}profile", headers=profile_uid_headers)
    print(profile_uid_response.text)
