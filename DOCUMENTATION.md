# BasilAppBackEnd Documentation
All endpoints currently start from the base uri: https://basil-backend-feutdwkkwq-uc.a.run.app/
## Bible Endpoint
### Passage retrieval
#### /api/bible/
Method: GET
#### Parameters:
- **book**:
Name of the book of the Bible to get
- **chapter**: chapter number in the book to get
- **version**: (pseudo implemented) version to get the passage from

#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)):
**example return of John 3, NET using query 
https://basil-backend-feutdwkkwq-uc.a.run.app/api/bible/?book=John&chapter=3&version=NET**

<details>
    <summary>Response</summary>

```json
{
  "bookname": "John",
  "chapter": "3",
  "verses": [
    {
      "1": "Now a certain man, a Pharisee named Nicodemus, who was a member of the Jewish ruling council, "
    },
    {
      "2": "came to Jesus at night and said to him, “Rabbi, we know that you are a teacher who has come from God. For no one could perform the miraculous signs that you do unless God is with him.” "
    },
    {
      "3": "Jesus replied, “I tell you the solemn truth, unless a person is born from above, he cannot see the kingdom of God.”"
    },
    {
      "4": "Nicodemus said to him, “How can a man be born when he is old? He cannot enter his mother’s womb and be born a second time, can he?”"
    },
    {
      "5": "Jesus answered, “I tell you the solemn truth, unless a person is born of water and spirit, he cannot enter the kingdom of God. "
    },
    {
      "6": "What is born of the flesh is flesh, and what is born of the Spirit is spirit. "
    },
    {
      "7": "Do not be amazed that I said to you, ‘You must all be born from above.’ "
    },
    {
      "8": "The wind blows wherever it will, and you hear the sound it makes, but do not know where it comes from and where it is going. So it is with everyone who is born of the Spirit.” "
    },
    {
      "9": "Nicodemus replied, “How can these things be?” "
    },
    {
      "10": "Jesus answered, “Are you the teacher of Israel and yet you don’t understand these things? "
    },
    {
      "11": "I tell you the solemn truth, we speak about what we know and testify about what we have seen, but you people do not accept our testimony. "
    },
    {
      "12": "If I have told you people about earthly things and you don’t believe, how will you believe if I tell you about heavenly things? "
    },
    {
      "13": "No one has ascended into heaven except the one who descended from heaven—the Son of Man. "
    },
    {
      "14": "Just as Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up, "
    },
    {
      "15": "so that everyone who believes in him may have eternal life.” "
    },
    {
      "16": "For this is the way God loved the world: He gave his one and only Son, so that everyone who believes in him will not perish but have eternal life. "
    },
    {
      "17": "For God did not send his Son into the world to condemn the world, but that the world should be saved through him. "
    },
    {
      "18": "The one who believes in him is not condemned. The one who does not believe has been condemned already, because he has not believed in the name of the one and only Son of God. "
    },
    {
      "19": "Now this is the basis for judging: that the light has come into the world and people loved the darkness rather than the light because their deeds were evil. "
    },
    {
      "20": "For everyone who does evil deeds hates the light and does not come to the light, so that their deeds will not be exposed. "
    },
    {
      "21": "But the one who practices the truth comes to the light, so that it may be plainly evident that his deeds have been done in God."
    },
    {
      "22": "After this, Jesus and his disciples came into Judean territory, and there he spent time with them and was baptizing. "
    },
    {
      "23": "John was also baptizing at Aenon near Salim because water was plentiful there, and people were coming to him and being baptized. "
    },
    {
      "24": "(For John had not yet been thrown into prison.) "
    },
    {
      "25": "Now a dispute came about between some of John’s disciples and a certain Jew concerning ceremonial washing. "
    },
    {
      "26": "So they came to John and said to him, “Rabbi, the one who was with you on the other side of the Jordan River, about whom you testified—see, he is baptizing, and everyone is flocking to him!” "
    },
    {
      "27": "John replied, “No one can receive anything unless it has been given to him from heaven. "
    },
    {
      "28": "You yourselves can testify that I said, ‘I am not the Christ,’ but rather, ‘I have been sent before him.’ "
    },
    {
      "29": "The one who has the bride is the bridegroom. The friend of the bridegroom, who stands by and listens for him, rejoices greatly when he hears the bridegroom’s voice. This then is my joy, and it is complete. "
    },
    {
      "30": "He must become more important while I become less important.” "
    },
    {
      "31": "The one who comes from above is superior to all. The one who is from the earth belongs to the earth and speaks about earthly things. The one who comes from heaven is superior to all. "
    },
    {
      "32": "He testifies about what he has seen and heard, but no one accepts his testimony. "
    },
    {
      "33": "The one who has accepted his testimony has confirmed clearly that God is truthful. "
    },
    {
      "34": "For the one whom God has sent speaks the words of God, for he does not give the Spirit sparingly. "
    },
    {
      "35": "The Father loves the Son and has placed all things under his authority. "
    },
    {
      "36": "The one who believes in the Son has eternal life. The one who rejects the Son will not see life, but God’s wrath remains on him. "
    }
  ]
}
```
</details>

#### Bad requests ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
Bad requests will return the following data:
```js
`invalid passage ${book} ${chapter}`
```

### Search
Method: GET
#### /api/search
This endpoint requires the query parameters `version` to be the abbreviation for the requested version and `query` to be
the requested search of the Bible. Optionally, the parameters `page` (for the page to get) and `pageSize` can be used. 
Fair warning, this is a bit slow.
#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
<details>
    <summary>Example response</summary>

```json
{
    "page": "1",
    "pageCount": 52,
    "content": [
        {
            "book": "Matthew",
            "chapter": 26,
            "verse": 75,
            "text": "Then Peter remembered what <mark>Jesus</mark> had said: “Before the rooster crows, you will deny me three times.” And he went outside and <mark>wept</mark> bitterly."
        },
        {
            "book": "Mark",
            "chapter": 14,
            "verse": 72,
            "text": "Immediately a rooster crowed a second time. Then Peter remembered what <mark>Jesus</mark> had said to him: “Before a rooster crows twice, you will deny me three times.” And he broke down and <mark>wept</mark>."
        },
        {
            "book": "Luke",
            "chapter": 19,
            "verse": 41,
            "text": "Now when <mark>Jesus</mark> approached and saw the city, he <mark>wept</mark> over it,"
        },
        {
            "book": "John",
            "chapter": 11,
            "verse": 35,
            "text": "<mark><mark>Jesus</mark> <mark>wept</mark></mark>."
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": 11,
            "text": "<mark>Jesus</mark> did this as the first of his miraculous signs, in Cana of Galilee. In this way he revealed his glory, and his disciples believed in him."
        },
        {
            "book": "Hebrews",
            "chapter": 12,
            "verse": 2,
            "text": "keeping our eyes fixed on <mark>Jesus</mark>, the pioneer and perfecter of our faith. For the joy set out for him he endured the cross, disregarding its shame, and <b>has taken his seat at the right hand of the throne</b> of God."
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": 13,
            "text": "Now the Jewish feast of Passover was near, so <mark>Jesus</mark> went up to Jerusalem."
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": 19,
            "text": "<mark>Jesus</mark> replied, “Destroy this temple and in three days I will raise it up again.”"
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": 21,
            "text": "But <mark>Jesus</mark> was speaking about the temple of his body."
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": 22,
            "text": "So after he was raised from the dead, his disciples remembered that he had said this, and they believed the scripture and the saying that <mark>Jesus</mark> had spoken."
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": 23,
            "text": "Now while <mark>Jesus</mark> was in Jerusalem at the feast of the Passover, many people believed in his name because they saw the miraculous signs he was doing."
        },
        {
            "book": "John",
            "chapter": 2,
            "verse": 24,
            "text": "But <mark>Jesus</mark> would not entrust himself to them, because he knew all people."
        },
        {
            "book": "John",
            "chapter": 3,
            "verse": 2,
            "text": "came to <mark>Jesus</mark> at night and said to him, “Rabbi, we know that you are a teacher who has come from God. For no one could perform the miraculous signs that you do unless God is with him.”"
        },
        {
            "book": "John",
            "chapter": 3,
            "verse": 3,
            "text": "<mark>Jesus</mark> replied, “I tell you the solemn truth, unless a person is born from above, he cannot see the kingdom of God.”"
        },
        {
            "book": "John",
            "chapter": 3,
            "verse": 5,
            "text": "<mark>Jesus</mark> answered, “I tell you the solemn truth, unless a person is born of water and spirit, he cannot enter the kingdom of God."
        },
        {
            "book": "Hebrews",
            "chapter": 12,
            "verse": 24,
            "text": "and to <mark>Jesus</mark>, the mediator of a new covenant, and to the sprinkled blood that speaks of something better than Abel’s does."
        },
        {
            "book": "John",
            "chapter": 3,
            "verse": 10,
            "text": "<mark>Jesus</mark> answered, “Are you the teacher of Israel and yet you don’t understand these things?"
        },
        {
            "book": "Hebrews",
            "chapter": 13,
            "verse": 8,
            "text": "<mark>Jesus</mark> Christ is the same yesterday and today and forever!"
        },
        {
            "book": "John",
            "chapter": 3,
            "verse": 22,
            "text": "After this, <mark>Jesus</mark> and his disciples came into Judean territory, and there he spent time with them and was baptizing."
        },
        {
            "book": "Hebrews",
            "chapter": 13,
            "verse": 12,
            "text": "Therefore, to sanctify the people by his own blood, <mark>Jesus</mark> also suffered outside the camp."
        }
    ]
}
```
</details>

#### Bad requests
- Empty query ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"Please include a query to search for"
```
- No version specified ([404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404))
```js
"Please specify the version"
```

### Version Info
Method: GET
#### /api/version-info
This endpoint requires the query parameter `version` to be the abbreviation for that version. For example, the New 
English Translation's abbreviation is `NET`. 
<details>
    <summary>Extra reading</summary>

The reason for this endpoint is that not all versions will have the same 
number of books or chapters in those books. For example, the WEB (World English Bible) contains Psalm 151, which is 
recognized as Deuterocanonical Scripture by the Greek Orthodox and Russian Orthodox Churches. There is, of course, also 
the apocrypha. That's a whole 14 books that some versions also have. They are mostly Catholic Bibles, but also includes 
the 1611 KJV. [This Wikipedia article has a list of notable versions that include it](https://en.wikipedia.org/wiki/Biblical_apocrypha#:~:text=To%20this%20date%2C%20the%20Apocrypha,and%20Sarah%20in%20the%20Apocrypha%22.)
</details>

#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
<details>
    <summary>Example response</summary>

Each book name is used as a key, with the value corresponding to the number of chapters in that book for the given 
version split into old and new testament.<br>
The following is an example using the NET with the following query: http://<base-uri>/api/version-info/?version=NET
```json
{
  "OT": {
    "Genesis": 50,
    "Exodus": 40,
    "Leviticus": 27,
    "Numbers": 36,
    "Deuteronomy": 34,
    "Joshua": 24,
    "Judges": 21,
    "Ruth": 4,
    "1 Samuel": 31,
    "2 Samuel": 24,
    "1 Kings": 22,
    "2 Kings": 25,
    "1 Chronicles": 29,
    "2 Chronicles": 36,
    "Ezra": 10,
    "Nehemiah": 13,
    "Esther": 10,
    "Job": 42,
    "Psalms": 150,
    "Proverbs": 31,
    "Ecclesiastes": 12,
    "Song of Solomon": 8,
    "Isaiah": 66,
    "Jeremiah": 52,
    "Lamentations": 5,
    "Ezekiel": 48,
    "Daniel": 12,
    "Hosea": 14,
    "Joel": 3,
    "Amos": 9,
    "Obadiah": 1,
    "Jonah": 4,
    "Micah": 7,
    "Nahum": 3,
    "Habakkuk": 3,
    "Zephaniah": 3,
    "Haggai": 2,
    "Zechariah": 14,
    "Malachi": 4
  },
  "NT": {
    "Matthew": 28,
    "Mark": 16,
    "Luke": 24,
    "John": 21,
    "Acts": 28,
    "Romans": 16,
    "1 Corinthians": 16,
    "2 Corinthians": 13,
    "Galatians": 6,
    "Ephesians": 6,
    "Philippians": 4,
    "Colossians": 4,
    "1 Thessalonians": 5,
    "2 Thessalonians": 3,
    "1 Timothy": 6,
    "2 Timothy": 4,
    "Titus": 3,
    "Philemon": 1,
    "Hebrews": 13,
    "James": 5,
    "1 Peter": 5,
    "2 Peter": 3,
    "1 John": 5,
    "2 John": 1,
    "3 John": 1,
    "Jude": 1,
    "Revelation": 22
  }
}
```
</details>

#### Bad requests ([404](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404))
If the query does not match a supported version, the following will be returned
```js
"No version information available"
```

### Versions
Method: GET
#### /api/versions
Returns a list of all currently supported versions.
#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
Example:
```json
{
"versions": [
    "NET"
  ]
}
```

## User endpoint
### Signup
Method: POST
#### /signup
This endpoint requires the headers `email` and `password` for the *new* user to be given.
#### Returns ([201](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)):
JSON Web Token (JWT) of the new user. This is used for further actions.
#### Bad requests:
For user creation errors, the following will be returned 
(code [400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"Error creating user: ${error.message}"
```
For generic firebase issues, the following will be returned 
(code [500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500))
```js
error // Some raw string of the error
```

### Signin
Method: POST
#### /signin
This endpoint requires the headers `email` and `password` for the *existing* user to be given.
#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
JSON Web Token (JWT) of the existing user. This is used for further actions.
#### Bad requests:
For firebase and sign in (will change later) issues, the following will be returned 
(code [500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500))
```js
error // Some raw string of the error
```

### Get-profile
Method: GET
#### /profile
This endpoint requires the header `user` to be either the uid of the user to retrieve or the JWT from before.
#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
```json
{
  "displayName":"Example User", 
  "uid":"5sjSwq6KClSb12a5Rp56xJrh44C3", 
  "photoURL": "https://httpcats.com/204.jpg"
}
```
#### Bad requests
- Invalid/bad UID ([500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500))
```js
"Error finding UID"
```
- Invalid/bad token ([500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500))
```js
"Invalid token"
```
- Issues finding the user's profile from JWT ([500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500))
```js
"Error finding user"
```
- No token or uid sent ([401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401))
```js
"No user information was sent"
```

### Update-profile
Method: POST
#### /update-profile
This endpoint requires the header `user` to be the JWT from before and one or both of the headers `displayName` and 
`photoURL` to be included.
#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
If the update was successful, the following will be returned
```js
"Success"
```
#### Bad requests
- No valid data ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"No valid data was sent"
```
- No token sent ([401](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401))
```js
"No user authorization was sent"
```
- Invalid token ([403](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403))
```js
"Invalid token"
```

### Streaks
Method: GET, POST
#### /streak [GET]
For the get method, data for the streak is retrieved. This requires the `user` header parameter to be the JWT from before
#### Returns
Streak data ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
##### Example data (can change):
```json
{
    "count": 7, 
    "goal": 15, 
    "last-increment": 1689700721,
    "period" :"month"
}
```
No data to retrieve ([500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500))
```js
"No streak data to retrieve"
```
No token sent ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"No user token was sent"
```
Invalid token sent ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"Invalid token"
```

#### /streak [POST]
For the post method, data for the streak will be set. This requires the `user` header parameter to be the JWT from 
before and `streak-data` to be the data to be stored.
#### Returns 
Successful storage ([201](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201))
```js
"Success"
```
Error in saving data (could be firebase itself or configuration issues) ([500](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500))
```js
"Error saving data"
```
No streak data sent ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"No streak data sent"
```
No token sent ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"No user token was sent"
```
Invalid token sent ([400](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400))
```js
"Invalid token"
```

## Internal
### Health check
Method: GET
#### /health
If the container is healthy, the following is returned
```js
"Healthy: OK"
```
