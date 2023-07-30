import requests
import json

uri = "http://127.0.0.1:3000/api/"

if __name__ == '__main__':
    passage = requests.get(f"{uri}bible/?book=John&chapter=3&version=NET").json()
    print(json.dumps(passage, indent=2))

    version_info = requests.get(f"{uri}version-info?version=NET").json()
    print(json.dumps(version_info, indent=2))

    versions = requests.get(f"{uri}versions").json()
    print(json.dumps(versions, indent=2))
