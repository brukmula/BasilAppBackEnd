import requests

uri = "http://127.0.0.1:3000/"
# uri = "https://basil-backend-feutdwkkwq-uc.a.run.app/"

if __name__ == '__main__':
    signin_headers: dict = {
        'email': 'username@email.com',
        'password': 'password'
    }
    response = requests.post(f"{uri}signin", headers=signin_headers)
    print(response.text)

    # Friend/follow the other example user
    friendly_headers: dict = {
        'user': response.text,                          # JWT as a string
        'to-follow': 'RfNd5qDTNdeOlqq59QnXmb7xSEF3'     # User's uid to follow
    }

    get_friendly = requests.post(f"{uri}add-friend", headers=friendly_headers)
    print(get_friendly.text)

    # Pause to manually view the state of the database
    input("Press enter to continue...")

    # Unfriend/unfollow the example user
    unfriendly_headers: dict = {
        'user': response.text,                         # JWT as a string
        'to-unfollow': 'RfNd5qDTNdeOlqq59QnXmb7xSEF3'  # User's uid to unfollow
    }

    get_unfriendly = requests.post(f"{uri}remove-friend", headers=unfriendly_headers)
    print(get_unfriendly.text)
