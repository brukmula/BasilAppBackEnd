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

    streak_data = {'startDate': 1689700721, 'days': 7, 'lastIncrement': 1689700721}

    streak_set_headers = {
        'user': response.text,
        'roots-data': json.dumps(streak_data)
    }
    streak_set_response = requests.post(f"{uri}roots", headers=streak_set_headers)
    print(streak_set_response.text)

    streak_get_headers = {
        'user': response.text
    }
    streak_get_response = requests.get(f"{uri}roots", headers=streak_get_headers)
    print(streak_get_response.text)
