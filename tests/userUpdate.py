import requests

uri = "http://127.0.0.1:3000/"

if __name__ == '__main__':
    signin_headers: dict = {
        'email': 'username@email.com',
        'password': 'password'
    }
    response = requests.post(f"{uri}signin", headers=signin_headers)
    print(response.text)

    change_profile_headers = {
        'user': response.text,
        'displayName': 'Example User'
    }
    new_response = requests.post(f"{uri}update-profile", headers=change_profile_headers)
    print(new_response.text)
