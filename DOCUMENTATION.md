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
the requested search of the Bible. Fair warning, this is a bit slow.
#### Returns ([200](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200))
<details>
    <summary>Example response (warning: large)</summary>

```json
[
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 75,
        "text": "Then Peter remembered what <mark>jesus</mark> had said: “Before the rooster crows, you will deny me three times.” And he went outside and <mark>wept</mark> bitterly."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 72,
        "text": "Immediately a rooster crowed a second time. Then Peter remembered what <mark>jesus</mark> had said to him: “Before a rooster crows twice, you will deny me three times.” And he broke down and <mark>wept</mark>."
    },
    {
        "book": "Luke",
        "chapter": 19,
        "verse": 41,
        "text": "Now when <mark>jesus</mark> approached and saw the city, he <mark>wept</mark> over it,"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 35,
        "text": "<mark><mark>jesus</mark> <mark>wept</mark></mark>."
    },
    {
        "book": "John",
        "chapter": 2,
        "verse": 11,
        "text": "<mark>jesus</mark> did this as the first of his miraculous signs, in Cana of Galilee. In this way he revealed his glory, and his disciples believed in him."
    },
    {
        "book": "Hebrews",
        "chapter": 12,
        "verse": 2,
        "text": "keeping our eyes fixed on <mark>jesus</mark>, the pioneer and perfecter of our faith. For the joy set out for him he endured the cross, disregarding its shame, and <b>has taken his seat at the right hand of the throne</b> of God."
    },
    {
        "book": "John",
        "chapter": 2,
        "verse": 13,
        "text": "Now the Jewish feast of Passover was near, so <mark>jesus</mark> went up to Jerusalem."
    },
    {
        "book": "John",
        "chapter": 2,
        "verse": 19,
        "text": "<mark>jesus</mark> replied, “Destroy this temple and in three days I will raise it up again.”"
    },
    {
        "book": "John",
        "chapter": 2,
        "verse": 21,
        "text": "But <mark>jesus</mark> was speaking about the temple of his body."
    },
    {
        "book": "John",
        "chapter": 2,
        "verse": 22,
        "text": "So after he was raised from the dead, his disciples remembered that he had said this, and they believed the scripture and the saying that <mark>jesus</mark> had spoken."
    },
    {
        "book": "John",
        "chapter": 2,
        "verse": 23,
        "text": "Now while <mark>jesus</mark> was in Jerusalem at the feast of the Passover, many people believed in his name because they saw the miraculous signs he was doing."
    },
    {
        "book": "John",
        "chapter": 2,
        "verse": 24,
        "text": "But <mark>jesus</mark> would not entrust himself to them, because he knew all people."
    },
    {
        "book": "John",
        "chapter": 3,
        "verse": 2,
        "text": "came to <mark>jesus</mark> at night and said to him, “Rabbi, we know that you are a teacher who has come from God. For no one could perform the miraculous signs that you do unless God is with him.”"
    },
    {
        "book": "John",
        "chapter": 3,
        "verse": 3,
        "text": "<mark>jesus</mark> replied, “I tell you the solemn truth, unless a person is born from above, he cannot see the kingdom of God.”"
    },
    {
        "book": "John",
        "chapter": 3,
        "verse": 5,
        "text": "<mark>jesus</mark> answered, “I tell you the solemn truth, unless a person is born of water and spirit, he cannot enter the kingdom of God."
    },
    {
        "book": "Hebrews",
        "chapter": 12,
        "verse": 24,
        "text": "and to <mark>jesus</mark>, the mediator of a new covenant, and to the sprinkled blood that speaks of something better than Abel’s does."
    },
    {
        "book": "John",
        "chapter": 3,
        "verse": 10,
        "text": "<mark>jesus</mark> answered, “Are you the teacher of Israel and yet you don’t understand these things?"
    },
    {
        "book": "Hebrews",
        "chapter": 13,
        "verse": 8,
        "text": "<mark>jesus</mark> Christ is the same yesterday and today and forever!"
    },
    {
        "book": "John",
        "chapter": 3,
        "verse": 22,
        "text": "After this, <mark>jesus</mark> and his disciples came into Judean territory, and there he spent time with them and was baptizing."
    },
    {
        "book": "Hebrews",
        "chapter": 13,
        "verse": 12,
        "text": "Therefore, to sanctify the people by his own blood, <mark>jesus</mark> also suffered outside the camp."
    },
    {
        "book": "Hebrews",
        "chapter": 13,
        "verse": 20,
        "text": "Now may the God of peace who by the blood of the eternal covenant brought back from the dead the great shepherd of the sheep, our Lord <mark>jesus</mark> Christ,"
    },
    {
        "book": "Hebrews",
        "chapter": 13,
        "verse": 21,
        "text": "equip you with every good thing to do his will, working in us what is pleasing before him through <mark>jesus</mark> Christ, to whom be glory forever. Amen."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 1,
        "text": "Now when <mark>jesus</mark> knew that the Pharisees had heard that he was winning and baptizing more disciples than John"
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 2,
        "text": "(although <mark>jesus</mark> himself was not baptizing, but his disciples were),"
    },
    {
        "book": "James",
        "chapter": 1,
        "verse": 1,
        "text": "From James, a slave of God and the Lord <mark>jesus</mark> Christ, to the twelve tribes dispersed abroad. Greetings!"
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 6,
        "text": "Jacob’s well was there, so <mark>jesus</mark>, since he was tired from the journey, sat right down beside the well. It was about noon."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 7,
        "text": "A Samaritan woman came to draw water. <mark>jesus</mark> said to her, “Give me some water to drink.”"
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 10,
        "text": "<mark>jesus</mark> answered her, “If you had known the gift of God and who it is who said to you, ‘Give me some water to drink,’ you would have asked him, and he would have given you living water.”"
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 13,
        "text": "<mark>jesus</mark> replied, “Everyone who drinks some of this water will be thirsty again."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 17,
        "text": "The woman replied, “I have no husband.” <mark>jesus</mark> said to her, “Right you are when you said, ‘I have no husband,’"
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 21,
        "text": "<mark>jesus</mark> said to her, “Believe me, woman, a time is coming when you will worship the Father neither on this mountain nor in Jerusalem."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 26,
        "text": "<mark>jesus</mark> said to her, “I, the one speaking to you, am he.”"
    },
    {
        "book": "James",
        "chapter": 2,
        "verse": 1,
        "text": "My brothers and sisters, do not show prejudice if you possess faith in our glorious Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 34,
        "text": "<mark>jesus</mark> said to them, “My food is to do the will of the one who sent me and to complete his work."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 44,
        "text": "(For <mark>jesus</mark> himself had testified that a prophet has no honor in his own country.)"
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 47,
        "text": "When he heard that <mark>jesus</mark> had come back from Judea to Galilee, he went to him and begged him to come down and heal his son, who was about to die."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 48,
        "text": "So <mark>jesus</mark> said to him, “Unless you people see signs and wonders you will never believe!”"
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 50,
        "text": "<mark>jesus</mark> told him, “Go home; your son will live.” The man believed the word that <mark>jesus</mark> spoke to him, and set off for home."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 53,
        "text": "Then the father realized that it was the very time <mark>jesus</mark> had said to him, “Your son will live,” and he himself believed along with his entire household."
    },
    {
        "book": "John",
        "chapter": 4,
        "verse": 54,
        "text": "<mark>jesus</mark> did this as his second miraculous sign when he returned from Judea to Galilee."
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 1,
        "text": "After this there was a Jewish feast, and <mark>jesus</mark> went up to Jerusalem."
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 6,
        "text": "When <mark>jesus</mark> saw him lying there and when he realized that the man had been disabled a long time already, he said to him, “Do you want to become well?”"
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 8,
        "text": "<mark>jesus</mark> said to him, “Stand up! Pick up your mat and walk.”"
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 13,
        "text": "But the man who had been healed did not know who it was, for <mark>jesus</mark> had slipped out, since there was a crowd in that place."
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 14,
        "text": "After this <mark>jesus</mark> found him at the temple and said to him, “Look, you have become well. Don’t sin any more, lest anything worse happen to you.”"
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 15,
        "text": "The man went away and informed the Jewish leaders that <mark>jesus</mark> was the one who had made him well."
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 16,
        "text": "Now because <mark>jesus</mark> was doing these things on the Sabbath, the Jewish leaders began persecuting him."
    },
    {
        "book": "John",
        "chapter": 5,
        "verse": 19,
        "text": "So <mark>jesus</mark> answered them, “I tell you the solemn truth, the Son can do nothing on his own initiative, but only what he sees the Father doing. For whatever the Father does, the Son does likewise."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 1,
        "text": "After this <mark>jesus</mark> went away to the other side of the Sea of Galilee (also called the Sea of Tiberias)."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 3,
        "text": "So <mark>jesus</mark> went on up the mountainside and sat down there with his disciples."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 5,
        "text": "Then <mark>jesus</mark>, when he looked up and saw that a large crowd was coming to him, said to Philip, “Where can we buy bread so that these people may eat?”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 6,
        "text": "(Now <mark>jesus</mark> said this to test him, for he knew what he was going to do.)"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 8,
        "text": "One of <mark>jesus</mark>’ disciples, Andrew, Simon Peter’s brother, said to him,"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 10,
        "text": "<mark>jesus</mark> said, “Have the people sit down.” (Now there was a lot of grass in that place.) So the men sat down, about five thousand in number."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 11,
        "text": "Then <mark>jesus</mark> took the loaves, and when he had given thanks, he distributed the bread to those who were seated. He then did the same with the fish, as much as they wanted."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 12,
        "text": "When they were all satisfied, <mark>jesus</mark> said to his disciples, “Gather up the broken pieces that are left over, so that nothing is wasted.”"
    },
    {
        "book": "1 Peter",
        "chapter": 1,
        "verse": 1,
        "text": "From Peter, an apostle of <mark>jesus</mark> Christ, to those temporarily residing abroad (in Pontus, Galatia, Cappadocia, the province of Asia, and Bithynia) who are chosen"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 14,
        "text": "Now when the people saw the miraculous sign that <mark>jesus</mark> performed, they began to say to one another, “This is certainly <b>the Prophet</b> <b>who is to come into the world</b>.”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 15,
        "text": "Then <mark>jesus</mark>, because he knew they were going to come and seize him by force to make him king, withdrew again up the mountainside alone."
    },
    {
        "book": "1 Peter",
        "chapter": 1,
        "verse": 2,
        "text": "according to the foreknowledge of God the Father by being set apart by the Spirit for obedience and for sprinkling with <mark>jesus</mark> Christ’s blood. May grace and peace be yours in full measure!"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 17,
        "text": "got into a boat, and started to cross the lake to Capernaum. (It had already become dark, and <mark>jesus</mark> had not yet come to them.)"
    },
    {
        "book": "1 Peter",
        "chapter": 1,
        "verse": 3,
        "text": "Blessed be the God and Father of our Lord <mark>jesus</mark> Christ! By his great mercy he gave us new birth into a living hope through the resurrection of <mark>jesus</mark> Christ from the dead,"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 19,
        "text": "Then, when they had rowed about three or four miles, they caught sight of <mark>jesus</mark> walking on the lake, approaching the boat, and they were frightened."
    },
    {
        "book": "1 Peter",
        "chapter": 1,
        "verse": 7,
        "text": "Such trials show the proven character of your faith, which is much more valuable than gold — gold that is tested by fire, even though it is passing away — and will bring praise and glory and honor when <mark>jesus</mark> Christ is revealed."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 22,
        "text": "The next day the crowd that remained on the other side of the lake realized that only one small boat had been there, and that <mark>jesus</mark> had not boarded it with his disciples, but that his disciples had gone away alone."
    },
    {
        "book": "1 Peter",
        "chapter": 1,
        "verse": 13,
        "text": "Therefore, get your minds ready for action by being fully sober, and set your hope completely on the grace that will be brought to you when <mark>jesus</mark> Christ is revealed."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 24,
        "text": "So when the crowd realized that neither <mark>jesus</mark> nor his disciples were there, they got into the boats and came to Capernaum looking for <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 26,
        "text": "<mark>jesus</mark> replied, “I tell you the solemn truth, you are looking for me not because you saw miraculous signs, but because you ate all the loaves of bread you wanted."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 29,
        "text": "<mark>jesus</mark> replied, “This is the deed God requires — to believe in the one whom he sent.”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 32,
        "text": "Then <mark>jesus</mark> told them, “I tell you the solemn truth, it is not Moses who has given you the bread from heaven, but my Father is giving you the true bread from heaven."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 35,
        "text": "<mark>jesus</mark> said to them, “I am the bread of life. The one who comes to me will never go hungry, and the one who believes in me will never be thirsty."
    },
    {
        "book": "1 Peter",
        "chapter": 2,
        "verse": 5,
        "text": "you yourselves, as living stones, are built up as a spiritual house to be a holy priesthood and to offer spiritual sacrifices that are acceptable to God through <mark>jesus</mark> Christ."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 41,
        "text": "Then the Jews who were hostile to <mark>jesus</mark> began complaining about him because he said, “I am the bread that came down from heaven,”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 42,
        "text": "and they said, “Isn’t this <mark>jesus</mark> the son of Joseph, whose father and mother we know? How can he now say, ‘I have come down from heaven’?”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 43,
        "text": "<mark>jesus</mark> replied, “Do not complain about me to one another."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 52,
        "text": "Then the Jews who were hostile to <mark>jesus</mark> began to argue with one another, “How can this man give us his flesh to eat?”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 53,
        "text": "<mark>jesus</mark> said to them, “I tell you the solemn truth, unless you eat the flesh of the Son of Man and drink his blood, you have no life in yourselves."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 59,
        "text": "<mark>jesus</mark> said these things while he was teaching in the synagogue in Capernaum."
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 61,
        "text": "When <mark>jesus</mark> was aware that his disciples were complaining about this, he said to them, “Does this cause you to be offended?"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 64,
        "text": "But there are some of you who do not believe.” (For <mark>jesus</mark> had already known from the beginning who those were who did not believe, and who it was who would betray him.)"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 65,
        "text": "So <mark>jesus</mark> added, “Because of this I told you that no one can come to me unless the Father has allowed him to come.”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 67,
        "text": "So <mark>jesus</mark> said to the twelve, “You don’t want to go away too, do you?”"
    },
    {
        "book": "John",
        "chapter": 6,
        "verse": 70,
        "text": "<mark>jesus</mark> replied, “Didn’t I choose you, the twelve, and yet one of you is the devil?”"
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 1,
        "text": "After this <mark>jesus</mark> traveled throughout Galilee. He stayed out of Judea because the Jewish leaders wanted to kill him."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 3,
        "text": "So <mark>jesus</mark>’ brothers advised him, “Leave here and go to Judea so your disciples may see your miracles that you are performing."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 6,
        "text": "So <mark>jesus</mark> replied, “My time has not yet arrived, but you are ready at any opportunity!"
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 10,
        "text": "But when his brothers had gone up to the feast, then <mark>jesus</mark> himself also went up, not openly but in secret."
    },
    {
        "book": "1 Peter",
        "chapter": 3,
        "verse": 21,
        "text": "And this prefigured baptism, which now saves you — not the washing off of physical dirt but the pledge of a good conscience to God — through the resurrection of <mark>jesus</mark> Christ,"
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 14,
        "text": "When the feast was half over, <mark>jesus</mark> went up to the temple courts and began to teach."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 16,
        "text": "So <mark>jesus</mark> replied, “My teaching is not from me, but from the one who sent me."
    },
    {
        "book": "1 Peter",
        "chapter": 4,
        "verse": 5,
        "text": "They will face a reckoning before <mark>jesus</mark> Christ who stands ready to judge the living and the dead."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 21,
        "text": "<mark>jesus</mark> replied, “I performed one miracle and you are all amazed."
    },
    {
        "book": "1 Peter",
        "chapter": 4,
        "verse": 11,
        "text": "Whoever speaks, let it be with God’s words. Whoever serves, do so with the strength that God supplies, so that in everything God will be glorified through <mark>jesus</mark> Christ. To him belong the glory and the power forever and ever. Amen."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 28,
        "text": "Then <mark>jesus</mark>, while teaching in the temple courts, cried out, “You both know me and know where I come from! And I have not come on my own initiative, but the one who sent me is true. You do not know him,"
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 30,
        "text": "So then they tried to seize <mark>jesus</mark>, but no one laid a hand on him, because his time had not yet come."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 32,
        "text": "The Pharisees heard the crowd murmuring these things about <mark>jesus</mark>, so the chief priests and the Pharisees sent officers to arrest him."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 33,
        "text": "Then <mark>jesus</mark> said, “I will be with you for only a little while longer, and then I am going to the one who sent me."
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 37,
        "text": "On the last day of the feast, the greatest day, <mark>jesus</mark> stood up and shouted out, “If anyone is thirsty, let him come to me, and"
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 39,
        "text": "(Now he said this about the Spirit, whom those who believed in him were going to receive, for the Spirit had not yet been given, because <mark>jesus</mark> was not yet glorified.)"
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 43,
        "text": "So there was a division in the crowd because of <mark>jesus</mark>."
    },
    {
        "book": "2 Peter",
        "chapter": 1,
        "verse": 1,
        "text": "From Simeon Peter, a slave and apostle of <mark>jesus</mark> Christ, to those who through the righteousness of our God and Savior, <mark>jesus</mark> Christ, have been granted a faith just as precious as ours."
    },
    {
        "book": "2 Peter",
        "chapter": 1,
        "verse": 2,
        "text": "May grace and peace be lavished on you as you grow in the rich knowledge of God and of <mark>jesus</mark> our Lord!"
    },
    {
        "book": "John",
        "chapter": 7,
        "verse": 50,
        "text": "Nicodemus, who had gone to <mark>jesus</mark> before and who was one of the rulers, said,"
    },
    {
        "book": "2 Peter",
        "chapter": 1,
        "verse": 8,
        "text": "For if these things are really yours and are continually increasing, they will keep you from becoming ineffective and unproductive in your pursuit of knowing our Lord <mark>jesus</mark> Christ more intimately."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 1,
        "text": "But <mark>jesus</mark> went to the Mount of Olives."
    },
    {
        "book": "2 Peter",
        "chapter": 1,
        "verse": 11,
        "text": "For thus an entrance into the eternal kingdom of our Lord and Savior, <mark>jesus</mark> Christ, will be richly provided for you."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 4,
        "text": "and said to <mark>jesus</mark>, “Teacher, this woman was caught in the very act of adultery."
    },
    {
        "book": "2 Peter",
        "chapter": 1,
        "verse": 14,
        "text": "since I know that my tabernacle will soon be removed, because our Lord <mark>jesus</mark> Christ revealed this to me."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 6,
        "text": "(Now they were asking this in an attempt to trap him, so that they could bring charges against him.) <mark>jesus</mark> bent down and wrote on the ground with his finger."
    },
    {
        "book": "2 Peter",
        "chapter": 1,
        "verse": 16,
        "text": "For we did not follow cleverly concocted fables when we made known to you the power and return of our Lord <mark>jesus</mark> Christ; no, we were eyewitnesses of his grandeur."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 9,
        "text": "Now when they heard this, they began to drift away one at a time, starting with the older ones, until <mark>jesus</mark> was left alone with the woman standing before him."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 10,
        "text": "<mark>jesus</mark> stood up straight and said to her, “Woman, where are they? Did no one condemn you?”"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 11,
        "text": "She replied, “No one, Lord.” And <mark>jesus</mark> said, “I do not condemn you either. Go, and from now on do not sin any more.”]]"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 12,
        "text": "Then <mark>jesus</mark> spoke out again, “I am the light of the world. The one who follows me will never walk in darkness, but will have the light of life.”"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 14,
        "text": "<mark>jesus</mark> answered, “Even if I testify about myself, my testimony is true, because I know where I came from and where I am going. But you people do not know where I came from or where I am going."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 19,
        "text": "Then they began asking him, “Who is your father?” <mark>jesus</mark> answered, “You do not know either me or my Father. If you knew me you would know my Father too.”"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 20,
        "text": "(<mark>jesus</mark> spoke these words near the offering box while he was teaching in the temple courts. No one seized him because his time had not yet come.)"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 21,
        "text": "Then <mark>jesus</mark> said to them again, “I am going away, and you will look for me but will die in your sin. Where I am going you cannot come.”"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 23,
        "text": "<mark>jesus</mark> replied, “You people are from below; I am from above. You people are from this world; I am not from this world."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 25,
        "text": "So they said to him, “Who are you?” <mark>jesus</mark> replied, “What I have told you from the beginning."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 28,
        "text": "Then <mark>jesus</mark> said, “When you lift up the Son of Man, then you will know that I am he, and I do nothing on my own initiative, but I speak just what the Father taught me."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 31,
        "text": "Then <mark>jesus</mark> said to those Judeans who had believed him, “If you continue to follow my teaching, you are really my disciples"
    },
    {
        "book": "2 Peter",
        "chapter": 2,
        "verse": 20,
        "text": "For if after they have escaped the filthy things of the world through the rich knowledge of our Lord and Savior <mark>jesus</mark> Christ, they again get entangled in them and succumb to them, their last state has become worse for them than their first."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 34,
        "text": "<mark>jesus</mark> answered them, “I tell you the solemn truth, everyone who practices sin is a slave of sin."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 39,
        "text": "They answered him, “Abraham is our father!” <mark>jesus</mark> replied, “If you are Abraham’s children, you would be doing the deeds of Abraham."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 41,
        "text": "You people are doing the deeds of your father.” Then they said to <mark>jesus</mark>, “We were not born as a result of immorality! We have only one Father, God himself.”"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 42,
        "text": "<mark>jesus</mark> replied, “If God were your Father, you would love me, for I have come from God and am now here. I have not come on my own initiative, but he sent me."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 49,
        "text": "<mark>jesus</mark> answered, “I am not possessed by a demon, but I honor my Father — and yet you dishonor me."
    },
    {
        "book": "2 Peter",
        "chapter": 3,
        "verse": 18,
        "text": "But grow in the grace and knowledge of our Lord and Savior <mark>jesus</mark> Christ. To him be the honor both now and on that eternal day."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 54,
        "text": "<mark>jesus</mark> replied, “If I glorify myself, my glory is worthless. The one who glorifies me is my Father, about whom you people say, ‘He is our God.’"
    },
    {
        "book": "1 John",
        "chapter": 1,
        "verse": 3,
        "text": "What we have seen and heard we announce to you too, so that you may have fellowship with us (and indeed our fellowship is with the Father and with his Son <mark>jesus</mark> Christ)."
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 58,
        "text": "<mark>jesus</mark> said to them, “I tell you the solemn truth, before Abraham came into existence, I am!”"
    },
    {
        "book": "John",
        "chapter": 8,
        "verse": 59,
        "text": "Then they picked up stones to throw at him, but <mark>jesus</mark> hid himself and went out from the temple area."
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 1,
        "text": "Now as <mark>jesus</mark> was passing by, he saw a man who had been blind from birth."
    },
    {
        "book": "1 John",
        "chapter": 1,
        "verse": 7,
        "text": "But if we walk in the light as he himself is in the light, we have fellowship with one another and the blood of <mark>jesus</mark> his Son cleanses us from all sin."
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 3,
        "text": "<mark>jesus</mark> answered, “Neither this man nor his parents sinned, but he was born blind so that the acts of God may be revealed through what happens to him."
    },
    {
        "book": "1 John",
        "chapter": 2,
        "verse": 1,
        "text": "(My little children, I am writing these things to you so that you may not sin. ) But if anyone does sin, we have an advocate with the Father, <mark>jesus</mark> Christ the righteous One,"
    },
    {
        "book": "1 John",
        "chapter": 2,
        "verse": 6,
        "text": "The one who says he resides in God ought himself to walk just as <mark>jesus</mark> walked."
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 11,
        "text": "He replied, “The man called <mark>jesus</mark> made mud, smeared it on my eyes and told me, ‘Go to Siloam and wash.’ So I went and washed, and was able to see.”"
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 14,
        "text": "(Now the day on which <mark>jesus</mark> made the mud and caused him to see was a Sabbath.)"
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 22,
        "text": "(His parents said these things because they were afraid of the Jewish religious leaders. For the Jewish leaders had already agreed that anyone who confessed <mark>jesus</mark> to be the Christ would be put out of the synagogue."
    },
    {
        "book": "1 John",
        "chapter": 2,
        "verse": 22,
        "text": "Who is the liar but the person who denies that <mark>jesus</mark> is the Christ ? This one is the antichrist: the person who denies the Father and the Son."
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 35,
        "text": "<mark>jesus</mark> heard that they had thrown him out, so he found the man and said to him, “Do you believe in the Son of Man?”"
    },
    {
        "book": "1 John",
        "chapter": 3,
        "verse": 3,
        "text": "And everyone who has this hope focused on him purifies himself, just as <mark>jesus</mark> is pure)."
    },
    {
        "book": "1 John",
        "chapter": 3,
        "verse": 5,
        "text": "And you know that <mark>jesus</mark> was revealed to take away sins, and in him there is no sin."
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 37,
        "text": "<mark>jesus</mark> told him, “You have seen him; he is the one speaking with you.” ["
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 39,
        "text": "<mark>jesus</mark> said,] “For judgment I have come into this world, so that those who do not see may gain their sight, and the ones who see may become blind.”"
    },
    {
        "book": "1 John",
        "chapter": 3,
        "verse": 7,
        "text": "Little children, let no one deceive you: The one who practices righteousness is righteous, just as <mark>jesus</mark> is righteous."
    },
    {
        "book": "John",
        "chapter": 9,
        "verse": 41,
        "text": "<mark>jesus</mark> replied, “If you were blind, you would not be guilty of sin, but now because you claim that you can see, your guilt remains.”"
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 6,
        "text": "<mark>jesus</mark> told them this parable, but they did not understand what he was saying to them."
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 7,
        "text": "So <mark>jesus</mark> said to them again, “I tell you the solemn truth, I am the door for the sheep."
    },
    {
        "book": "1 John",
        "chapter": 3,
        "verse": 16,
        "text": "We have come to know love by this: that <mark>jesus</mark> laid down his life for us; thus we ought to lay down our lives for our fellow Christians."
    },
    {
        "book": "1 John",
        "chapter": 3,
        "verse": 23,
        "text": "Now this is his commandment: that we believe in the name of his Son <mark>jesus</mark> Christ and love one another, just as he gave us the commandment."
    },
    {
        "book": "1 John",
        "chapter": 4,
        "verse": 2,
        "text": "By this you know the Spirit of God: Every spirit that confesses <mark>jesus</mark> as the Christ who has come in the flesh is from God,"
    },
    {
        "book": "1 John",
        "chapter": 4,
        "verse": 3,
        "text": "but every spirit that does not confess <mark>jesus</mark> is not from God, and this is the spirit of the antichrist, which you have heard is coming, and now is already in the world."
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 23,
        "text": "It was winter, and <mark>jesus</mark> was walking in the temple area in Solomon’s Portico."
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 25,
        "text": "<mark>jesus</mark> replied, “I told you and you do not believe. The deeds I do in my Father’s name testify about me."
    },
    {
        "book": "1 John",
        "chapter": 4,
        "verse": 15,
        "text": "If anyone confesses that <mark>jesus</mark> is the Son of God, God resides in him and he in God."
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 32,
        "text": "<mark>jesus</mark> said to them, “I have shown you many good deeds from the Father. For which one of them are you going to stone me?”"
    },
    {
        "book": "1 John",
        "chapter": 4,
        "verse": 17,
        "text": "By this love is perfected with us, so that we may have confidence in the day of judgment, because just as <mark>jesus</mark> is, so also are we in this world."
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 34,
        "text": "<mark>jesus</mark> answered, “Is it not written in your law, ‘<b>I said, you are gods</b>’?"
    },
    {
        "book": "1 John",
        "chapter": 5,
        "verse": 1,
        "text": "Everyone who believes that <mark>jesus</mark> is the Christ has been fathered by God, and everyone who loves the father loves the child fathered by him."
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 40,
        "text": "<mark>jesus</mark> went back across the Jordan River again to the place where John had been baptizing at an earlier time, and he stayed there."
    },
    {
        "book": "1 John",
        "chapter": 5,
        "verse": 5,
        "text": "Now who is the person who has conquered the world except the one who believes that <mark>jesus</mark> is the Son of God?"
    },
    {
        "book": "John",
        "chapter": 10,
        "verse": 42,
        "text": "And many believed in <mark>jesus</mark> there."
    },
    {
        "book": "1 John",
        "chapter": 5,
        "verse": 6,
        "text": "<mark>jesus</mark> Christ is the one who came by water and blood — not by the water only, but by the water and the blood. And the Spirit is the one who testifies, because the Spirit is the truth."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 3,
        "text": "So the sisters sent a message to <mark>jesus</mark>, “Lord, look, the one you love is sick.”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 4,
        "text": "When <mark>jesus</mark> heard this, he said, “This sickness will not lead to death, but to God’s glory, so that the Son of God may be glorified through it.”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 5,
        "text": "(Now <mark>jesus</mark> loved Martha and her sister and Lazarus.)"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 9,
        "text": "<mark>jesus</mark> replied, “Are there not twelve hours in a day? If anyone walks around in the daytime, he does not stumble, because he sees the light of this world."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 13,
        "text": "(Now <mark>jesus</mark> had been talking about his death, but they thought he had been talking about real sleep.)"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 14,
        "text": "Then <mark>jesus</mark> told them plainly, “Lazarus has died,"
    },
    {
        "book": "1 John",
        "chapter": 5,
        "verse": 20,
        "text": "And we know that the Son of God has come and has given us insight to know him who is true, and we are in him who is true, in his Son <mark>jesus</mark> Christ. This one is the true God and eternal life."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 17,
        "text": "When <mark>jesus</mark> arrived, he found that Lazarus had been in the tomb four days already."
    },
    {
        "book": "2 John",
        "chapter": 1,
        "verse": 3,
        "text": "Grace, mercy, and peace will be with us from God the Father and from <mark>jesus</mark> Christ the Son of the Father, in truth and love."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 20,
        "text": "So when Martha heard that <mark>jesus</mark> was coming, she went out to meet him, but Mary was sitting in the house."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 21,
        "text": "Martha said to <mark>jesus</mark>, “Lord, if you had been here, my brother would not have died."
    },
    {
        "book": "2 John",
        "chapter": 1,
        "verse": 7,
        "text": "For many deceivers have gone out into the world, people who do not confess <mark>jesus</mark> as Christ coming in the flesh. This person is the deceiver and the antichrist!"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 23,
        "text": "<mark>jesus</mark> replied, “Your brother will come back to life again.”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 25,
        "text": "<mark>jesus</mark> said to her, “I am the resurrection and the life. The one who believes in me will live even if he dies,"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 30,
        "text": "(Now <mark>jesus</mark> had not yet entered the village, but was still in the place where Martha had come out to meet him.)"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 32,
        "text": "Now when Mary came to the place where <mark>jesus</mark> was and saw him, she fell at his feet and said to him, “Lord, if you had been here, my brother would not have died.”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 33,
        "text": "When <mark>jesus</mark> saw her weeping, and the people who had come with her weeping, he was intensely moved in spirit and greatly distressed."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 38,
        "text": "<mark>jesus</mark>, intensely moved again, came to the tomb. (Now it was a cave, and a stone was placed across it.)"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 39,
        "text": "<mark>jesus</mark> said, “Take away the stone.” Martha, the sister of the deceased, replied, “Lord, by this time the body will have a bad smell, because he has been buried four days.”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 40,
        "text": "<mark>jesus</mark> responded, “Didn’t I tell you that if you believe, you would see the glory of God?”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 41,
        "text": "So they took away the stone. <mark>jesus</mark> looked upward and said, “Father, I thank you that you have listened to me."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 44,
        "text": "The one who had died came out, his feet and hands tied up with strips of cloth, and a cloth wrapped around his face. <mark>jesus</mark> said to them, “Unwrap him and let him go.”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 45,
        "text": "Then many of the people, who had come with Mary and had seen the things <mark>jesus</mark> did, believed in him."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 46,
        "text": "But some of them went to the Pharisees and reported to them what <mark>jesus</mark> had done."
    },
    {
        "book": "Jude",
        "chapter": 1,
        "verse": 1,
        "text": "From Jude, a slave of <mark>jesus</mark> Christ and brother of James, to those who are called, wrapped in the love of God the Father and kept for <mark>jesus</mark> Christ."
    },
    {
        "book": "Jude",
        "chapter": 1,
        "verse": 4,
        "text": "For certain men have secretly slipped in among you — men who long ago were marked out for the condemnation I am about to describe — ungodly men who have turned the grace of our God into a license for evil and who deny our only Master and Lord, <mark>jesus</mark> Christ."
    },
    {
        "book": "Jude",
        "chapter": 1,
        "verse": 5,
        "text": "Now I desire to remind you (even though you have been fully informed of these facts once for all ) that <mark>jesus</mark>, having saved the people out of the land of Egypt, later destroyed those who did not believe."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 51,
        "text": "(Now he did not say this on his own, but because he was high priest that year, he prophesied that <mark>jesus</mark> was going to die for the Jewish nation,"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 54,
        "text": "Thus <mark>jesus</mark> no longer went around publicly among the Judeans, but went away from there to the region near the wilderness, to a town called Ephraim, and stayed there with his disciples."
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 56,
        "text": "Thus they were looking for <mark>jesus</mark>, and saying to one another as they stood in the temple courts, “What do you think? That he won’t come to the feast?”"
    },
    {
        "book": "John",
        "chapter": 11,
        "verse": 57,
        "text": "(Now the chief priests and the Pharisees had given orders that anyone who knew where <mark>jesus</mark> was should report it, so that they could arrest him.)"
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 1,
        "text": "Then, six days before the Passover, <mark>jesus</mark> came to Bethany, where Lazarus lived, whom he had raised from the dead."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 2,
        "text": "So they prepared a dinner for <mark>jesus</mark> there. Martha was serving, and Lazarus was among those present at the table with him."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 3,
        "text": "Then Mary took three quarters of a pound of expensive aromatic oil from pure nard and anointed the feet of <mark>jesus</mark>. She then wiped his feet dry with her hair. (Now the house was filled with the fragrance of the perfumed oil.)"
    },
    {
        "book": "Jude",
        "chapter": 1,
        "verse": 17,
        "text": "But you, dear friends — recall the predictions foretold by the apostles of our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 7,
        "text": "So <mark>jesus</mark> said, “Leave her alone. She has kept it for the day of my burial."
    },
    {
        "book": "Jude",
        "chapter": 1,
        "verse": 21,
        "text": "maintain yourselves in the love of God, while anticipating the mercy of our Lord <mark>jesus</mark> Christ that brings eternal life."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 9,
        "text": "Now a large crowd of Judeans learned that <mark>jesus</mark> was there, and so they came not only because of him but also to see Lazarus whom he had raised from the dead."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 11,
        "text": "for on account of him many of the Jewish people from Jerusalem were going away and believing in <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 12,
        "text": "The next day the large crowd that had come to the feast heard that <mark>jesus</mark> was coming to Jerusalem."
    },
    {
        "book": "Jude",
        "chapter": 1,
        "verse": 25,
        "text": "to the only God our Savior through <mark>jesus</mark> Christ our Lord, be glory, majesty, power, and authority, before all time, and now, and for all eternity. Amen."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 14,
        "text": "<mark>jesus</mark> found a young donkey and sat on it, just as it is written,"
    },
    {
        "book": "Revelation",
        "chapter": 1,
        "verse": 1,
        "text": "The revelation of <mark>jesus</mark> Christ, which God gave him to show his servants what must happen very soon. He made it clear by sending his angel to his servant John,"
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 16,
        "text": "(His disciples did not understand these things when they first happened, but when <mark>jesus</mark> was glorified, then they remembered that these things were written about him and that these things had happened to him.)"
    },
    {
        "book": "Revelation",
        "chapter": 1,
        "verse": 2,
        "text": "who then testified to everything that he saw concerning the word of God and the testimony about <mark>jesus</mark> Christ."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 18,
        "text": "Because they had heard that <mark>jesus</mark> had performed this miraculous sign, the crowd went out to meet him."
    },
    {
        "book": "Revelation",
        "chapter": 1,
        "verse": 5,
        "text": "and from <mark>jesus</mark> Christ — the faithful witness, the firstborn from among the dead, the ruler over the kings of the earth. To the one who loves us and has set us free from our sins at the cost of his own blood"
    },
    {
        "book": "Revelation",
        "chapter": 1,
        "verse": 9,
        "text": "I, John, your brother and the one who shares with you in the persecution, kingdom, and endurance that are in <mark>jesus</mark>, was on the island called Patmos because of the word of God and the testimony about <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 21,
        "text": "So these approached Philip, who was from Bethsaida in Galilee, and requested, “Sir, we would like to see <mark>jesus</mark>.”"
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 22,
        "text": "Philip went and told Andrew, and they both went and told <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 23,
        "text": "<mark>jesus</mark> replied, “The time has come for the Son of Man to be glorified."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 30,
        "text": "<mark>jesus</mark> said, “This voice has not come for my benefit but for yours."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 35,
        "text": "<mark>jesus</mark> replied, “The light is with you for a little while longer. Walk while you have the light, so that the darkness may not overtake you. The one who walks in the darkness does not know where he is going."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 36,
        "text": "While you have the light, believe in the light, so that you may become sons of light.” When <mark>jesus</mark> had said these things, he went away and hid himself from them."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 37,
        "text": "Although <mark>jesus</mark> had performed so many miraculous signs before them, they still refused to believe in him,"
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 42,
        "text": "Nevertheless, even among the rulers many believed in him, but because of the Pharisees they would not confess <mark>jesus</mark> to be the Christ, so that they would not be put out of the synagogue."
    },
    {
        "book": "John",
        "chapter": 12,
        "verse": 44,
        "text": "But <mark>jesus</mark> shouted out, “The one who believes in me does not believe in me, but in the one who sent me,"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 1,
        "text": "Just before the Passover feast, <mark>jesus</mark> knew that his time had come to depart from this world to the Father. Having loved his own who were in the world, he now loved them to the very end."
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 2,
        "text": "The evening meal was in progress, and the devil had already put into the heart of Judas Iscariot, Simon’s son, that he should betray <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 3,
        "text": "Because <mark>jesus</mark> knew that the Father had handed all things over to him, and that he had come from God and was going back to God,"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 7,
        "text": "<mark>jesus</mark> replied, “You do not understand what I am doing now, but you will understand after these things.”"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 8,
        "text": "Peter said to him, “You will never wash my feet!” <mark>jesus</mark> replied, “If I do not wash you, you have no share with me.”"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 10,
        "text": "<mark>jesus</mark> replied, “The one who has bathed needs only to wash his feet, but is completely clean. And you disciples are clean, but not every one of you.”"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 11,
        "text": "(For <mark>jesus</mark> knew the one who was going to betray him. For this reason he said, “Not every one of you is clean.”)"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 12,
        "text": "So when <mark>jesus</mark> had washed their feet and put his outer clothing back on, he took his place at the table again and said to them, “Do you understand what I have done for you?"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 21,
        "text": "When he had said these things, <mark>jesus</mark> was greatly distressed in spirit, and testified, “I tell you the solemn truth, one of you will betray me.”"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 23,
        "text": "One of his disciples, the one <mark>jesus</mark> loved, was at the table to the right of <mark>jesus</mark> in a place of honor."
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 24,
        "text": "So Simon Peter gestured to this disciple to ask <mark>jesus</mark> who it was he was referring to."
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 25,
        "text": "Then the disciple whom <mark>jesus</mark> loved leaned back against <mark>jesus</mark>’ chest and asked him, “Lord, who is it?”"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 26,
        "text": "<mark>jesus</mark> replied, “It is the one to whom I will give this piece of bread after I have dipped it in the dish.” Then he dipped the piece of bread in the dish and gave it to Judas Iscariot, Simon’s son."
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 27,
        "text": "And after Judas took the piece of bread, Satan entered into him. <mark>jesus</mark> said to him, “What you are about to do, do quickly.”"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 28,
        "text": "(Now none of those present at the table understood why <mark>jesus</mark> said this to Judas."
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 29,
        "text": "Some thought that, because Judas had the money box, <mark>jesus</mark> was telling him to buy whatever they needed for the feast, or to give something to the poor.)"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 31,
        "text": "When Judas had gone out, <mark>jesus</mark> said, “Now the Son of Man is glorified, and God is glorified in him."
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 36,
        "text": "Simon Peter said to him, “Lord, where are you going?” <mark>jesus</mark> replied, “Where I am going, you cannot follow me now, but you will follow later.”"
    },
    {
        "book": "John",
        "chapter": 13,
        "verse": 38,
        "text": "<mark>jesus</mark> answered, “Will you lay down your life for me? I tell you the solemn truth, the rooster will not crow until you have denied me three times!"
    },
    {
        "book": "John",
        "chapter": 14,
        "verse": 6,
        "text": "<mark>jesus</mark> replied, “I am the way, and the truth, and the life. No one comes to the Father except through me."
    },
    {
        "book": "John",
        "chapter": 14,
        "verse": 9,
        "text": "<mark>jesus</mark> replied, “Have I been with you for so long, and you have not known me, Philip? The person who has seen me has seen the Father! How can you say, ‘Show us the Father’?"
    },
    {
        "book": "John",
        "chapter": 14,
        "verse": 23,
        "text": "<mark>jesus</mark> replied, “If anyone loves me, he will obey my word, and my Father will love him, and we will come to him and take up residence with him."
    },
    {
        "book": "John",
        "chapter": 16,
        "verse": 19,
        "text": "<mark>jesus</mark> could see that they wanted to ask him about these things, so he said to them, “Are you asking each other about this — that I said, ‘In a little while you will not see me; again after a little while, you will see me’?"
    },
    {
        "book": "John",
        "chapter": 16,
        "verse": 31,
        "text": "<mark>jesus</mark> replied, “Do you now believe?"
    },
    {
        "book": "John",
        "chapter": 17,
        "verse": 1,
        "text": "When <mark>jesus</mark> had finished saying these things, he looked upward to heaven and said, “Father, the time has come. Glorify your Son, so that your Son may glorify you —"
    },
    {
        "book": "John",
        "chapter": 17,
        "verse": 3,
        "text": "Now this is eternal life — that they know you, the only true God, and <mark>jesus</mark> Christ, whom you sent."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 1,
        "text": "When he had said these things, <mark>jesus</mark> went out with his disciples across the Kidron Valley. There was an orchard there, and he and his disciples went into it."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 2,
        "text": "(Now Judas, the one who betrayed him, knew the place too, because <mark>jesus</mark> had met there many times with his disciples.)"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 4,
        "text": "Then <mark>jesus</mark>, because he knew everything that was going to happen to him, came and asked them, “Who are you looking for?”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 5,
        "text": "They replied, “<mark>jesus</mark> the Nazarene.” He told them, “I am he.” (Now Judas, the one who betrayed him, was standing there with them.)"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 6,
        "text": "So when <mark>jesus</mark> said to them, “I am he,” they retreated and fell to the ground."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 7,
        "text": "Then <mark>jesus</mark> asked them again, “Who are you looking for?” And they said, “<mark>jesus</mark> the Nazarene.”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 8,
        "text": "<mark>jesus</mark> replied, “I told you that I am he. If you are looking for me, let these men go.”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 11,
        "text": "But <mark>jesus</mark> said to Peter, “Put your sword back into its sheath! Am I not to drink the cup that the Father has given me?”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 12,
        "text": "Then the squad of soldiers with their commanding officer and the officers of the Jewish leaders arrested <mark>jesus</mark> and tied him up."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 15,
        "text": "Simon Peter and another disciple followed them as they brought <mark>jesus</mark> to Annas. (Now the other disciple was acquainted with the high priest, and he went with <mark>jesus</mark> into the high priest’s courtyard.)"
    },
    {
        "book": "Revelation",
        "chapter": 12,
        "verse": 17,
        "text": "So the dragon became enraged at the woman and went away to make war on the rest of her children, those who keep God’s commandments and hold to the testimony about <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 19,
        "text": "While this was happening, the high priest questioned <mark>jesus</mark> about his disciples and about his teaching."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 20,
        "text": "<mark>jesus</mark> replied, “I have spoken publicly to the world. I always taught in the synagogues and in the temple courts, where all the Jewish people assemble together. I have said nothing in secret."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 22,
        "text": "When <mark>jesus</mark> had said this, one of the high priest’s officers who stood nearby struck him on the face and said, “Is that the way you answer the high priest?”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 23,
        "text": "<mark>jesus</mark> replied, “If I have said something wrong, confirm what is wrong. But if I spoke correctly, why strike me?”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 28,
        "text": "Then they brought <mark>jesus</mark> from Caiaphas to the Roman governor’s residence. (Now it was very early morning.) They did not go into the governor’s residence so they would not be ceremonially defiled, but could eat the Passover meal."
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 32,
        "text": "(This happened to fulfill the word <mark>jesus</mark> had spoken when he indicated what kind of death he was going to die. )"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 33,
        "text": "So Pilate went back into the governor’s residence, summoned <mark>jesus</mark>, and asked him, “Are you the king of the Jews?”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 34,
        "text": "<mark>jesus</mark> replied, “Are you saying this on your own initiative, or have others told you about me?”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 36,
        "text": "<mark>jesus</mark> replied, “My kingdom is not from this world. If my kingdom were from this world, my servants would be fighting to keep me from being handed over to the Jewish authorities. But as it is, my kingdom is not from here.”"
    },
    {
        "book": "John",
        "chapter": 18,
        "verse": 37,
        "text": "Then Pilate said, “So you are a king!” <mark>jesus</mark> replied, “You say that I am a king. For this reason I was born, and for this reason I came into the world — to testify to the truth. Everyone who belongs to the truth listens to my voice.”"
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 1,
        "text": "Then Pilate took <mark>jesus</mark> and had him flogged severely."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 5,
        "text": "So <mark>jesus</mark> came outside, wearing the crown of thorns and the purple robe. Pilate said to them, “Look, here is the man!”"
    },
    {
        "book": "Revelation",
        "chapter": 14,
        "verse": 12,
        "text": "This requires the steadfast endurance of the saints — those who obey God’s commandments and hold to their faith in <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 9,
        "text": "and he went back into the governor’s residence and said to <mark>jesus</mark>, “Where do you come from?” But <mark>jesus</mark> gave him no answer."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 11,
        "text": "<mark>jesus</mark> replied, “You would have no authority over me at all, unless it was given to you from above. Therefore the one who handed me over to you is guilty of greater sin.”"
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 13,
        "text": "When Pilate heard these words he brought <mark>jesus</mark> outside and sat down on the judgment seat in the place called “The Stone Pavement” (<b>Gabbatha</b> in Aramaic)."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 16,
        "text": "Then Pilate handed him over to them to be crucified. So they took <mark>jesus</mark>,"
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 18,
        "text": "There they crucified him along with two others, one on each side, with <mark>jesus</mark> in the middle."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 19,
        "text": "Pilate also had a notice written and fastened to the cross, which read: “<mark>jesus</mark> the Nazarene, the king of the Jews.”"
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 20,
        "text": "Thus many of the Jewish residents of Jerusalem read this notice, because the place where <mark>jesus</mark> was crucified was near the city, and the notice was written in Aramaic, Latin, and Greek."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 23,
        "text": "Now when the soldiers crucified <mark>jesus</mark>, they took his clothes and made four shares, one for each soldier, and the tunic remained. (Now the tunic was seamless, woven from top to bottom as a single piece.)"
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 25,
        "text": "Now standing beside <mark>jesus</mark>’ cross were his mother, his mother’s sister, Mary the wife of Clopas, and Mary Magdalene."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 26,
        "text": "So when <mark>jesus</mark> saw his mother and the disciple whom he loved standing there, he said to his mother, “Woman, look, here is your son!”"
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 28,
        "text": "After this <mark>jesus</mark>, realizing that by this time everything was completed, said (in order to fulfill the scripture), “I am thirsty!”"
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 30,
        "text": "When he had received the sour wine, <mark>jesus</mark> said, “It is completed!” Then he bowed his head and gave up his spirit."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 32,
        "text": "So the soldiers came and broke the legs of the two men who had been crucified with <mark>jesus</mark>, first the one and then the other."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 33,
        "text": "But when they came to <mark>jesus</mark> and saw that he was already dead, they did not break his legs."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 38,
        "text": "After this, Joseph of Arimathea, a disciple of <mark>jesus</mark> (but secretly, because he feared the Jewish leaders ), asked Pilate if he could remove the body of <mark>jesus</mark>. Pilate gave him permission, so he went and took the body away."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 39,
        "text": "Nicodemus, the man who had previously come to <mark>jesus</mark> at night, accompanied Joseph, carrying a mixture of myrrh and aloes weighing about seventy-five pounds."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 40,
        "text": "Then they took <mark>jesus</mark>’ body and wrapped it, with the aromatic spices, in strips of linen cloth according to Jewish burial customs."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 41,
        "text": "Now at the place where <mark>jesus</mark> was crucified there was a garden, and in the garden was a new tomb where no one had yet been buried."
    },
    {
        "book": "John",
        "chapter": 19,
        "verse": 42,
        "text": "And so, because it was the Jewish day of preparation and the tomb was nearby, they placed <mark>jesus</mark>’ body there."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 2,
        "text": "So she went running to Simon Peter and the other disciple whom <mark>jesus</mark> loved and told them, “They have taken the Lord from the tomb, and we don’t know where they have put him!”"
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 7,
        "text": "and the face cloth, which had been around <mark>jesus</mark>’ head, not lying with the strips of linen cloth but rolled up in a place by itself."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 9,
        "text": "(For they did not yet understand the scripture that <mark>jesus</mark> must rise from the dead.)"
    },
    {
        "book": "Revelation",
        "chapter": 17,
        "verse": 6,
        "text": "I saw that the woman was drunk with the blood of the saints and the blood of those who testified to <mark>jesus</mark>. I was greatly astounded when I saw her."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 12,
        "text": "And she saw two angels in white sitting where <mark>jesus</mark>’ body had been lying, one at the head and one at the feet."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 14,
        "text": "When she had said this, she turned around and saw <mark>jesus</mark> standing there, but she did not know that it was <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 15,
        "text": "<mark>jesus</mark> said to her, “Woman, why are you weeping? Who are you looking for?” Because she thought he was the gardener, she said to him, “Sir, if you have carried him away, tell me where you have put him, and I will take him.”"
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 16,
        "text": "<mark>jesus</mark> said to her, “Mary.” She turned and said to him in Aramaic, “<b>Rabboni</b>” (which means Teacher)."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 17,
        "text": "<mark>jesus</mark> replied, “Do not touch me, for I have not yet ascended to my Father. Go to my brothers and tell them, ‘I am ascending to my Father and your Father, to my God and your God.’”"
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 18,
        "text": "Mary Magdalene came and informed the disciples, “I have seen the Lord!” And she told them what <mark>jesus</mark> had said to her."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 19,
        "text": "On the evening of that day, the first day of the week, the disciples had gathered together and locked the doors of the place because they were afraid of the Jewish leaders. <mark>jesus</mark> came and stood among them and said to them, “Peace be with you.”"
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 21,
        "text": "So <mark>jesus</mark> said to them again, “Peace be with you. Just as the Father has sent me, I also send you.”"
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 24,
        "text": "Now Thomas (called Didymus), one of the twelve, was not with them when <mark>jesus</mark> came."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 26,
        "text": "Eight days later the disciples were again together in the house, and Thomas was with them. Although the doors were locked, <mark>jesus</mark> came and stood among them and said, “Peace be with you!”"
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 29,
        "text": "<mark>jesus</mark> said to him, “Have you believed because you have seen me? Blessed are the people who have not seen and yet have believed.”"
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 30,
        "text": "Now <mark>jesus</mark> performed many other miraculous signs in the presence of the disciples, which are not recorded in this book."
    },
    {
        "book": "John",
        "chapter": 20,
        "verse": 31,
        "text": "But these are recorded so that you may believe that <mark>jesus</mark> is the Christ, the Son of God, and that by believing you may have life in his name."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 1,
        "text": "After this <mark>jesus</mark> revealed himself again to the disciples by the Sea of Tiberias. Now this is how he did so."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 4,
        "text": "When it was already very early morning, <mark>jesus</mark> stood on the beach, but the disciples did not know that it was <mark>jesus</mark>."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 5,
        "text": "So <mark>jesus</mark> said to them, “Children, you don’t have any fish, do you?” They replied, “No.”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 7,
        "text": "Then the disciple whom <mark>jesus</mark> loved said to Peter, “It is the Lord!” So Simon Peter, when he heard that it was the Lord, tucked in his outer garment (for he had nothing on underneath it), and plunged into the sea."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 10,
        "text": "<mark>jesus</mark> said, “Bring some of the fish you have just now caught.”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 12,
        "text": "“Come, have breakfast,” <mark>jesus</mark> said. But none of the disciples dared to ask him, “Who are you?” because they knew it was the Lord."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 13,
        "text": "<mark>jesus</mark> came and took the bread and gave it to them, and did the same with the fish."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 14,
        "text": "This was now the third time <mark>jesus</mark> was revealed to the disciples after he was raised from the dead."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 15,
        "text": "Then when they had finished breakfast, <mark>jesus</mark> said to Simon Peter, “Simon, son of John, do you love me more than these do?” He replied, “Yes, Lord, you know I love you.” <mark>jesus</mark> told him, “Feed my lambs.”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 16,
        "text": "<mark>jesus</mark> said a second time, “Simon, son of John, do you love me?” He replied, “Yes, Lord, you know I love you.” <mark>jesus</mark> told him, “Shepherd my sheep.”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 17,
        "text": "<mark>jesus</mark> said a third time, “Simon, son of John, do you love me?” Peter was distressed that <mark>jesus</mark> asked him a third time, “Do you love me?” and said, “Lord, you know everything. You know that I love you.” <mark>jesus</mark> replied, “Feed my sheep."
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 19,
        "text": "(Now <mark>jesus</mark> said this to indicate clearly by what kind of death Peter was going to glorify God.) After he said this, <mark>jesus</mark> told Peter, “Follow me.”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 20,
        "text": "Peter turned around and saw the disciple whom <mark>jesus</mark> loved following them. (This was the disciple who had leaned back against <mark>jesus</mark>’ chest at the meal and asked, “Lord, who is the one who is going to betray you?”)"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 21,
        "text": "So when Peter saw him, he asked <mark>jesus</mark>, “Lord, what about him?”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 22,
        "text": "<mark>jesus</mark> replied, “If I want him to live until I come back, what concern is that of yours? You follow me!”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 23,
        "text": "So the saying circulated among the brothers and sisters that this disciple was not going to die. But <mark>jesus</mark> did not say to him that he was not going to die, but rather, “If I want him to live until I come back, what concern is that of yours?”"
    },
    {
        "book": "Revelation",
        "chapter": 19,
        "verse": 10,
        "text": "So I threw myself down at his feet to worship him, but he said, “Do not do this! I am only a fellow servant with you and your brothers who hold to the testimony about <mark>jesus</mark>. Worship God, for the testimony about <mark>jesus</mark> is the spirit of prophecy.”"
    },
    {
        "book": "John",
        "chapter": 21,
        "verse": 25,
        "text": "There are many other things that <mark>jesus</mark> did. If every one of them were written down, I suppose the whole world would not have room for the books that would be written."
    },
    {
        "book": "Acts",
        "chapter": 1,
        "verse": 1,
        "text": "I wrote the former account, Theophilus, about all that <mark>jesus</mark> began to do and teach"
    },
    {
        "book": "Acts",
        "chapter": 1,
        "verse": 11,
        "text": "and said, “Men of Galilee, why do you stand here looking up into the sky? This same <mark>jesus</mark> who has been taken up from you into heaven will come back in the same way you saw him go into heaven.”"
    },
    {
        "book": "Acts",
        "chapter": 1,
        "verse": 14,
        "text": "All these continued together in prayer with one mind, together with the women, along with Mary the mother of <mark>jesus</mark>, and his brothers."
    },
    {
        "book": "Revelation",
        "chapter": 20,
        "verse": 4,
        "text": "Then I saw thrones and seated on them were those who had been given authority to judge. I also saw the souls of those who had been beheaded because of the testimony about <mark>jesus</mark> and because of the word of God. These had not worshiped the beast or his image and had refused to receive his mark on their forehead or hand. They came to life and reigned with Christ for a thousand years."
    },
    {
        "book": "Acts",
        "chapter": 1,
        "verse": 16,
        "text": "“Brothers, the scripture had to be fulfilled that the Holy Spirit foretold through David concerning Judas — who became the guide for those who arrested <mark>jesus</mark> —"
    },
    {
        "book": "Acts",
        "chapter": 1,
        "verse": 21,
        "text": "Thus one of the men who have accompanied us during all the time the Lord <mark>jesus</mark> associated with us,"
    },
    {
        "book": "Acts",
        "chapter": 2,
        "verse": 22,
        "text": "“Men of Israel, listen to these words: <mark>jesus</mark> the Nazarene, a man clearly attested to you by God with powerful deeds, wonders, and miraculous signs that God performed among you through him, just as you yourselves know —"
    },
    {
        "book": "Acts",
        "chapter": 2,
        "verse": 32,
        "text": "This <mark>jesus</mark> God raised up, and we are all witnesses of it."
    },
    {
        "book": "Acts",
        "chapter": 2,
        "verse": 36,
        "text": "Therefore let all the house of Israel know beyond a doubt that God has made this <mark>jesus</mark> whom you crucified both Lord and Christ.”"
    },
    {
        "book": "Acts",
        "chapter": 2,
        "verse": 38,
        "text": "Peter said to them, “Repent, and each one of you be baptized in the name of <mark>jesus</mark> Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit."
    },
    {
        "book": "Revelation",
        "chapter": 22,
        "verse": 16,
        "text": "“I, <mark>jesus</mark>, have sent my angel to testify to you about these things for the churches. I am the root and the descendant of David, the bright morning star!”"
    },
    {
        "book": "Revelation",
        "chapter": 22,
        "verse": 20,
        "text": "The one who testifies to these things says, “Yes, I am coming soon!” Amen! Come, Lord <mark>jesus</mark>!"
    },
    {
        "book": "Revelation",
        "chapter": 22,
        "verse": 21,
        "text": "The grace of the Lord <mark>jesus</mark> be with all."
    },
    {
        "book": "Acts",
        "chapter": 3,
        "verse": 6,
        "text": "But Peter said, “I have no silver or gold, but what I do have I give you. In the name of <mark>jesus</mark> Christ the Nazarene, stand up and walk!”"
    },
    {
        "book": "Acts",
        "chapter": 3,
        "verse": 13,
        "text": "The God of Abraham, Isaac, and Jacob, the God of our forefathers, has glorified his servant <mark>jesus</mark>, whom you handed over and rejected in the presence of Pilate after he had decided to release him."
    },
    {
        "book": "Acts",
        "chapter": 3,
        "verse": 16,
        "text": "And on the basis of faith in <mark>jesus</mark>’ name, his very name has made this man — whom you see and know — strong. The faith that is through <mark>jesus</mark> has given him this complete health in the presence of you all."
    },
    {
        "book": "Acts",
        "chapter": 3,
        "verse": 20,
        "text": "so that times of refreshing may come from the presence of the Lord, and so that he may send the Messiah appointed for you — that is, <mark>jesus</mark>."
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 2,
        "text": "angry because they were teaching the people and announcing in <mark>jesus</mark> the resurrection of the dead."
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 10,
        "text": "let it be known to all of you and to all the people of Israel that by the name of <mark>jesus</mark> Christ the Nazarene whom you crucified, whom God raised from the dead, this man stands before you healthy."
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 11,
        "text": "This <mark>jesus</mark> is <b>the stone that was rejected by</b> you, <b>the builders, that has become the cornerstone</b>."
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 13,
        "text": "When they saw the boldness of Peter and John, and discovered that they were uneducated and ordinary men, they were amazed and recognized these men had been with <mark>jesus</mark>."
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 18,
        "text": "And they called them in and ordered them not to speak or teach at all in the name of <mark>jesus</mark>."
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 27,
        "text": "“For indeed both Herod and Pontius Pilate, with the Gentiles and the people of Israel, assembled together in this city against your holy servant <mark>jesus</mark>, whom you anointed,"
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 30,
        "text": "while you extend your hand to heal, and to bring about miraculous signs and wonders through the name of your holy servant <mark>jesus</mark>.”"
    },
    {
        "book": "Acts",
        "chapter": 4,
        "verse": 33,
        "text": "With great power the apostles were giving testimony to the resurrection of the Lord <mark>jesus</mark>, and great grace was on them all."
    },
    {
        "book": "Acts",
        "chapter": 5,
        "verse": 30,
        "text": "The God of our forefathers raised up <mark>jesus</mark>, whom you seized and killed by hanging him on a tree."
    },
    {
        "book": "Acts",
        "chapter": 5,
        "verse": 40,
        "text": "and they summoned the apostles and had them beaten. Then they ordered them not to speak in the name of <mark>jesus</mark> and released them."
    },
    {
        "book": "Acts",
        "chapter": 5,
        "verse": 42,
        "text": "And every day both in the temple courts and from house to house, they did not stop teaching and proclaiming the good news that <mark>jesus</mark> was the Christ."
    },
    {
        "book": "Acts",
        "chapter": 6,
        "verse": 14,
        "text": "For we have heard him saying that <mark>jesus</mark> the Nazarene will destroy this place and change the customs that Moses handed down to us.”"
    },
    {
        "book": "Acts",
        "chapter": 7,
        "verse": 55,
        "text": "But Stephen, full of the Holy Spirit, looked intently toward heaven and saw the glory of God, and <mark>jesus</mark> standing at the right hand of God."
    },
    {
        "book": "Acts",
        "chapter": 7,
        "verse": 59,
        "text": "They continued to stone Stephen while he prayed, “Lord <mark>jesus</mark>, receive my spirit!”"
    },
    {
        "book": "Acts",
        "chapter": 8,
        "verse": 12,
        "text": "But when they believed Philip as he was proclaiming the good news about the kingdom of God and the name of <mark>jesus</mark> Christ, they began to be baptized, both men and women."
    },
    {
        "book": "Acts",
        "chapter": 8,
        "verse": 16,
        "text": "(For the Spirit had not yet come upon any of them, but they had only been baptized in the name of the Lord <mark>jesus</mark>.)"
    },
    {
        "book": "Acts",
        "chapter": 8,
        "verse": 35,
        "text": "So Philip started speaking, and beginning with this scripture proclaimed the good news about <mark>jesus</mark> to him."
    },
    {
        "book": "Acts",
        "chapter": 9,
        "verse": 5,
        "text": "So he said, “Who are you, Lord?” He replied, “I am <mark>jesus</mark> whom you are persecuting!"
    },
    {
        "book": "Acts",
        "chapter": 9,
        "verse": 17,
        "text": "So Ananias departed and entered the house, placed his hands on Saul and said, “Brother Saul, the Lord <mark>jesus</mark>, who appeared to you on the road as you came here, has sent me so that you may see again and be filled with the Holy Spirit.”"
    },
    {
        "book": "Acts",
        "chapter": 9,
        "verse": 20,
        "text": "and immediately he began to proclaim <mark>jesus</mark> in the synagogues, saying, “This man is the Son of God.”"
    },
    {
        "book": "Acts",
        "chapter": 9,
        "verse": 22,
        "text": "But Saul became more and more capable, and was causing consternation among the Jews who lived in Damascus by proving that <mark>jesus</mark> is the Christ."
    },
    {
        "book": "Acts",
        "chapter": 9,
        "verse": 27,
        "text": "But Barnabas took Saul, brought him to the apostles, and related to them how he had seen the Lord on the road, that the Lord had spoken to him, and how in Damascus he had spoken out boldly in the name of <mark>jesus</mark>."
    },
    {
        "book": "Acts",
        "chapter": 9,
        "verse": 34,
        "text": "Peter said to him, “Aeneas, <mark>jesus</mark> the Christ heals you. Get up and make your own bed!” And immediately he got up."
    },
    {
        "book": "Matthew",
        "chapter": 1,
        "verse": 1,
        "text": "This is the record of the genealogy of <mark>jesus</mark> Christ, the son of David, the son of Abraham."
    },
    {
        "book": "Matthew",
        "chapter": 1,
        "verse": 16,
        "text": "and Jacob the father of Joseph, the husband of Mary, by whom <mark>jesus</mark> was born, who is called Christ."
    },
    {
        "book": "Matthew",
        "chapter": 1,
        "verse": 18,
        "text": "Now the birth of <mark>jesus</mark> Christ happened this way. While his mother Mary was engaged to Joseph, but before they came together, she was found to be pregnant through the Holy Spirit."
    },
    {
        "book": "Matthew",
        "chapter": 1,
        "verse": 21,
        "text": "She will give birth to a son and you will name him <mark>jesus</mark>, because he will save his people from their sins.”"
    },
    {
        "book": "Matthew",
        "chapter": 1,
        "verse": 25,
        "text": "but did not have marital relations with her until she gave birth to a son, whom he named <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 2,
        "verse": 1,
        "text": "After <mark>jesus</mark> was born in Bethlehem in Judea, in the time of King Herod, wise men from the East came to Jerusalem"
    },
    {
        "book": "Acts",
        "chapter": 10,
        "verse": 36,
        "text": "You know the message he sent to the people of Israel, proclaiming the good news of peace through <mark>jesus</mark> Christ (he is Lord of all) —"
    },
    {
        "book": "Acts",
        "chapter": 10,
        "verse": 38,
        "text": "with respect to <mark>jesus</mark> from Nazareth, that God anointed him with the Holy Spirit and with power. He went around doing good and healing all who were oppressed by the devil, because God was with him."
    },
    {
        "book": "Matthew",
        "chapter": 2,
        "verse": 23,
        "text": "He came to a town called Nazareth and lived there. Then what had been spoken by the prophets was fulfilled, that <mark>jesus</mark> would be called a Nazarene."
    },
    {
        "book": "Acts",
        "chapter": 10,
        "verse": 48,
        "text": "So he gave orders to have them baptized in the name of <mark>jesus</mark> Christ. Then they asked him to stay for several days."
    },
    {
        "book": "Matthew",
        "chapter": 3,
        "verse": 13,
        "text": "Then <mark>jesus</mark> came from Galilee to John to be baptized by him in the Jordan River."
    },
    {
        "book": "Matthew",
        "chapter": 3,
        "verse": 15,
        "text": "So <mark>jesus</mark> replied to him, “Let it happen now, for it is right for us to fulfill all righteousness.” Then John yielded to him."
    },
    {
        "book": "Matthew",
        "chapter": 3,
        "verse": 16,
        "text": "After <mark>jesus</mark> was baptized, just as he was coming up out of the water, the heavens opened and he saw the Spirit of God descending like a dove and coming on him."
    },
    {
        "book": "Matthew",
        "chapter": 4,
        "verse": 1,
        "text": "Then <mark>jesus</mark> was led by the Spirit into the wilderness to be tempted by the devil."
    },
    {
        "book": "Acts",
        "chapter": 11,
        "verse": 17,
        "text": "Therefore if God gave them the same gift as he also gave us after believing in the Lord <mark>jesus</mark> Christ, who was I to hinder God?”"
    },
    {
        "book": "Matthew",
        "chapter": 4,
        "verse": 7,
        "text": "<mark>jesus</mark> said to him, “Once again it is written: ‘<b>You are not to put the Lord your God to the test</b>.’”"
    },
    {
        "book": "Acts",
        "chapter": 11,
        "verse": 20,
        "text": "But there were some men from Cyprus and Cyrene among them who came to Antioch and began to speak to the Greeks too, proclaiming the good news of the Lord <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 4,
        "verse": 10,
        "text": "Then <mark>jesus</mark> said to him, “Go away, Satan! For it is written: ‘<b>You are to worship the Lord your God and serve </b>only <b>him</b>.’”"
    },
    {
        "book": "Matthew",
        "chapter": 4,
        "verse": 12,
        "text": "Now when <mark>jesus</mark> heard that John had been imprisoned, he went into Galilee."
    },
    {
        "book": "Matthew",
        "chapter": 4,
        "verse": 17,
        "text": "From that time <mark>jesus</mark> began to preach this message: “Repent, for the kingdom of heaven is near.”"
    },
    {
        "book": "Matthew",
        "chapter": 4,
        "verse": 23,
        "text": "<mark>jesus</mark> went throughout all of Galilee, teaching in their synagogues, preaching the gospel of the kingdom, and healing all kinds of disease and sickness among the people."
    },
    {
        "book": "Acts",
        "chapter": 13,
        "verse": 6,
        "text": "When they had crossed over the whole island as far as Paphos, they found a magician, a Jewish false prophet named Bar-<mark>jesus</mark>,"
    },
    {
        "book": "Acts",
        "chapter": 13,
        "verse": 23,
        "text": "From the descendants of this man God brought to Israel a Savior, <mark>jesus</mark>, just as he promised."
    },
    {
        "book": "Acts",
        "chapter": 13,
        "verse": 24,
        "text": "Before <mark>jesus</mark> arrived, John had proclaimed a baptism for repentance to all the people of Israel."
    },
    {
        "book": "Acts",
        "chapter": 13,
        "verse": 33,
        "text": "that this promise God has fulfilled to us, their children, by raising <mark>jesus</mark>, as also it is written in the second psalm, ‘<b>You are my Son;</b> <b> today I have fathered you</b>.’"
    },
    {
        "book": "Acts",
        "chapter": 13,
        "verse": 34,
        "text": "But regarding the fact that he has raised <mark>jesus</mark> from the dead, never again to be in a state of decay, God has spoken in this way: ‘<b>I will give you</b> <b> the holy and trustworthy promises</b> <b>made to David</b>.’"
    },
    {
        "book": "Matthew",
        "chapter": 7,
        "verse": 28,
        "text": "When <mark>jesus</mark> finished saying these things, the crowds were amazed by his teaching,"
    },
    {
        "book": "Acts",
        "chapter": 15,
        "verse": 11,
        "text": "On the contrary, we believe that we are saved through the grace of the Lord <mark>jesus</mark>, in the same way as they are.”"
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 4,
        "text": "Then <mark>jesus</mark> said to him, “See that you do not speak to anyone, but go, show yourself to a priest, and bring the offering that Moses commanded, as a testimony to them.”"
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 7,
        "text": "<mark>jesus</mark> said to him, “I will come and heal him.”"
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 10,
        "text": "When <mark>jesus</mark> heard this he was amazed and said to those who followed him, “I tell you the truth, I have not found such faith in anyone in Israel!"
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 13,
        "text": "Then <mark>jesus</mark> said to the centurion, “Go; just as you believed, it will be done for you.” And the servant was healed at that hour."
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 14,
        "text": "Now when <mark>jesus</mark> entered Peter’s house, he saw his mother-in-law lying down, sick with a fever."
    },
    {
        "book": "Acts",
        "chapter": 15,
        "verse": 26,
        "text": "who have risked their lives for the name of our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 18,
        "text": "Now when <mark>jesus</mark> saw a large crowd around him, he gave orders to go to the other side of the lake."
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 20,
        "text": "<mark>jesus</mark> said to him, “Foxes have dens, and the birds in the sky have nests, but the Son of Man has no place to lay his head.”"
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 22,
        "text": "But <mark>jesus</mark> said to him, “Follow me, and let the dead bury their own dead.”"
    },
    {
        "book": "Matthew",
        "chapter": 8,
        "verse": 34,
        "text": "Then the entire town came out to meet <mark>jesus</mark>. And when they saw him, they begged him to leave their region."
    },
    {
        "book": "Acts",
        "chapter": 16,
        "verse": 7,
        "text": "When they came to Mysia, they attempted to go into Bithynia, but the Spirit of <mark>jesus</mark> did not allow them to do this,"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 2,
        "text": "Just then some people brought to him a paralytic lying on a stretcher. When <mark>jesus</mark> saw their faith, he said to the paralytic, “Have courage, son! Your sins are forgiven.”"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 4,
        "text": "When <mark>jesus</mark> saw their reaction he said, “Why do you respond with evil in your hearts?"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 9,
        "text": "As <mark>jesus</mark> went on from there, he saw a man named Matthew sitting at the tax booth. “Follow me,” he said to him. And he got up and followed him."
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 10,
        "text": "As <mark>jesus</mark> was having a meal in Matthew’s house, many tax collectors and sinners came and ate with <mark>jesus</mark> and his disciples."
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 12,
        "text": "When <mark>jesus</mark> heard this he said, “Those who are healthy don’t need a physician, but those who are sick do."
    },
    {
        "book": "Acts",
        "chapter": 16,
        "verse": 18,
        "text": "She continued to do this for many days. But Paul became greatly annoyed, and turned and said to the spirit, “I command you in the name of <mark>jesus</mark> Christ to come out of her!” And it came out of her at once."
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 14,
        "text": "Then John’s disciples came to <mark>jesus</mark> and asked, “Why do we and the Pharisees fast often, but your disciples don’t fast?”"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 15,
        "text": "<mark>jesus</mark> said to them, “The wedding guests cannot mourn while the bridegroom is with them, can they? But the days are coming when the bridegroom will be taken from them, and then they will fast."
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 19,
        "text": "<mark>jesus</mark> and his disciples got up and followed him."
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 22,
        "text": "But when <mark>jesus</mark> turned and saw her he said, “Have courage, daughter! Your faith has made you well.” And the woman was healed from that hour."
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 23,
        "text": "When <mark>jesus</mark> entered the ruler’s house and saw the flute players and the disorderly crowd,"
    },
    {
        "book": "Acts",
        "chapter": 16,
        "verse": 31,
        "text": "They replied, “Believe in the Lord <mark>jesus</mark> and you will be saved, you and your household.”"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 27,
        "text": "As <mark>jesus</mark> went on from there, two blind men followed him, shouting, “Have mercy on us, Son of David!”"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 28,
        "text": "When he went into the house, the blind men came to him. <mark>jesus</mark> said to them, “Do you believe that I am able to do this?” They said to him, “Yes, Lord.”"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 30,
        "text": "And their eyes were opened. Then <mark>jesus</mark> sternly warned them, “See that no one knows about this.”"
    },
    {
        "book": "Matthew",
        "chapter": 9,
        "verse": 35,
        "text": "Then <mark>jesus</mark> went throughout all the towns and villages, teaching in their synagogues, preaching the good news of the kingdom, and healing every kind of disease and sickness."
    },
    {
        "book": "Acts",
        "chapter": 17,
        "verse": 3,
        "text": "explaining and demonstrating that the Christ had to suffer and to rise from the dead, saying, “This <mark>jesus</mark> I am proclaiming to you is the Christ.”"
    },
    {
        "book": "Matthew",
        "chapter": 10,
        "verse": 1,
        "text": "<mark>jesus</mark> called his twelve disciples and gave them authority over unclean spirits so they could cast them out and heal every kind of disease and sickness."
    },
    {
        "book": "Acts",
        "chapter": 17,
        "verse": 7,
        "text": "and Jason has welcomed them as guests! They are all acting against Caesar’s decrees, saying there is another king named <mark>jesus</mark>!”"
    },
    {
        "book": "Matthew",
        "chapter": 10,
        "verse": 5,
        "text": "<mark>jesus</mark> sent out these twelve, instructing them as follows: “Do not go to Gentile regions and do not enter any Samaritan town."
    },
    {
        "book": "Acts",
        "chapter": 17,
        "verse": 18,
        "text": "Also some of the Epicurean and Stoic philosophers were conversing with him, and some were asking, “What does this foolish babbler want to say?” Others said, “He seems to be a proclaimer of foreign gods.” (They said this because he was proclaiming the good news about <mark>jesus</mark> and the resurrection.)"
    },
    {
        "book": "Acts",
        "chapter": 18,
        "verse": 5,
        "text": "Now when Silas and Timothy arrived from Macedonia, Paul became wholly absorbed with proclaiming the word, testifying to the Jews that <mark>jesus</mark> was the Christ."
    },
    {
        "book": "Matthew",
        "chapter": 11,
        "verse": 1,
        "text": "When <mark>jesus</mark> had finished instructing his twelve disciples, he went on from there to teach and preach in their towns."
    },
    {
        "book": "Matthew",
        "chapter": 11,
        "verse": 4,
        "text": "<mark>jesus</mark> answered them, “Go tell John what you hear and see:"
    },
    {
        "book": "Matthew",
        "chapter": 11,
        "verse": 7,
        "text": "While they were going away, <mark>jesus</mark> began to speak to the crowd about John: “What did you go out into the wilderness to see? A reed shaken by the wind?"
    },
    {
        "book": "Acts",
        "chapter": 18,
        "verse": 25,
        "text": "He had been instructed in the way of the Lord, and with great enthusiasm he spoke and taught accurately the facts about <mark>jesus</mark>, although he knew only the baptism of John."
    },
    {
        "book": "Acts",
        "chapter": 18,
        "verse": 28,
        "text": "for he refuted the Jews vigorously in public debate, demonstrating from the scriptures that the Christ was <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 11,
        "verse": 20,
        "text": "Then <mark>jesus</mark> began to criticize openly the cities in which he had done many of his miracles, because they did not repent."
    },
    {
        "book": "Acts",
        "chapter": 19,
        "verse": 4,
        "text": "Paul said, “John baptized with a baptism of repentance, telling the people to believe in the one who was to come after him, that is, in <mark>jesus</mark>.”"
    },
    {
        "book": "Acts",
        "chapter": 19,
        "verse": 5,
        "text": "When they heard this, they were baptized in the name of the Lord <mark>jesus</mark>,"
    },
    {
        "book": "Matthew",
        "chapter": 11,
        "verse": 25,
        "text": "At that time <mark>jesus</mark> said, “I praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and intelligent, and revealed them to little children."
    },
    {
        "book": "Acts",
        "chapter": 19,
        "verse": 13,
        "text": "But some itinerant Jewish exorcists tried to invoke the name of the Lord <mark>jesus</mark> over those who were possessed by evil spirits, saying, “I sternly warn you by <mark>jesus</mark> whom Paul preaches.”"
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 1,
        "text": "At that time <mark>jesus</mark> went through the grain fields on a Sabbath. His disciples were hungry, and they began to pick heads of wheat and eat them."
    },
    {
        "book": "Acts",
        "chapter": 19,
        "verse": 15,
        "text": "But the evil spirit replied to them, “I know about <mark>jesus</mark> and I am acquainted with Paul, but who are you?”"
    },
    {
        "book": "Acts",
        "chapter": 19,
        "verse": 17,
        "text": "This became known to all who lived in Ephesus, both Jews and Greeks; fear came over them all, and the name of the Lord <mark>jesus</mark> was praised."
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 9,
        "text": "Then <mark>jesus</mark> left that place and entered their synagogue."
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 10,
        "text": "A man was there who had a withered hand. And they asked <mark>jesus</mark>, “Is it lawful to heal on the Sabbath?” so that they could accuse him."
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 15,
        "text": "Now when <mark>jesus</mark> learned of this, he went away from there. Great crowds followed him, and he healed them all."
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 22,
        "text": "Then they brought to him a demon-possessed man who was blind and mute. <mark>jesus</mark> healed him so that he could speak and see."
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 25,
        "text": "Now when <mark>jesus</mark> realized what they were thinking, he said to them, “Every kingdom divided against itself is destroyed, and no town or house divided against itself will stand."
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 46,
        "text": "While <mark>jesus</mark> was still speaking to the crowds, his mother and brothers came and stood outside, asking to speak to him."
    },
    {
        "book": "Matthew",
        "chapter": 12,
        "verse": 48,
        "text": "To the one who had said this, <mark>jesus</mark> replied, “Who is my mother and who are my brothers?”"
    },
    {
        "book": "Acts",
        "chapter": 20,
        "verse": 21,
        "text": "testifying to both Jews and Greeks about repentance toward God and faith in our Lord <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 13,
        "verse": 1,
        "text": "On that day after <mark>jesus</mark> went out of the house, he sat by the lake."
    },
    {
        "book": "Acts",
        "chapter": 20,
        "verse": 24,
        "text": "But I do not consider my life worth anything to myself, so that I may finish my task and the ministry that I received from the Lord <mark>jesus</mark>, to testify to the good news of God’s grace."
    },
    {
        "book": "Acts",
        "chapter": 20,
        "verse": 35,
        "text": "By all these things, I have shown you that by working in this way we must help the weak, and remember the words of the Lord <mark>jesus</mark> that he himself said, ‘It is more blessed to give than to receive.’”"
    },
    {
        "book": "Acts",
        "chapter": 21,
        "verse": 13,
        "text": "Then Paul replied, “What are you doing, weeping and breaking my heart? For I am ready not only to be tied up, but even to die in Jerusalem for the name of the Lord <mark>jesus</mark>.”"
    },
    {
        "book": "Matthew",
        "chapter": 13,
        "verse": 34,
        "text": "<mark>jesus</mark> spoke all these things in parables to the crowds; he did not speak to them without a parable."
    },
    {
        "book": "Matthew",
        "chapter": 13,
        "verse": 53,
        "text": "Now when <mark>jesus</mark> finished these parables, he moved on from there."
    },
    {
        "book": "Matthew",
        "chapter": 13,
        "verse": 57,
        "text": "And so they took offense at him. But <mark>jesus</mark> said to them, “A prophet is not without honor except in his hometown and in his own house.”"
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 1,
        "text": "At that time Herod the tetrarch heard reports about <mark>jesus</mark>,"
    },
    {
        "book": "Acts",
        "chapter": 22,
        "verse": 8,
        "text": "I answered, ‘Who are you, Lord?’ He said to me, ‘I am <mark>jesus</mark> the Nazarene, whom you are persecuting.’"
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 12,
        "text": "Then John’s disciples came and took the body and buried it and went and told <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 13,
        "text": "Now when <mark>jesus</mark> heard this he went away from there privately in a boat to an isolated place. But when the crowd heard about it, they followed him on foot from the towns."
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 22,
        "text": "Immediately <mark>jesus</mark> made the disciples get into the boat and go ahead of him to the other side, while he dispersed the crowds."
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 25,
        "text": "As the night was ending, <mark>jesus</mark> came to them walking on the sea."
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 27,
        "text": "But immediately <mark>jesus</mark> spoke to them: “Have courage! It is I. Do not be afraid.”"
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 29,
        "text": "So he said, “Come.” Peter got out of the boat, walked on the water, and came toward <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 14,
        "verse": 31,
        "text": "Immediately <mark>jesus</mark> reached out his hand and caught him, saying to him, “You of little faith, why did you doubt?”"
    },
    {
        "book": "Matthew",
        "chapter": 15,
        "verse": 1,
        "text": "Then Pharisees and experts in the law came from Jerusalem to <mark>jesus</mark> and said,"
    },
    {
        "book": "Matthew",
        "chapter": 15,
        "verse": 16,
        "text": "<mark>jesus</mark> said, “Even after all this, are you still so foolish?"
    },
    {
        "book": "Matthew",
        "chapter": 15,
        "verse": 21,
        "text": "After going out from there, <mark>jesus</mark> went to the region of Tyre and Sidon."
    },
    {
        "book": "Matthew",
        "chapter": 15,
        "verse": 28,
        "text": "Then <mark>jesus</mark> answered her, “Woman, your faith is great! Let what you want be done for you.” And her daughter was healed from that hour."
    },
    {
        "book": "Matthew",
        "chapter": 15,
        "verse": 29,
        "text": "When he left there, <mark>jesus</mark> went along the Sea of Galilee. Then he went up a mountain, where he sat down."
    },
    {
        "book": "Matthew",
        "chapter": 15,
        "verse": 32,
        "text": "Then <mark>jesus</mark> called the disciples and said, “I have compassion on the crowd, because they have already been here with me three days and they have nothing to eat. I don’t want to send them away hungry since they may faint on the way.”"
    },
    {
        "book": "Matthew",
        "chapter": 15,
        "verse": 34,
        "text": "<mark>jesus</mark> said to them, “How many loaves do you have?” They replied, “Seven — and a few small fish.”"
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 1,
        "text": "Now when the Pharisees and Sadducees came to test <mark>jesus</mark>, they asked him to show them a sign from heaven."
    },
    {
        "book": "Acts",
        "chapter": 24,
        "verse": 24,
        "text": "Some days later, when Felix arrived with his wife Drusilla, who was Jewish, he sent for Paul and heard him speak about faith in Christ <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 6,
        "text": "“Watch out,” <mark>jesus</mark> said to them, “beware of the yeast of the Pharisees and Sadducees.”"
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 8,
        "text": "When <mark>jesus</mark> learned of this, he said, “You who have such little faith! Why are you arguing among yourselves about having no bread?"
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 13,
        "text": "When <mark>jesus</mark> came to the area of Caesarea Philippi, he asked his disciples, “Who do people say that the Son of Man is?”"
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 17,
        "text": "And <mark>jesus</mark> answered him, “You are blessed, Simon son of Jonah, because flesh and blood did not reveal this to you, but my Father in heaven!"
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 21,
        "text": "From that time on <mark>jesus</mark> began to show his disciples that he must go to Jerusalem and suffer many things at the hands of the elders, chief priests, and experts in the law, and be killed, and on the third day be raised."
    },
    {
        "book": "Matthew",
        "chapter": 16,
        "verse": 24,
        "text": "Then <mark>jesus</mark> said to his disciples, “If anyone wants to become my follower, he must deny himself, take up his cross, and follow me."
    },
    {
        "book": "Acts",
        "chapter": 25,
        "verse": 19,
        "text": "Rather they had several points of disagreement with him about their own religion and about a man named <mark>jesus</mark> who was dead, whom Paul claimed to be alive."
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 1,
        "text": "Six days later <mark>jesus</mark> took with him Peter, James, and John the brother of James, and led them privately up a high mountain."
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 4,
        "text": "So Peter said to <mark>jesus</mark>, “Lord, it is good for us to be here. If you want, I will make three shelters — one for you, one for Moses, and one for Elijah.”"
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 7,
        "text": "But <mark>jesus</mark> came and touched them. “Get up,” he said. “Do not be afraid.”"
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 8,
        "text": "When they looked up, all they saw was <mark>jesus</mark> alone."
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 9,
        "text": "As they were coming down from the mountain, <mark>jesus</mark> commanded them, “Do not tell anyone about the vision until the Son of Man is raised from the dead.”"
    },
    {
        "book": "Acts",
        "chapter": 26,
        "verse": 9,
        "text": "Of course, I myself was convinced that it was necessary to do many things hostile to the name of <mark>jesus</mark> the Nazarene."
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 17,
        "text": "<mark>jesus</mark> answered, “You unbelieving and perverse generation! How much longer must I be with you? How much longer must I endure you? Bring him here to me.”"
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 18,
        "text": "Then <mark>jesus</mark> rebuked the demon and it came out of him, and the boy was healed from that moment."
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 19,
        "text": "Then the disciples came to <mark>jesus</mark> privately and said, “Why couldn’t we cast it out?”"
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 22,
        "text": "When they gathered together in Galilee, <mark>jesus</mark> told them, “The Son of Man is going to be betrayed into the hands of men."
    },
    {
        "book": "Acts",
        "chapter": 26,
        "verse": 15,
        "text": "So I said, ‘Who are you, Lord?’ And the Lord replied, ‘I am <mark>jesus</mark> whom you are persecuting."
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 25,
        "text": "He said, “Yes.” When Peter came into the house, <mark>jesus</mark> spoke to him first, “What do you think, Simon? From whom do earthly kings collect tolls or taxes — from their sons or from foreigners?”"
    },
    {
        "book": "Matthew",
        "chapter": 17,
        "verse": 26,
        "text": "After he said, “From foreigners,” <mark>jesus</mark> said to him, “Then the sons are free."
    },
    {
        "book": "Matthew",
        "chapter": 18,
        "verse": 1,
        "text": "At that time the disciples came to <mark>jesus</mark> saying, “Who is the greatest in the kingdom of heaven?”"
    },
    {
        "book": "Matthew",
        "chapter": 18,
        "verse": 22,
        "text": "<mark>jesus</mark> said to him, “Not seven times, I tell you, but seventy-seven times!"
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 1,
        "text": "Now when <mark>jesus</mark> finished these sayings, he left Galilee and went to the region of Judea beyond the Jordan River."
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 8,
        "text": "<mark>jesus</mark> said to them, “Moses permitted you to divorce your wives because of your hard hearts, but from the beginning it was not this way."
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 14,
        "text": "But <mark>jesus</mark> said, “Let the little children come to me and do not try to stop them, for the kingdom of heaven belongs to such as these.”"
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 18,
        "text": "“Which ones?” he asked. <mark>jesus</mark> replied, “<b>Do not murder, do not commit adultery, do not steal, do not give false testimony,</b>"
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 21,
        "text": "<mark>jesus</mark> said to him, “If you wish to be perfect, go sell your possessions and give the money to the poor, and you will have treasure in heaven. Then come, follow me.”"
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 23,
        "text": "Then <mark>jesus</mark> said to his disciples, “I tell you the truth, it will be hard for a rich person to enter the kingdom of heaven!"
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 26,
        "text": "<mark>jesus</mark> looked at them and replied, “This is impossible for mere humans, but for God all things are possible.”"
    },
    {
        "book": "Matthew",
        "chapter": 19,
        "verse": 28,
        "text": "<mark>jesus</mark> said to them, “I tell you the truth: In the age when all things are renewed, when the Son of Man sits on his glorious throne, you who have followed me will also sit on twelve thrones, judging the twelve tribes of Israel."
    },
    {
        "book": "Matthew",
        "chapter": 20,
        "verse": 17,
        "text": "As <mark>jesus</mark> was going up to Jerusalem, he took the twelve aside privately and said to them on the way,"
    },
    {
        "book": "Acts",
        "chapter": 28,
        "verse": 23,
        "text": "They set a day to meet with him, and they came to him where he was staying in even greater numbers. From morning until evening he explained things to them, testifying about the kingdom of God and trying to convince them about <mark>jesus</mark> from both the law of Moses and the prophets."
    },
    {
        "book": "Matthew",
        "chapter": 20,
        "verse": 22,
        "text": "<mark>jesus</mark> answered, “You don’t know what you are asking! Are you able to drink the cup I am about to drink?” They said to him, “We are able.”"
    },
    {
        "book": "Acts",
        "chapter": 28,
        "verse": 31,
        "text": "proclaiming the kingdom of God and teaching about the Lord <mark>jesus</mark> Christ with complete boldness and without restriction."
    },
    {
        "book": "Romans",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul, a slave of Christ <mark>jesus</mark>, called to be an apostle, set apart for the gospel of God."
    },
    {
        "book": "Matthew",
        "chapter": 20,
        "verse": 25,
        "text": "But <mark>jesus</mark> called them and said, “You know that the rulers of the Gentiles lord it over them, and those in high positions use their authority over them."
    },
    {
        "book": "Romans",
        "chapter": 1,
        "verse": 4,
        "text": "who was appointed the Son-of-God-in-power according to the Holy Spirit by the resurrection from the dead, <mark>jesus</mark> Christ our Lord."
    },
    {
        "book": "Matthew",
        "chapter": 20,
        "verse": 30,
        "text": "Two blind men were sitting by the road. When they heard that <mark>jesus</mark> was passing by, they shouted, “Have mercy on us, Lord, Son of David!”"
    },
    {
        "book": "Romans",
        "chapter": 1,
        "verse": 6,
        "text": "You also are among them, called to belong to <mark>jesus</mark> Christ."
    },
    {
        "book": "Romans",
        "chapter": 1,
        "verse": 7,
        "text": "To all those loved by God in Rome, called to be saints: Grace and peace to you from God our Father and the Lord <mark>jesus</mark> Christ!"
    },
    {
        "book": "Romans",
        "chapter": 1,
        "verse": 8,
        "text": "First of all, I thank my God through <mark>jesus</mark> Christ for all of you, because your faith is proclaimed throughout the whole world."
    },
    {
        "book": "Matthew",
        "chapter": 20,
        "verse": 32,
        "text": "<mark>jesus</mark> stopped, called them, and said, “What do you want me to do for you?”"
    },
    {
        "book": "Matthew",
        "chapter": 20,
        "verse": 34,
        "text": "Moved with compassion, <mark>jesus</mark> touched their eyes. Immediately they received their sight and followed him."
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 1,
        "text": "Now when they approached Jerusalem and came to Bethphage, at the Mount of Olives, <mark>jesus</mark> sent two disciples,"
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 6,
        "text": "So the disciples went and did as <mark>jesus</mark> had instructed them."
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 11,
        "text": "And the crowds were saying, “This is the prophet <mark>jesus</mark>, from Nazareth in Galilee.”"
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 12,
        "text": "Then <mark>jesus</mark> entered the temple area and drove out all those who were selling and buying in the temple courts, and turned over the tables of the money changers and the chairs of those selling doves."
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 16,
        "text": "and said to him, “Do you hear what they are saying?” <mark>jesus</mark> said to them, “Yes. Have you never read, ‘<b>Out of the mouths of children and nursing infants you have prepared praise for yourself</b>’?”"
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 21,
        "text": "<mark>jesus</mark> answered them, “I tell you the truth, if you have faith and do not doubt, not only will you do what was done to the fig tree, but even if you say to this mountain, ‘Be lifted up and thrown into the sea,’ it will happen."
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 23,
        "text": "Now after <mark>jesus</mark> entered the temple courts, the chief priests and elders of the people came up to him as he was teaching and said, “By what authority are you doing these things, and who gave you this authority?”"
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 24,
        "text": "<mark>jesus</mark> answered them, “I will also ask you one question. If you answer me then I will also tell you by what authority I do these things."
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 27,
        "text": "So they answered <mark>jesus</mark>, “We don’t know.” Then he said to them, “Neither will I tell you by what authority I am doing these things."
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 31,
        "text": "Which of the two did his father’s will?” They said, “The first.” <mark>jesus</mark> said to them, “I tell you the truth, tax collectors and prostitutes will go ahead of you into the kingdom of God!"
    },
    {
        "book": "Romans",
        "chapter": 2,
        "verse": 16,
        "text": "on the day when God will judge the secrets of human hearts, according to my gospel through Christ <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 21,
        "verse": 42,
        "text": "<mark>jesus</mark> said to them, “Have you never read in the scriptures: ‘<b>The stone the builders rejected has become the cornerstone</b>. <b> </b> <b>This is from the Lord, and it is marvelous in our eyes</b>’? <b> </b>"
    },
    {
        "book": "Matthew",
        "chapter": 22,
        "verse": 1,
        "text": "<mark>jesus</mark> spoke to them again in parables, saying:"
    },
    {
        "book": "Matthew",
        "chapter": 22,
        "verse": 18,
        "text": "But <mark>jesus</mark> realized their evil intentions and said, “Hypocrites! Why are you testing me?"
    },
    {
        "book": "Matthew",
        "chapter": 22,
        "verse": 20,
        "text": "<mark>jesus</mark> said to them, “Whose image is this, and whose inscription?”"
    },
    {
        "book": "Romans",
        "chapter": 3,
        "verse": 22,
        "text": "namely, the righteousness of God through the faithfulness of <mark>jesus</mark> Christ for all who believe. For there is no distinction,"
    },
    {
        "book": "Romans",
        "chapter": 3,
        "verse": 24,
        "text": "But they are justified freely by his grace through the redemption that is in Christ <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 22,
        "verse": 29,
        "text": "<mark>jesus</mark> answered them, “You are deceived, because you don’t know the scriptures or the power of God."
    },
    {
        "book": "Romans",
        "chapter": 3,
        "verse": 26,
        "text": "This was also to demonstrate his righteousness in the present time, so that he would be just and the justifier of the one who lives because of <mark>jesus</mark>’ faithfulness."
    },
    {
        "book": "Matthew",
        "chapter": 22,
        "verse": 37,
        "text": "<mark>jesus</mark> said to him, “‘<b>Love</b> <b> the Lord your God with all your heart, with all your soul, and with all your mind</b>.’"
    },
    {
        "book": "Matthew",
        "chapter": 22,
        "verse": 41,
        "text": "While the Pharisees were assembled, <mark>jesus</mark> asked them a question:"
    },
    {
        "book": "Matthew",
        "chapter": 23,
        "verse": 1,
        "text": "Then <mark>jesus</mark> said to the crowds and to his disciples,"
    },
    {
        "book": "Romans",
        "chapter": 4,
        "verse": 24,
        "text": "but also for our sake, to whom it will be credited, those who believe in the one who raised <mark>jesus</mark> our Lord from the dead."
    },
    {
        "book": "Romans",
        "chapter": 5,
        "verse": 1,
        "text": "Therefore, since we have been declared righteous by faith, we have peace with God through our Lord <mark>jesus</mark> Christ,"
    },
    {
        "book": "Romans",
        "chapter": 5,
        "verse": 11,
        "text": "Not only this, but we also rejoice in God through our Lord <mark>jesus</mark> Christ, through whom we have now received this reconciliation."
    },
    {
        "book": "Romans",
        "chapter": 5,
        "verse": 15,
        "text": "But the gracious gift is not like the transgression. For if the many died through the transgression of the one man, how much more did the grace of God and the gift by the grace of the one man <mark>jesus</mark> Christ multiply to the many!"
    },
    {
        "book": "Romans",
        "chapter": 5,
        "verse": 17,
        "text": "For if, by the transgression of the one man, death reigned through the one, how much more will those who receive the abundance of grace and of the gift of righteousness reign in life through the one, <mark>jesus</mark> Christ!"
    },
    {
        "book": "Romans",
        "chapter": 5,
        "verse": 21,
        "text": "so that just as sin reigned in death, so also grace will reign through righteousness to eternal life through <mark>jesus</mark> Christ our Lord."
    },
    {
        "book": "Romans",
        "chapter": 6,
        "verse": 3,
        "text": "Or do you not know that as many as were baptized into Christ <mark>jesus</mark> were baptized into his death?"
    },
    {
        "book": "Matthew",
        "chapter": 24,
        "verse": 1,
        "text": "Now as <mark>jesus</mark> was going out of the temple courts and walking away, his disciples came to show him the temple buildings."
    },
    {
        "book": "Matthew",
        "chapter": 24,
        "verse": 4,
        "text": "<mark>jesus</mark> answered them, “Watch out that no one misleads you."
    },
    {
        "book": "Romans",
        "chapter": 6,
        "verse": 11,
        "text": "So you too consider yourselves dead to sin, but alive to God in Christ <mark>jesus</mark>."
    },
    {
        "book": "Romans",
        "chapter": 6,
        "verse": 23,
        "text": "For the payoff of sin is death, but the gift of God is eternal life in Christ <mark>jesus</mark> our Lord."
    },
    {
        "book": "Romans",
        "chapter": 7,
        "verse": 25,
        "text": "Thanks be to God through <mark>jesus</mark> Christ our Lord! So then, I myself serve the law of God with my mind, but with my flesh I serve the law of sin."
    },
    {
        "book": "Romans",
        "chapter": 8,
        "verse": 1,
        "text": "There is therefore now no condemnation for those who are in Christ <mark>jesus</mark>."
    },
    {
        "book": "Romans",
        "chapter": 8,
        "verse": 2,
        "text": "For the law of the life-giving Spirit in Christ <mark>jesus</mark> has set you free from the law of sin and death."
    },
    {
        "book": "Romans",
        "chapter": 8,
        "verse": 11,
        "text": "Moreover if the Spirit of the one who raised <mark>jesus</mark> from the dead lives in you, the one who raised Christ from the dead will also make your mortal bodies alive through his Spirit who lives in you."
    },
    {
        "book": "Romans",
        "chapter": 8,
        "verse": 39,
        "text": "nor height, nor depth, nor anything else in creation will be able to separate us from the love of God in Christ <mark>jesus</mark> our Lord."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 1,
        "text": "When <mark>jesus</mark> had finished saying all these things, he told his disciples,"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 4,
        "text": "They planned to arrest <mark>jesus</mark> by stealth and kill him."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 6,
        "text": "Now while <mark>jesus</mark> was in Bethany at the house of Simon the leper,"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 10,
        "text": "When <mark>jesus</mark> learned of this, he said to them, “Why are you bothering this woman? She has done a good service for me."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 17,
        "text": "Now on the first day of the feast of Unleavened Bread the disciples came to <mark>jesus</mark> and said, “Where do you want us to prepare for you to eat the Passover?”"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 19,
        "text": "So the disciples did as <mark>jesus</mark> had instructed them, and they prepared the Passover."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 25,
        "text": "Then Judas, the one who would betray him, said, “Surely not I, Rabbi?” <mark>jesus</mark> replied, “You have said it yourself.”"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 26,
        "text": "While they were eating, <mark>jesus</mark> took bread, and after giving thanks he broke it, gave it to his disciples, and said, “Take, eat, this is my body.”"
    },
    {
        "book": "Romans",
        "chapter": 10,
        "verse": 9,
        "text": "because if you confess with your mouth that <mark>jesus</mark> is Lord and believe in your heart that God raised him from the dead, you will be saved."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 31,
        "text": "Then <mark>jesus</mark> said to them, “This night you will all fall away because of me, for it is written: ‘<b>I will strike the shepherd,</b> <b>and the sheep of the flock will be scattered.</b>’"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 34,
        "text": "<mark>jesus</mark> said to him, “I tell you the truth, on this night, before the rooster crows, you will deny me three times.”"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 36,
        "text": "Then <mark>jesus</mark> went with them to a place called Gethsemane, and he said to the disciples, “Sit here while I go over there and pray.”"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 49,
        "text": "Immediately he went up to <mark>jesus</mark> and said, “Greetings, Rabbi,” and kissed him."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 50,
        "text": "<mark>jesus</mark> said to him, “Friend, do what you are here to do.” Then they came and took hold of <mark>jesus</mark> and arrested him."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 51,
        "text": "But one of those with <mark>jesus</mark> grabbed his sword, drew it out, and struck the high priest’s slave, cutting off his ear."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 52,
        "text": "Then <mark>jesus</mark> said to him, “Put your sword back in its place! For all who take hold of the sword will die by the sword."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 55,
        "text": "At that moment <mark>jesus</mark> said to the crowd, “Have you come out with swords and clubs to arrest me like you would an outlaw? Day after day I sat teaching in the temple courts, yet you did not arrest me."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 57,
        "text": "Now the ones who had arrested <mark>jesus</mark> led him to Caiaphas, the high priest, in whose house the experts in the law and the elders had gathered."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 59,
        "text": "The chief priests and the whole Sanhedrin were trying to find false testimony against <mark>jesus</mark> so that they could put him to death."
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 63,
        "text": "But <mark>jesus</mark> was silent. The high priest said to him, “I charge you under oath by the living God, tell us if you are the Christ, the Son of God.”"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 64,
        "text": "<mark>jesus</mark> said to him, “You have said it yourself. But I tell you, from now on you will see the Son of Man <b>sitting at the right hand</b> of the Power and <b>coming on the clouds of heaven</b>.”"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 69,
        "text": "Now Peter was sitting outside in the courtyard. A slave girl came to him and said, “You also were with <mark>jesus</mark> the Galilean.”"
    },
    {
        "book": "Matthew",
        "chapter": 26,
        "verse": 71,
        "text": "When he went out to the gateway, another slave girl saw him and said to the people there, “This man was with <mark>jesus</mark> the Nazarene.”"
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 1,
        "text": "When it was early in the morning, all the chief priests and the elders of the people plotted against <mark>jesus</mark> to execute him."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 3,
        "text": "Now when Judas, who had betrayed him, saw that <mark>jesus</mark> had been condemned, he regretted what he had done and returned the thirty silver coins to the chief priests and the elders,"
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 11,
        "text": "Then <mark>jesus</mark> stood before the governor, and the governor asked him, “Are you the king of the Jews?” <mark>jesus</mark> said, “You say so.”"
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 16,
        "text": "At that time they had in custody a notorious prisoner named <mark>jesus</mark> Barabbas."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 17,
        "text": "So after they had assembled, Pilate said to them, “Whom do you want me to release for you, <mark>jesus</mark> Barabbas or <mark>jesus</mark> who is called the Christ?”"
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 20,
        "text": "But the chief priests and the elders persuaded the crowds to ask for Barabbas and to have <mark>jesus</mark> killed."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 22,
        "text": "Pilate said to them, “Then what should I do with <mark>jesus</mark> who is called the Christ?” They all said, “Crucify him!”"
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 26,
        "text": "Then he released Barabbas for them. But after he had <mark>jesus</mark> flogged, he handed him over to be crucified."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 27,
        "text": "Then the governor’s soldiers took <mark>jesus</mark> into the governor’s residence and gathered the whole cohort around him."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 34,
        "text": "and offered <mark>jesus</mark> wine mixed with gall to drink. But after tasting it, he would not drink it."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 37,
        "text": "Above his head they put the charge against him, which read: “This is <mark>jesus</mark>, the king of the Jews.”"
    },
    {
        "book": "Romans",
        "chapter": 13,
        "verse": 14,
        "text": "Instead, put on the Lord <mark>jesus</mark> Christ, and make no provision for the flesh to arouse its desires."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 46,
        "text": "At about three o’clock <mark>jesus</mark> shouted with a loud voice, “<b>Eli, Eli, lema sabachthani?</b>” that is, “<b>My God, my God, why have you forsaken me</b>?”"
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 50,
        "text": "Then <mark>jesus</mark> cried out again with a loud voice and gave up his spirit."
    },
    {
        "book": "Romans",
        "chapter": 14,
        "verse": 14,
        "text": "I know and am convinced in the Lord <mark>jesus</mark> that there is nothing unclean in itself; still, it is unclean to the one who considers it unclean."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 54,
        "text": "Now when the centurion and those with him who were guarding <mark>jesus</mark> saw the earthquake and what took place, they were extremely terrified and said, “Truly this one was God’s Son!”"
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 55,
        "text": "Many women who had followed <mark>jesus</mark> from Galilee and given him support were also there, watching from a distance."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 57,
        "text": "Now when it was evening, there came a rich man from Arimathea, named Joseph, who was also a disciple of <mark>jesus</mark>."
    },
    {
        "book": "Matthew",
        "chapter": 27,
        "verse": 58,
        "text": "He went to Pilate and asked for the body of <mark>jesus</mark>. Then Pilate ordered that it be given to him."
    },
    {
        "book": "Romans",
        "chapter": 15,
        "verse": 5,
        "text": "Now may the God of endurance and comfort give you unity with one another in accordance with Christ <mark>jesus</mark>,"
    },
    {
        "book": "Romans",
        "chapter": 15,
        "verse": 6,
        "text": "so that together you may with one voice glorify the God and Father of our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "Matthew",
        "chapter": 28,
        "verse": 5,
        "text": "But the angel said to the women, “Do not be afraid; I know that you are looking for <mark>jesus</mark>, who was crucified."
    },
    {
        "book": "Matthew",
        "chapter": 28,
        "verse": 9,
        "text": "But <mark>jesus</mark> met them, saying, “Greetings!” They came to him, held on to his feet and worshiped him."
    },
    {
        "book": "Matthew",
        "chapter": 28,
        "verse": 10,
        "text": "Then <mark>jesus</mark> said to them, “Do not be afraid. Go and tell my brothers to go to Galilee. They will see me there.”"
    },
    {
        "book": "Romans",
        "chapter": 15,
        "verse": 16,
        "text": "to be a minister of Christ <mark>jesus</mark> to the Gentiles. I serve the gospel of God like a priest, so that the Gentiles may become an acceptable offering, sanctified by the Holy Spirit."
    },
    {
        "book": "Romans",
        "chapter": 15,
        "verse": 17,
        "text": "So I boast in Christ <mark>jesus</mark> about the things that pertain to God."
    },
    {
        "book": "Matthew",
        "chapter": 28,
        "verse": 16,
        "text": "So the eleven disciples went to Galilee to the mountain <mark>jesus</mark> had designated."
    },
    {
        "book": "Matthew",
        "chapter": 28,
        "verse": 18,
        "text": "Then <mark>jesus</mark> came up and said to them, “All authority in heaven and on earth has been given to me."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 1,
        "text": "The beginning of the gospel of <mark>jesus</mark> Christ, the Son of God."
    },
    {
        "book": "Romans",
        "chapter": 15,
        "verse": 30,
        "text": "Now I urge you, brothers and sisters, through our Lord <mark>jesus</mark> Christ and through the love of the Spirit, to join fervently with me in prayer to God on my behalf."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 9,
        "text": "Now in those days <mark>jesus</mark> came from Nazareth in Galilee and was baptized by John in the Jordan River."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 10,
        "text": "And just as <mark>jesus</mark> was coming up out of the water, he saw the heavens splitting apart and the Spirit descending on him like a dove."
    },
    {
        "book": "Romans",
        "chapter": 16,
        "verse": 3,
        "text": "Greet Prisca and Aquila, my fellow workers in Christ <mark>jesus</mark>,"
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 14,
        "text": "Now after John was imprisoned, <mark>jesus</mark> went into Galilee and proclaimed the gospel of God."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 17,
        "text": "<mark>jesus</mark> said to them, “Follow me, and I will turn you into fishers of people.”"
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 21,
        "text": "Then they went to Capernaum. When the Sabbath came, <mark>jesus</mark> went into the synagogue and began to teach."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 24,
        "text": "“Leave us alone, <mark>jesus</mark> the Nazarene! Have you come to destroy us? I know who you are — the Holy One of God!”"
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 25,
        "text": "But <mark>jesus</mark> rebuked him: “Silence! Come out of him!”"
    },
    {
        "book": "Romans",
        "chapter": 16,
        "verse": 20,
        "text": "The God of peace will quickly crush Satan under your feet. The grace of our Lord <mark>jesus</mark> be with you."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 30,
        "text": "Simon’s mother-in-law was lying down, sick with a fever, so they spoke to <mark>jesus</mark> at once about her."
    },
    {
        "book": "Romans",
        "chapter": 16,
        "verse": 25,
        "text": "Now to him who is able to strengthen you according to my gospel and the proclamation of <mark>jesus</mark> Christ, according to the revelation of the mystery that had been kept secret for long ages,"
    },
    {
        "book": "Romans",
        "chapter": 16,
        "verse": 27,
        "text": "to the only wise God, through <mark>jesus</mark> Christ, be glory forever! Amen."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 35,
        "text": "Then <mark>jesus</mark> got up early in the morning when it was still very dark, departed, and went out to a deserted place, and there he spent time in prayer."
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul, called to be an apostle of Christ <mark>jesus</mark> by the will of God, and Sosthenes, our brother,"
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 2,
        "text": "to the church of God that is in Corinth, to those who are sanctified in Christ <mark>jesus</mark>, and called to be saints, with all those in every place who call on the name of our Lord <mark>jesus</mark> Christ, their Lord and ours."
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 3,
        "text": "Grace and peace to you from God our Father and the Lord <mark>jesus</mark> Christ!"
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 4,
        "text": "I always thank my God for you because of the grace of God that was given to you in Christ <mark>jesus</mark>."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 41,
        "text": "Moved with compassion, <mark>jesus</mark> stretched out his hand and touched him, saying, “I am willing. Be clean!”"
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 7,
        "text": "so that you do not lack any spiritual gift as you wait for the revelation of our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 9,
        "text": "God is faithful, by whom you were called into fellowship with his son, <mark>jesus</mark> Christ our Lord."
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 10,
        "text": "I urge you, brothers and sisters, by the name of our Lord <mark>jesus</mark> Christ, to agree together, to end your divisions, and to be united by the same mind and purpose."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 43,
        "text": "Immediately <mark>jesus</mark> sent the man away with a very strong warning."
    },
    {
        "book": "Mark",
        "chapter": 1,
        "verse": 45,
        "text": "But as the man went out he began to announce it publicly and spread the story widely, so that <mark>jesus</mark> was no longer able to enter any town openly but stayed outside in remote places. Still they kept coming to him from everywhere."
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 8,
        "text": "He will also strengthen you to the end, so that you will be blameless on the day of our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 4,
        "text": "When they were not able to bring him in because of the crowd, they removed the roof above <mark>jesus</mark>. Then, after tearing it out, they lowered the stretcher the paralytic was lying on."
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 5,
        "text": "When <mark>jesus</mark> saw their faith, he said to the paralytic, “Son, your sins are forgiven.”"
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 8,
        "text": "Now immediately, when <mark>jesus</mark> realized in his spirit that they were contemplating such thoughts, he said to them, “Why are you thinking such things in your hearts?"
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 13,
        "text": "<mark>jesus</mark> went out again by the sea. The whole crowd came to him, and he taught them."
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 15,
        "text": "As <mark>jesus</mark> was having a meal in Levi’s home, many tax collectors and sinners were eating with <mark>jesus</mark> and his disciples, for there were many who followed him."
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 17,
        "text": "When <mark>jesus</mark> heard this he said to them, “Those who are healthy don’t need a physician, but those who are sick do. I have not come to call the righteous, but sinners.”"
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 18,
        "text": "Now John’s disciples and the Pharisees were fasting. So they came to <mark>jesus</mark> and said, “Why do the disciples of John and the disciples of the Pharisees fast, but your disciples don’t fast?”"
    },
    {
        "book": "1 Corinthians",
        "chapter": 1,
        "verse": 30,
        "text": "He is the reason you have a relationship with Christ <mark>jesus</mark>, who became for us wisdom from God, and righteousness and sanctification and redemption,"
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 19,
        "text": "<mark>jesus</mark> said to them, “The wedding guests cannot fast while the bridegroom is with them, can they? As long as they have the bridegroom with them they do not fast."
    },
    {
        "book": "1 Corinthians",
        "chapter": 2,
        "verse": 2,
        "text": "For I decided to be concerned about nothing among you except <mark>jesus</mark> Christ, and him crucified."
    },
    {
        "book": "Mark",
        "chapter": 2,
        "verse": 23,
        "text": "<mark>jesus</mark> was going through the grain fields on a Sabbath, and his disciples began to pick some heads of wheat as they made their way."
    },
    {
        "book": "Mark",
        "chapter": 3,
        "verse": 1,
        "text": "Then <mark>jesus</mark> entered the synagogue again, and a man was there who had a withered hand."
    },
    {
        "book": "Mark",
        "chapter": 3,
        "verse": 2,
        "text": "They watched <mark>jesus</mark> closely to see if he would heal him on the Sabbath, so that they could accuse him."
    },
    {
        "book": "Mark",
        "chapter": 3,
        "verse": 7,
        "text": "Then <mark>jesus</mark> went away with his disciples to the sea, and a great multitude from Galilee followed him. And from Judea,"
    },
    {
        "book": "Mark",
        "chapter": 3,
        "verse": 13,
        "text": "Now <mark>jesus</mark> went up the mountain and called for those he wanted, and they came to him."
    },
    {
        "book": "1 Corinthians",
        "chapter": 3,
        "verse": 11,
        "text": "For no one can lay any foundation other than what is being laid, which is <mark>jesus</mark> Christ."
    },
    {
        "book": "Mark",
        "chapter": 3,
        "verse": 20,
        "text": "Now <mark>jesus</mark> went home, and a crowd gathered so that they were not able to eat."
    },
    {
        "book": "Mark",
        "chapter": 3,
        "verse": 31,
        "text": "Then <mark>jesus</mark>’ mother and his brothers came. Standing outside, they sent word to him, to summon him."
    },
    {
        "book": "1 Corinthians",
        "chapter": 4,
        "verse": 15,
        "text": "For though you may have ten thousand guardians in Christ, you do not have many fathers, because I became your father in Christ <mark>jesus</mark> through the gospel."
    },
    {
        "book": "1 Corinthians",
        "chapter": 5,
        "verse": 4,
        "text": "When you gather together in the name of our Lord <mark>jesus</mark>, and I am with you in spirit, along with the power of our Lord <mark>jesus</mark>,"
    },
    {
        "book": "Mark",
        "chapter": 4,
        "verse": 35,
        "text": "On that day, when evening came, <mark>jesus</mark> said to his disciples, “Let’s go across to the other side of the lake.”"
    },
    {
        "book": "1 Corinthians",
        "chapter": 6,
        "verse": 11,
        "text": "Some of you once lived this way. But you were washed, you were sanctified, you were justified in the name of the Lord <mark>jesus</mark> Christ and by the Spirit of our God."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 2,
        "text": "Just as <mark>jesus</mark> was getting out of the boat, a man with an unclean spirit came from the tombs and met him."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 6,
        "text": "When he saw <mark>jesus</mark> from a distance, he ran and bowed down before him."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 7,
        "text": "Then he cried out with a loud voice, “Leave me alone, <mark>jesus</mark>, Son of the Most High God! I implore you by God — do not torment me!”"
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 8,
        "text": "(For <mark>jesus</mark> had said to him, “Come out of that man, you unclean spirit!”)"
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 9,
        "text": "<mark>jesus</mark> asked him, “What is your name?” And he said, “My name is Legion, for we are many.”"
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 10,
        "text": "He begged <mark>jesus</mark> repeatedly not to send them out of the region."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 13,
        "text": "<mark>jesus</mark> gave them permission. So the unclean spirits came out and went into the pigs. Then the herd rushed down the steep slope into the lake, and about two thousand were drowned in the lake."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 15,
        "text": "They came to <mark>jesus</mark> and saw the demon-possessed man sitting there, clothed and in his right mind — the one who had the “Legion” — and they were afraid."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 17,
        "text": "Then they asked <mark>jesus</mark> to leave their region."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 19,
        "text": "But <mark>jesus</mark> did not permit him to do so. Instead, he said to him, “Go to your home and to your people and tell them what the Lord has done for you, that he had mercy on you.”"
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 20,
        "text": "So he went away and began to proclaim in the Decapolis what <mark>jesus</mark> had done for him, and all were amazed."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 21,
        "text": "When <mark>jesus</mark> had crossed again in a boat to the other side, a large crowd gathered around him, and he was by the sea."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 22,
        "text": "Then one of the synagogue rulers, named Jairus, came up, and when he saw <mark>jesus</mark>, he fell at his feet."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 24,
        "text": "<mark>jesus</mark> went with him, and a large crowd followed and pressed around him."
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 27,
        "text": "When she heard about <mark>jesus</mark>, she came up behind him in the crowd and touched his cloak,"
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 30,
        "text": "<mark>jesus</mark> knew at once that power had gone out from him. He turned around in the crowd and said, “Who touched my clothes?”"
    },
    {
        "book": "Mark",
        "chapter": 5,
        "verse": 36,
        "text": "But <mark>jesus</mark>, paying no attention to what was said, told the synagogue ruler, “Do not be afraid; just believe.”"
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 1,
        "text": "Now <mark>jesus</mark> left that place and came to his hometown, and his disciples followed him."
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 4,
        "text": "Then <mark>jesus</mark> said to them, “A prophet is not without honor except in his hometown, and among his relatives, and in his own house.”"
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 7,
        "text": "<mark>jesus</mark> called the twelve and began to send them out two by two. He gave them authority over the unclean spirits."
    },
    {
        "book": "1 Corinthians",
        "chapter": 8,
        "verse": 6,
        "text": "yet for us there is one God, the Father, from whom are all things and for whom we live, and one Lord, <mark>jesus</mark> Christ, through whom are all things and through whom we live."
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 14,
        "text": "Now King Herod heard this, for <mark>jesus</mark>’ name had become known. Some were saying, “John the baptizer has been raised from the dead, and because of this, miraculous powers are at work in him.”"
    },
    {
        "book": "1 Corinthians",
        "chapter": 9,
        "verse": 1,
        "text": "Am I not free? Am I not an apostle? Have I not seen <mark>jesus</mark> our Lord? Are you not my work in the Lord?"
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 30,
        "text": "Then the apostles gathered around <mark>jesus</mark> and told him everything they had done and taught."
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 34,
        "text": "As <mark>jesus</mark> came ashore he saw the large crowd and he had compassion on them, because they were like sheep without a shepherd. So he taught them many things."
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 45,
        "text": "Immediately <mark>jesus</mark> made his disciples get into the boat and go on ahead to the other side, to Bethsaida, while he dispersed the crowd."
    },
    {
        "book": "Mark",
        "chapter": 6,
        "verse": 54,
        "text": "As they got out of the boat, people immediately recognized <mark>jesus</mark>."
    },
    {
        "book": "Mark",
        "chapter": 7,
        "verse": 2,
        "text": "And they saw that some of <mark>jesus</mark>’ disciples ate their bread with unclean hands, that is, unwashed."
    },
    {
        "book": "Mark",
        "chapter": 7,
        "verse": 17,
        "text": "Now when <mark>jesus</mark> had left the crowd and entered the house, his disciples asked him about the parable."
    },
    {
        "book": "Mark",
        "chapter": 7,
        "verse": 24,
        "text": "After <mark>jesus</mark> left there, he went to the region of Tyre. When he went into a house, he did not want anyone to know, but he was not able to escape notice."
    },
    {
        "book": "Mark",
        "chapter": 7,
        "verse": 31,
        "text": "Then <mark>jesus</mark> went out again from the region of Tyre and came through Sidon to the Sea of Galilee in the region of the Decapolis."
    },
    {
        "book": "Mark",
        "chapter": 7,
        "verse": 33,
        "text": "After <mark>jesus</mark> took him aside privately, away from the crowd, he put his fingers in the man’s ears, and after spitting, he touched his tongue."
    },
    {
        "book": "Mark",
        "chapter": 7,
        "verse": 36,
        "text": "<mark>jesus</mark> ordered them not to tell anything. But as much as he ordered them not to do this, they proclaimed it all the more."
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 1,
        "text": "In those days there was another large crowd with nothing to eat. So <mark>jesus</mark> called his disciples and said to them,"
    },
    {
        "book": "1 Corinthians",
        "chapter": 11,
        "verse": 23,
        "text": "For I received from the Lord what I also passed on to you, that the Lord <mark>jesus</mark> on the night in which he was betrayed took bread,"
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 11,
        "text": "Then the Pharisees came and began to argue with <mark>jesus</mark>, asking for a sign from heaven to test him."
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 15,
        "text": "And <mark>jesus</mark> ordered them, “Watch out! Beware of the yeast of the Pharisees and the yeast of Herod!”"
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 17,
        "text": "When he learned of this, <mark>jesus</mark> said to them, “Why are you arguing about having no bread? Do you still not see or understand? Have your hearts been hardened?"
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 22,
        "text": "Then they came to Bethsaida. They brought a blind man to <mark>jesus</mark> and asked him to touch him."
    },
    {
        "book": "1 Corinthians",
        "chapter": 12,
        "verse": 3,
        "text": "So I want you to understand that no one speaking by the Spirit of God says, “<mark>jesus</mark> is cursed,” and no one can say, “<mark>jesus</mark> is Lord,” except by the Holy Spirit."
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 25,
        "text": "Then <mark>jesus</mark> placed his hands on the man’s eyes again. And he opened his eyes, his sight was restored, and he saw everything clearly."
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 26,
        "text": "<mark>jesus</mark> sent him home, saying, “Do not even go into the village.”"
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 27,
        "text": "Then <mark>jesus</mark> and his disciples went to the villages of Caesarea Philippi. On the way he asked his disciples, “Who do people say that I am?”"
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 31,
        "text": "Then <mark>jesus</mark> began to teach them that the Son of Man must suffer many things and be rejected by the elders, chief priests, and experts in the law, and be killed, and after three days rise again."
    },
    {
        "book": "Mark",
        "chapter": 8,
        "verse": 34,
        "text": "Then <mark>jesus</mark> called the crowd, along with his disciples, and said to them, “If anyone wants to become my follower, he must deny himself, take up his cross, and follow me."
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 2,
        "text": "Six days later <mark>jesus</mark> took with him Peter, James, and John and led them alone up a high mountain privately. And he was transfigured before them,"
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 4,
        "text": "Then Elijah appeared before them along with Moses, and they were talking with <mark>jesus</mark>."
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 5,
        "text": "So Peter said to <mark>jesus</mark>, “Rabbi, it is good for us to be here. Let us make three shelters — one for you, one for Moses, and one for Elijah.”"
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 8,
        "text": "Suddenly when they looked around, they saw no one with them any more except <mark>jesus</mark>."
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 21,
        "text": "<mark>jesus</mark> asked his father, “How long has this been happening to him?” And he said, “From childhood."
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 23,
        "text": "Then <mark>jesus</mark> said to him, “‘If you are able?’ All things are possible for the one who believes.”"
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 25,
        "text": "Now when <mark>jesus</mark> saw that a crowd was quickly gathering, he rebuked the unclean spirit, saying to it, “Mute and deaf spirit, I command you, come out of him and never enter him again.”"
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 27,
        "text": "But <mark>jesus</mark> gently took his hand and raised him to his feet, and he stood up."
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 30,
        "text": "They went out from there and passed through Galilee. But <mark>jesus</mark> did not want anyone to know,"
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 33,
        "text": "Then they came to Capernaum. After <mark>jesus</mark> was inside the house he asked them, “What were you discussing on the way?”"
    },
    {
        "book": "Mark",
        "chapter": 9,
        "verse": 39,
        "text": "But <mark>jesus</mark> said, “Do not stop him, because no one who does a miracle in my name will be able soon afterward to say anything bad about me."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 1,
        "text": "Then <mark>jesus</mark> left that place and went to the region of Judea and beyond the Jordan River. Again crowds gathered to him, and again, as was his custom, he taught them."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 5,
        "text": "But <mark>jesus</mark> said to them, “He wrote this commandment for you because of your hard hearts."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 14,
        "text": "But when <mark>jesus</mark> saw this, he was indignant and said to them, “Let the little children come to me and do not try to stop them, for the kingdom of God belongs to such as these."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 17,
        "text": "Now as <mark>jesus</mark> was starting out on his way, someone ran up to him, fell on his knees, and said, “Good teacher, what must I do to inherit eternal life?”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 18,
        "text": "<mark>jesus</mark> said to him, “Why do you call me good? No one is good except God alone."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 21,
        "text": "As <mark>jesus</mark> looked at him, he felt love for him and said, “You lack one thing. Go, sell whatever you have and give the money to the poor, and you will have treasure in heaven. Then come, follow me.”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 23,
        "text": "Then <mark>jesus</mark> looked around and said to his disciples, “How hard it is for the rich to enter the kingdom of God!”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 24,
        "text": "The disciples were astonished at these words. But again <mark>jesus</mark> said to them, “Children, how hard it is to enter the kingdom of God!"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 27,
        "text": "<mark>jesus</mark> looked at them and replied, “This is impossible for mere humans, but not for God; all things are possible for God.”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 29,
        "text": "<mark>jesus</mark> said, “I tell you the truth, there is no one who has left home or brothers or sisters or mother or father or children or fields for my sake and for the sake of the gospel"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 32,
        "text": "They were on the way, going up to Jerusalem. <mark>jesus</mark> was going ahead of them, and they were amazed, but those who followed were afraid. He took the twelve aside again and began to tell them what was going to happen to him."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 38,
        "text": "But <mark>jesus</mark> said to them, “You don’t know what you are asking! Are you able to drink the cup I drink or be baptized with the baptism I experience?”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 39,
        "text": "They said to him, “We are able.” Then <mark>jesus</mark> said to them, “You will drink the cup I drink, and you will be baptized with the baptism I experience,"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 42,
        "text": "<mark>jesus</mark> called them and said to them, “You know that those who are recognized as rulers of the Gentiles lord it over them, and those in high positions use their authority over them."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 46,
        "text": "They came to Jericho. As <mark>jesus</mark> and his disciples and a large crowd were leaving Jericho, Bartimaeus the son of Timaeus, a blind beggar, was sitting by the road."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 47,
        "text": "When he heard that it was <mark>jesus</mark> the Nazarene, he began to shout, “<mark>jesus</mark>, Son of David, have mercy on me!”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 49,
        "text": "<mark>jesus</mark> stopped and said, “Call him.” So they called the blind man and said to him, “Have courage! Get up! He is calling you.”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 50,
        "text": "He threw off his cloak, jumped up, and came to <mark>jesus</mark>."
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 51,
        "text": "Then <mark>jesus</mark> said to him, “What do you want me to do for you?” The blind man replied, “Rabbi, let me see again.”"
    },
    {
        "book": "Mark",
        "chapter": 10,
        "verse": 52,
        "text": "<mark>jesus</mark> said to him, “Go, your faith has healed you.” Immediately he regained his sight and followed him on the road."
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 1,
        "text": "Now as they approached Jerusalem, near Bethphage and Bethany, at the Mount of Olives, <mark>jesus</mark> sent two of his disciples"
    },
    {
        "book": "1 Corinthians",
        "chapter": 15,
        "verse": 31,
        "text": "Every day I am in danger of death! This is as sure as my boasting in you, which I have in Christ <mark>jesus</mark> our Lord."
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 6,
        "text": "They replied as <mark>jesus</mark> had told them, and the bystanders let them go."
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 7,
        "text": "Then they brought the colt to <mark>jesus</mark>, threw their cloaks on it, and he sat on it."
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 11,
        "text": "Then <mark>jesus</mark> entered Jerusalem and went to the temple. And after looking around at everything, he went out to Bethany with the twelve since it was already late."
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 15,
        "text": "Then they came to Jerusalem. <mark>jesus</mark> entered the temple area and began to drive out those who were selling and buying in the temple courts. He turned over the tables of the money changers and the chairs of those selling doves,"
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 19,
        "text": "When evening came, <mark>jesus</mark> and his disciples went out of the city."
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 22,
        "text": "<mark>jesus</mark> said to them, “Have faith in God."
    },
    {
        "book": "1 Corinthians",
        "chapter": 15,
        "verse": 57,
        "text": "But thanks be to God, who gives us the victory through our Lord <mark>jesus</mark> Christ!"
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 27,
        "text": "They came again to Jerusalem. While <mark>jesus</mark> was walking in the temple courts, the chief priests, the experts in the law, and the elders came up to him"
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 29,
        "text": "<mark>jesus</mark> said to them, “I will ask you one question. Answer me and I will tell you by what authority I do these things:"
    },
    {
        "book": "Mark",
        "chapter": 11,
        "verse": 33,
        "text": "So they answered <mark>jesus</mark>, “We don’t know.” Then <mark>jesus</mark> said to them, “Neither will I tell you by what authority I am doing these things.”"
    },
    {
        "book": "1 Corinthians",
        "chapter": 16,
        "verse": 23,
        "text": "The grace of the Lord <mark>jesus</mark> be with you."
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 17,
        "text": "Then <mark>jesus</mark> said to them, “Give to Caesar the things that are Caesar’s, and to God the things that are God’s.” And they were utterly amazed at him."
    },
    {
        "book": "1 Corinthians",
        "chapter": 16,
        "verse": 24,
        "text": "My love be with all of you in Christ <mark>jesus</mark>."
    },
    {
        "book": "2 Corinthians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul, an apostle of Christ <mark>jesus</mark> by the will of God, and Timothy our brother, to the church of God that is in Corinth, with all the saints who are in all Achaia."
    },
    {
        "book": "2 Corinthians",
        "chapter": 1,
        "verse": 2,
        "text": "Grace and peace to you from God our Father and the Lord <mark>jesus</mark> Christ!"
    },
    {
        "book": "2 Corinthians",
        "chapter": 1,
        "verse": 3,
        "text": "Blessed is the God and Father of our Lord <mark>jesus</mark> Christ, the Father of mercies and God of all comfort,"
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 24,
        "text": "<mark>jesus</mark> said to them, “Aren’t you deceived for this reason, because you don’t know the scriptures or the power of God?"
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 28,
        "text": "Now one of the experts in the law came and heard them debating. When he saw that <mark>jesus</mark> answered them well, he asked him, “Which commandment is the most important of all?”"
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 29,
        "text": "<mark>jesus</mark> answered, “The most important is: ‘<b>Listen, Israel, the Lord our God, the Lord is one</b>."
    },
    {
        "book": "2 Corinthians",
        "chapter": 1,
        "verse": 14,
        "text": "just as also you have partly understood us, that we are your source of pride just as you also are ours in the day of the Lord <mark>jesus</mark>."
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 34,
        "text": "When <mark>jesus</mark> saw that he had answered thoughtfully, he said to him, “You are not far from the kingdom of God.” Then no one dared any longer to question him."
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 35,
        "text": "While <mark>jesus</mark> was teaching in the temple courts, he said, “How is it that the experts in the law say that the Christ is David’s son?"
    },
    {
        "book": "2 Corinthians",
        "chapter": 1,
        "verse": 19,
        "text": "For the Son of God, <mark>jesus</mark> Christ, the one who was proclaimed among you by us — by me and Silvanus and Timothy — was not “Yes” and “No,” but it has always been “Yes” in him."
    },
    {
        "book": "Mark",
        "chapter": 12,
        "verse": 38,
        "text": "In his teaching <mark>jesus</mark> also said, “Watch out for the experts in the law. They like walking around in long robes and elaborate greetings in the marketplaces,"
    },
    {
        "book": "Mark",
        "chapter": 13,
        "verse": 1,
        "text": "Now as <mark>jesus</mark> was going out of the temple courts, one of his disciples said to him, “Teacher, look at these tremendous stones and buildings!”"
    },
    {
        "book": "Mark",
        "chapter": 13,
        "verse": 2,
        "text": "<mark>jesus</mark> said to him, “Do you see these great buildings? Not one stone will be left on another. All will be torn down!”"
    },
    {
        "book": "Mark",
        "chapter": 13,
        "verse": 5,
        "text": "<mark>jesus</mark> began to say to them, “Watch out that no one misleads you."
    },
    {
        "book": "2 Corinthians",
        "chapter": 4,
        "verse": 5,
        "text": "For we do not proclaim ourselves, but <mark>jesus</mark> Christ as Lord, and ourselves as your slaves for <mark>jesus</mark>’ sake."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 1,
        "text": "Two days before the Passover and the Feast of Unleavened Bread, the chief priests and the experts in the law were trying to find a way to arrest <mark>jesus</mark> by stealth and kill him."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 3,
        "text": "Now while <mark>jesus</mark> was in Bethany at the house of Simon the leper, reclining at the table, a woman came with an alabaster jar of costly aromatic oil from pure nard. After breaking open the jar, she poured it on his head."
    },
    {
        "book": "2 Corinthians",
        "chapter": 4,
        "verse": 10,
        "text": "always carrying around in our body the death of <mark>jesus</mark>, so that the life of <mark>jesus</mark> may also be made visible in our body."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 6,
        "text": "But <mark>jesus</mark> said, “Leave her alone. Why are you bothering her? She has done a good service for me."
    },
    {
        "book": "2 Corinthians",
        "chapter": 4,
        "verse": 11,
        "text": "For we who are alive are constantly being handed over to death for <mark>jesus</mark>’ sake, so that the life of <mark>jesus</mark> may also be made visible in our mortal body."
    },
    {
        "book": "2 Corinthians",
        "chapter": 4,
        "verse": 14,
        "text": "We do so because we know that the one who raised up <mark>jesus</mark> will also raise us up with <mark>jesus</mark> and will bring us with you into his presence."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 10,
        "text": "Then Judas Iscariot, one of the twelve, went to the chief priests to betray <mark>jesus</mark> into their hands."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 12,
        "text": "Now on the first day of the feast of Unleavened Bread, when the Passover lamb is sacrificed, <mark>jesus</mark>’ disciples said to him, “Where do you want us to prepare for you to eat the Passover?”"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 18,
        "text": "While they were at the table eating, <mark>jesus</mark> said, “I tell you the truth, one of you eating with me will betray me.”"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 27,
        "text": "Then <mark>jesus</mark> said to them, “You will all fall away, for it is written, ‘<b>I will strike the shepherd,</b> <b>and the sheep will be scattered</b>.’"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 30,
        "text": "<mark>jesus</mark> said to him, “I tell you the truth, today — this very night — before a rooster crows twice, you will deny me three times.”"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 32,
        "text": "Then they went to a place called Gethsemane, and <mark>jesus</mark> said to his disciples, “Sit here while I pray.”"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 43,
        "text": "Right away, while <mark>jesus</mark> was still speaking, Judas, one of the twelve, arrived. With him came a crowd armed with swords and clubs, sent by the chief priests and experts in the law and elders."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 45,
        "text": "When Judas arrived, he went up to <mark>jesus</mark> immediately and said, “Rabbi!” and kissed him."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 48,
        "text": "<mark>jesus</mark> said to them, “Have you come with swords and clubs to arrest me like you would an outlaw?"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 53,
        "text": "Then they led <mark>jesus</mark> to the high priest, and all the chief priests and elders and experts in the law came together."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 55,
        "text": "The chief priests and the whole Sanhedrin were looking for evidence against <mark>jesus</mark> so that they could put him to death, but they did not find anything."
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 60,
        "text": "Then the high priest stood up before them and asked <mark>jesus</mark>, “Have you no answer? What is this that they are testifying against you?”"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 62,
        "text": "“I am,” said <mark>jesus</mark>, “and you will see <b>the Son of Man sitting at the right hand</b> <b> </b>of the Power and <b>coming with the clouds of heaven</b>.”"
    },
    {
        "book": "Mark",
        "chapter": 14,
        "verse": 67,
        "text": "When she saw Peter warming himself, she looked directly at him and said, “You also were with that Nazarene, <mark>jesus</mark>.”"
    },
    {
        "book": "Mark",
        "chapter": 15,
        "verse": 1,
        "text": "Early in the morning, after forming a plan, the chief priests with the elders and the experts in the law and the whole Sanhedrin tied <mark>jesus</mark> up, led him away, and handed him over to Pilate."
    },
    {
        "book": "Mark",
        "chapter": 15,
        "verse": 5,
        "text": "But <mark>jesus</mark> made no further reply, so that Pilate was amazed."
    },
    {
        "book": "2 Corinthians",
        "chapter": 8,
        "verse": 9,
        "text": "For you know the grace of our Lord <mark>jesus</mark> Christ, that although he was rich, he became poor for your sakes, so that you by his poverty could become rich."
    },
    {
        "book": "Mark",
        "chapter": 15,
        "verse": 15,
        "text": "Because he wanted to satisfy the crowd, Pilate released Barabbas for them. Then, after he had <mark>jesus</mark> flogged, he handed him over to be crucified."
    },
    {
        "book": "Mark",
        "chapter": 15,
        "verse": 22,
        "text": "They brought <mark>jesus</mark> to a place called Golgotha (which is translated, “Place of the Skull”)."
    },
    {
        "book": "Mark",
        "chapter": 15,
        "verse": 34,
        "text": "Around three o’clock <mark>jesus</mark> cried out with a loud voice, “<b>Eloi, Eloi, lema sabachthani?</b>” which means, “<b>My God, my God, why have you forsaken me?</b>”"
    },
    {
        "book": "Mark",
        "chapter": 15,
        "verse": 37,
        "text": "But <mark>jesus</mark> cried out with a loud voice and breathed his last."
    },
    {
        "book": "Mark",
        "chapter": 15,
        "verse": 43,
        "text": "Joseph of Arimathea, a highly regarded member of the council, who was himself looking forward to the kingdom of God, went boldly to Pilate and asked for the body of <mark>jesus</mark>."
    },
    {
        "book": "Mark",
        "chapter": 16,
        "verse": 6,
        "text": "But he said to them, “Do not be alarmed. You are looking for <mark>jesus</mark> the Nazarene, who was crucified. He has been raised! He is not here. Look, there is the place where they laid him."
    },
    {
        "book": "2 Corinthians",
        "chapter": 11,
        "verse": 4,
        "text": "For if someone comes and proclaims another <mark>jesus</mark> different from the one we proclaimed, or if you receive a different spirit than the one you received, or a different gospel than the one you accepted, you put up with it well enough!"
    },
    {
        "book": "Mark",
        "chapter": 16,
        "verse": 19,
        "text": "After the Lord <mark>jesus</mark> had spoken to them, he was taken up into heaven and sat down at the right hand of God."
    },
    {
        "book": "2 Corinthians",
        "chapter": 11,
        "verse": 31,
        "text": "The God and Father of the Lord <mark>jesus</mark>, who is blessed forever, knows I am not lying."
    },
    {
        "book": "Luke",
        "chapter": 1,
        "verse": 31,
        "text": "Listen: You will become pregnant and give birth to a son, and you will name him <mark>jesus</mark>."
    },
    {
        "book": "2 Corinthians",
        "chapter": 13,
        "verse": 5,
        "text": "Put yourselves to the test to see if you are in the faith; examine yourselves! Or do you not recognize regarding yourselves that <mark>jesus</mark> Christ is in you — unless, indeed, you fail the test!"
    },
    {
        "book": "2 Corinthians",
        "chapter": 13,
        "verse": 13,
        "text": "The grace of the Lord <mark>jesus</mark> Christ and the love of God and the fellowship of the Holy Spirit be with you all."
    },
    {
        "book": "Galatians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul, an apostle (not from men, nor by human agency, but by <mark>jesus</mark> Christ and God the Father who raised him from the dead)"
    },
    {
        "book": "Galatians",
        "chapter": 1,
        "verse": 3,
        "text": "Grace and peace to you from God the Father and our Lord <mark>jesus</mark> Christ,"
    },
    {
        "book": "Galatians",
        "chapter": 1,
        "verse": 12,
        "text": "For I did not receive it or learn it from any human source; instead I received it by a revelation of <mark>jesus</mark> Christ."
    },
    {
        "book": "Galatians",
        "chapter": 2,
        "verse": 4,
        "text": "Now this matter arose because of the false brothers with false pretenses who slipped in unnoticed to spy on our freedom that we have in Christ <mark>jesus</mark>, to make us slaves."
    },
    {
        "book": "Galatians",
        "chapter": 2,
        "verse": 16,
        "text": "yet we know that no one is justified by the works of the law but by the faithfulness of <mark>jesus</mark> Christ. And we have come to believe in Christ <mark>jesus</mark>, so that we may be justified by the faithfulness of Christ and not by the works of the law, because by the works of the law no one will be justified."
    },
    {
        "book": "Galatians",
        "chapter": 3,
        "verse": 1,
        "text": "You foolish Galatians! Who has cast a spell on you? Before your eyes <mark>jesus</mark> Christ was vividly portrayed as crucified!"
    },
    {
        "book": "Luke",
        "chapter": 2,
        "verse": 21,
        "text": "At the end of eight days, when he was circumcised, he was named <mark>jesus</mark>, the name given by the angel before he was conceived in the womb."
    },
    {
        "book": "Luke",
        "chapter": 2,
        "verse": 22,
        "text": "Now when the time came for their purification according to the law of Moses, Joseph and Mary brought <mark>jesus</mark> up to Jerusalem to present him to the Lord"
    },
    {
        "book": "Luke",
        "chapter": 2,
        "verse": 27,
        "text": "So Simeon, directed by the Spirit, came into the temple courts, and when the parents brought in the child <mark>jesus</mark> to do for him what was customary according to the law,"
    },
    {
        "book": "Galatians",
        "chapter": 3,
        "verse": 14,
        "text": "in order that in Christ <mark>jesus</mark> the blessing of Abraham would come to the Gentiles, so that we could receive the promise of the Spirit by faith."
    },
    {
        "book": "Luke",
        "chapter": 2,
        "verse": 41,
        "text": "Now <mark>jesus</mark>’ parents went to Jerusalem every year for the feast of the Passover."
    },
    {
        "book": "Galatians",
        "chapter": 3,
        "verse": 22,
        "text": "But the scripture imprisoned everything and everyone under sin so that the promise could be given — because of the faithfulness of <mark>jesus</mark> Christ — to those who believe."
    },
    {
        "book": "Luke",
        "chapter": 2,
        "verse": 43,
        "text": "But when the feast was over, as they were returning home, the boy <mark>jesus</mark> stayed behind in Jerusalem. His parents did not know it,"
    },
    {
        "book": "Galatians",
        "chapter": 3,
        "verse": 26,
        "text": "For in Christ <mark>jesus</mark> you are all sons of God through faith."
    },
    {
        "book": "Luke",
        "chapter": 2,
        "verse": 47,
        "text": "And all who heard <mark>jesus</mark> were astonished at his understanding and his answers."
    },
    {
        "book": "Galatians",
        "chapter": 3,
        "verse": 28,
        "text": "There is neither Jew nor Greek, there is neither slave nor free, there is neither male nor female — for all of you are one in Christ <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 2,
        "verse": 52,
        "text": "And <mark>jesus</mark> increased in wisdom and in stature, and in favor with God and with people."
    },
    {
        "book": "Galatians",
        "chapter": 4,
        "verse": 14,
        "text": "and though my physical condition put you to the test, you did not despise or reject me. Instead, you welcomed me as though I were an angel of God, as though I were Christ <mark>jesus</mark> himself!"
    },
    {
        "book": "Luke",
        "chapter": 3,
        "verse": 21,
        "text": "Now when all the people were baptized, <mark>jesus</mark> also was baptized. And while he was praying, the heavens opened,"
    },
    {
        "book": "Luke",
        "chapter": 3,
        "verse": 23,
        "text": "So <mark>jesus</mark>, when he began his ministry, was about thirty years old. He was the son (as was supposed) of Joseph, the son of Heli,"
    },
    {
        "book": "Galatians",
        "chapter": 5,
        "verse": 6,
        "text": "For in Christ <mark>jesus</mark> neither circumcision nor uncircumcision carries any weight — the only thing that matters is faith working through love."
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 1,
        "text": "Then <mark>jesus</mark>, full of the Holy Spirit, returned from the Jordan River and was led by the Spirit in the wilderness,"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 4,
        "text": "<mark>jesus</mark> answered him, “It is written, ‘<b>Man</b> <b> does not live by bread alone</b>.’”"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 8,
        "text": "<mark>jesus</mark> answered him, “It is written, ‘<b>You are to worship</b> <b>the Lord</b> <b>your God and serve</b> only<b> him</b>.’”"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 12,
        "text": "<mark>jesus</mark> answered him, “It is said, ‘<b>You are not to put the Lord your God to the test</b>.’”"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 14,
        "text": "Then <mark>jesus</mark>, in the power of the Spirit, returned to Galilee, and news about him spread throughout the surrounding countryside."
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 16,
        "text": "Now <mark>jesus</mark> came to Nazareth, where he had been brought up, and went into the synagogue on the Sabbath day, as was his custom. He stood up to read,"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 23,
        "text": "<mark>jesus</mark> said to them, “No doubt you will quote to me the proverb, ‘Physician, heal yourself!’ and say, ‘What we have heard that you did in Capernaum, do here in your hometown too.’”"
    },
    {
        "book": "Galatians",
        "chapter": 6,
        "verse": 14,
        "text": "But may I never boast except in the cross of our Lord <mark>jesus</mark> Christ, through which the world has been crucified to me, and I to the world."
    },
    {
        "book": "Galatians",
        "chapter": 6,
        "verse": 17,
        "text": "From now on let no one cause me trouble, for I bear the marks of <mark>jesus</mark> on my body."
    },
    {
        "book": "Galatians",
        "chapter": 6,
        "verse": 18,
        "text": "The grace of our Lord <mark>jesus</mark> Christ be with your spirit, brothers and sisters. Amen."
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 34,
        "text": "“Ha! Leave us alone, <mark>jesus</mark> the Nazarene! Have you come to destroy us? I know who you are — the Holy One of God.”"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 35,
        "text": "But <mark>jesus</mark> rebuked him: “Silence! Come out of him!” Then, after the demon threw the man down in their midst, he came out of him without hurting him."
    },
    {
        "book": "Ephesians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul, an apostle of Christ <mark>jesus</mark> by the will of God, to the saints [in Ephesus], the faithful in Christ <mark>jesus</mark>."
    },
    {
        "book": "Ephesians",
        "chapter": 1,
        "verse": 2,
        "text": "Grace and peace to you from God our Father and the Lord <mark>jesus</mark> Christ!"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 38,
        "text": "After <mark>jesus</mark> left the synagogue, he entered Simon’s house. Now Simon’s mother-in-law was suffering from a high fever, and they asked <mark>jesus</mark> to help her."
    },
    {
        "book": "Ephesians",
        "chapter": 1,
        "verse": 3,
        "text": "Blessed is the God and Father of our Lord <mark>jesus</mark> Christ, who has blessed us with every spiritual blessing in the heavenly realms in Christ."
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 40,
        "text": "As the sun was setting, all those who had any relatives sick with various diseases brought them to <mark>jesus</mark>. He placed his hands on every one of them and healed them."
    },
    {
        "book": "Ephesians",
        "chapter": 1,
        "verse": 5,
        "text": "He did this by predestining us to adoption as his sons through <mark>jesus</mark> Christ, according to the pleasure of his will —"
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 42,
        "text": "The next morning <mark>jesus</mark> departed and went to a deserted place. Yet the crowds were seeking him, and they came to him and tried to keep him from leaving them."
    },
    {
        "book": "Luke",
        "chapter": 4,
        "verse": 43,
        "text": "But <mark>jesus</mark> said to them, “I must proclaim the good news of the kingdom of God to the other towns too, for that is what I was sent to do.”"
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 1,
        "text": "Now <mark>jesus</mark> was standing by the Lake of Gennesaret, and the crowd was pressing around him to hear the word of God."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 3,
        "text": "He got into one of the boats, which was Simon’s, and asked him to put out a little way from the shore. Then <mark>jesus</mark> sat down and taught the crowds from the boat."
    },
    {
        "book": "Ephesians",
        "chapter": 1,
        "verse": 15,
        "text": "For this reason, because I have heard of your faith in the Lord <mark>jesus</mark> and your love for all the saints,"
    },
    {
        "book": "Ephesians",
        "chapter": 1,
        "verse": 17,
        "text": "I pray that the God of our Lord <mark>jesus</mark> Christ, the Father of glory, may give you spiritual wisdom and revelation in your growing knowledge of him,"
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 8,
        "text": "But when Simon Peter saw it, he fell down at <mark>jesus</mark>’ knees, saying, “Go away from me, Lord, for I am a sinful man!”"
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 10,
        "text": "and so were James and John, Zebedee’s sons, who were Simon’s business partners. Then <mark>jesus</mark> said to Simon, “Do not be afraid; from now on you will be catching people.”"
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 12,
        "text": "While <mark>jesus</mark> was in one of the towns, a man came to him who was covered with leprosy. When he saw <mark>jesus</mark>, he bowed down with his face to the ground and begged him, “Lord, if you are willing, you can make me clean.”"
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 16,
        "text": "Yet <mark>jesus</mark> himself frequently withdrew to the wilderness and prayed."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 18,
        "text": "Just then some men showed up, carrying a paralyzed man on a stretcher. They were trying to bring him in and place him before <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 19,
        "text": "But since they found no way to carry him in because of the crowd, they went up on the roof and let him down on the stretcher through the roof tiles right in front of <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 20,
        "text": "When <mark>jesus</mark> saw their faith he said, “Friend, your sins are forgiven.”"
    },
    {
        "book": "Ephesians",
        "chapter": 2,
        "verse": 6,
        "text": "and he raised us up with him and seated us with him in the heavenly realms in Christ <mark>jesus</mark>,"
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 22,
        "text": "When <mark>jesus</mark> perceived their hostile thoughts, he said to them, “Why are you raising objections within yourselves?"
    },
    {
        "book": "Ephesians",
        "chapter": 2,
        "verse": 7,
        "text": "to demonstrate in the coming ages the surpassing wealth of his grace in kindness toward us in Christ <mark>jesus</mark>."
    },
    {
        "book": "Ephesians",
        "chapter": 2,
        "verse": 10,
        "text": "For we are his workmanship, having been created in Christ <mark>jesus</mark> for good works that God prepared beforehand so we may do them."
    },
    {
        "book": "Ephesians",
        "chapter": 2,
        "verse": 13,
        "text": "But now in Christ <mark>jesus</mark> you who used to be far away have been brought near by the blood of Christ."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 27,
        "text": "After this, <mark>jesus</mark> went out and saw a tax collector named Levi sitting at the tax booth. “Follow me,” he said to him."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 29,
        "text": "Then Levi gave a great banquet in his house for <mark>jesus</mark>, and there was a large crowd of tax collectors and others sitting at the table with them."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 31,
        "text": "<mark>jesus</mark> answered them, “Those who are well don’t need a physician, but those who are sick do."
    },
    {
        "book": "Ephesians",
        "chapter": 2,
        "verse": 20,
        "text": "because you have been built on the foundation of the apostles and prophets, with Christ <mark>jesus</mark> himself as the cornerstone."
    },
    {
        "book": "Luke",
        "chapter": 5,
        "verse": 34,
        "text": "So <mark>jesus</mark> said to them, “You cannot make the wedding guests fast while the bridegroom is with them, can you?"
    },
    {
        "book": "Ephesians",
        "chapter": 3,
        "verse": 1,
        "text": "For this reason I, Paul, the prisoner of Christ <mark>jesus</mark> for the sake of you Gentiles —"
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 1,
        "text": "<mark>jesus</mark> was going through the grain fields on a Sabbath, and his disciples picked some heads of wheat, rubbed them in their hands, and ate them."
    },
    {
        "book": "Ephesians",
        "chapter": 3,
        "verse": 6,
        "text": "namely, that through the gospel the Gentiles are fellow heirs, fellow members of the body, and fellow partakers of the promise in Christ <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 3,
        "text": "<mark>jesus</mark> answered them, “Haven’t you read what David did when he and his companions were hungry —"
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 6,
        "text": "On another Sabbath, <mark>jesus</mark> entered the synagogue and was teaching. Now a man was there whose right hand was withered."
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 7,
        "text": "The experts in the law and the Pharisees watched <mark>jesus</mark> closely to see if he would heal on the Sabbath, so that they could find a reason to accuse him."
    },
    {
        "book": "Ephesians",
        "chapter": 3,
        "verse": 11,
        "text": "This was according to the eternal purpose that he accomplished in Christ <mark>jesus</mark> our Lord,"
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 9,
        "text": "Then <mark>jesus</mark> said to them, “I ask you, is it lawful to do good on the Sabbath or to do evil, to save a life or to destroy it?”"
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 11,
        "text": "But they were filled with mindless rage and began debating with one another what they would do to <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 6,
        "verse": 12,
        "text": "Now it was during this time that <mark>jesus</mark> went out to the mountain to pray, and he spent all night in prayer to God."
    },
    {
        "book": "Ephesians",
        "chapter": 3,
        "verse": 21,
        "text": "to him be the glory in the church and in Christ <mark>jesus</mark> to all generations, forever and ever. Amen."
    },
    {
        "book": "Ephesians",
        "chapter": 4,
        "verse": 21,
        "text": "if indeed you heard about him and were taught in him, just as the truth is in <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 1,
        "text": "After <mark>jesus</mark> had finished teaching all this to the people, he entered Capernaum."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 3,
        "text": "When the centurion heard about <mark>jesus</mark>, he sent some Jewish elders to him, asking him to come and heal his slave."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 4,
        "text": "When they came to <mark>jesus</mark>, they urged him earnestly, “He is worthy to have you do this for him,"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 6,
        "text": "So <mark>jesus</mark> went with them. When he was not far from the house, the centurion sent friends to say to him, “Lord, do not trouble yourself, for I am not worthy to have you come under my roof."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 9,
        "text": "When <mark>jesus</mark> heard this, he was amazed at him. He turned and said to the crowd that followed him, “I tell you, not even in Israel have I found such faith!”"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 11,
        "text": "Soon afterward <mark>jesus</mark> went to a town called Nain, and his disciples and a large crowd went with him."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 15,
        "text": "So the dead man sat up and began to speak, and <mark>jesus</mark> gave him back to his mother."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 17,
        "text": "This report about <mark>jesus</mark> circulated throughout Judea and all the surrounding country."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 19,
        "text": "and sent them to <mark>jesus</mark> to ask, “Are you the one who is to come, or should we look for another?”"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 20,
        "text": "When the men came to <mark>jesus</mark>, they said, “John the Baptist has sent us to you to ask, ‘Are you the one who is to come, or should we look for another?’”"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 21,
        "text": "At that very time <mark>jesus</mark> cured many people of diseases, sicknesses, and evil spirits, and granted sight to many who were blind."
    },
    {
        "book": "Ephesians",
        "chapter": 5,
        "verse": 20,
        "text": "always giving thanks to God the Father for each other in the name of our Lord <mark>jesus</mark> Christ,"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 24,
        "text": "When John’s messengers had gone, <mark>jesus</mark> began to speak to the crowds about John: “What did you go out into the wilderness to see? A reed shaken by the wind?"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 36,
        "text": "Now one of the Pharisees asked <mark>jesus</mark> to have dinner with him, so he went into the Pharisee’s house and took his place at the table."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 37,
        "text": "Then when a woman of that town, who was a sinner, learned that <mark>jesus</mark> was dining at the Pharisee’s house, she brought an alabaster jar of perfumed oil."
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 40,
        "text": "So <mark>jesus</mark> answered him, “Simon, I have something to say to you.” He replied, “Say it, Teacher.”"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 43,
        "text": "Simon answered, “I suppose the one who had the bigger debt canceled.” <mark>jesus</mark> said to him, “You have judged rightly.”"
    },
    {
        "book": "Luke",
        "chapter": 7,
        "verse": 48,
        "text": "Then <mark>jesus</mark> said to her, “Your sins are forgiven.”"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 4,
        "text": "While a large crowd was gathering and people were coming to <mark>jesus</mark> from one town after another, he spoke to them in a parable:"
    },
    {
        "book": "Ephesians",
        "chapter": 6,
        "verse": 23,
        "text": "Peace to the brothers and sisters, and love with faith, from God the Father and the Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "Ephesians",
        "chapter": 6,
        "verse": 24,
        "text": "Grace be with all of those who love our Lord <mark>jesus</mark> Christ with an undying love."
    },
    {
        "book": "Philippians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul and Timothy, slaves of Christ <mark>jesus</mark>, to all the saints in Christ <mark>jesus</mark> who are in Philippi, with the overseers and deacons."
    },
    {
        "book": "Philippians",
        "chapter": 1,
        "verse": 2,
        "text": "Grace and peace to you from God our Father and the Lord <mark>jesus</mark> Christ!"
    },
    {
        "book": "Philippians",
        "chapter": 1,
        "verse": 6,
        "text": "For I am sure of this very thing, that the one who began a good work in you will perfect it until the day of Christ <mark>jesus</mark>."
    },
    {
        "book": "Philippians",
        "chapter": 1,
        "verse": 8,
        "text": "For God is my witness that I long for all of you with the affection of Christ <mark>jesus</mark>."
    },
    {
        "book": "Philippians",
        "chapter": 1,
        "verse": 11,
        "text": "filled with the fruit of righteousness that comes through <mark>jesus</mark> Christ to the glory and praise of God."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 19,
        "text": "Now <mark>jesus</mark>’ mother and his brothers came to him, but they could not get near him because of the crowd."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 22,
        "text": "One day <mark>jesus</mark> got into a boat with his disciples and said to them, “Let’s go across to the other side of the lake.” So they set out,"
    },
    {
        "book": "Philippians",
        "chapter": 1,
        "verse": 19,
        "text": "for I know that this will turn out for my deliverance through your prayers and the help of the Spirit of <mark>jesus</mark> Christ."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 27,
        "text": "As <mark>jesus</mark> stepped ashore, a certain man from the town met him who was possessed by demons. For a long time this man had worn no clothes and had not lived in a house, but among the tombs."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 28,
        "text": "When he saw <mark>jesus</mark>, he cried out, fell down before him, and shouted with a loud voice, “Leave me alone, <mark>jesus</mark>, Son of the Most High God! I beg you, do not torment me!”"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 29,
        "text": "For <mark>jesus</mark> had started commanding the evil spirit to come out of the man. (For it had seized him many times, so he would be bound with chains and shackles and kept under guard. But he would break the restraints and be driven by the demon into deserted places.)"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 30,
        "text": "<mark>jesus</mark> then asked him, “What is your name?” He said, “Legion,” because many demons had entered him."
    },
    {
        "book": "Philippians",
        "chapter": 1,
        "verse": 26,
        "text": "so that what you can be proud of may increase because of me in Christ <mark>jesus</mark>, when I come back to you."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 32,
        "text": "Now a large herd of pigs was feeding there on the hillside, and the demonic spirits begged <mark>jesus</mark> to let them go into them. He gave them permission."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 35,
        "text": "So the people went out to see what had happened, and they came to <mark>jesus</mark>. They found the man from whom the demons had gone out, sitting at <mark>jesus</mark>’ feet, clothed and in his right mind, and they were afraid."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 37,
        "text": "Then all the people of the Gerasenes and the surrounding region asked <mark>jesus</mark> to leave them alone, for they were seized with great fear. So he got into the boat and left."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 38,
        "text": "The man from whom the demons had gone out begged to go with him, but <mark>jesus</mark> sent him away, saying,"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 39,
        "text": "“Return to your home, and declare what God has done for you.” So he went away, proclaiming throughout the whole town what <mark>jesus</mark> had done for him."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 40,
        "text": "Now when <mark>jesus</mark> returned, the crowd welcomed him, because they were all waiting for him."
    },
    {
        "book": "Philippians",
        "chapter": 2,
        "verse": 5,
        "text": "You should have the same attitude toward one another that Christ <mark>jesus</mark> had,"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 42,
        "text": "because he had an only daughter, about twelve years old, and she was dying. As <mark>jesus</mark> was on his way, the crowds pressed around him."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 41,
        "text": "Then a man named Jairus, who was a ruler of the synagogue, came up. Falling at <mark>jesus</mark>’ feet, he pleaded with him to come to his house,"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 44,
        "text": "She came up behind <mark>jesus</mark> and touched the edge of his cloak, and at once the bleeding stopped."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 45,
        "text": "Then <mark>jesus</mark> asked, “Who was it who touched me?” When they all denied it, Peter said, “Master, the crowds are surrounding you and pressing against you!”"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 46,
        "text": "But <mark>jesus</mark> said, “Someone touched me, for I know that power has gone out from me.”"
    },
    {
        "book": "Philippians",
        "chapter": 2,
        "verse": 10,
        "text": "so that at the name of <mark>jesus</mark> every knee will bow — in heaven and on earth and under the earth —"
    },
    {
        "book": "Philippians",
        "chapter": 2,
        "verse": 11,
        "text": "and every tongue confess that <mark>jesus</mark> Christ is Lord to the glory of God the Father."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 50,
        "text": "But when <mark>jesus</mark> heard this, he told him, “Do not be afraid; just believe, and she will be healed.”"
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 51,
        "text": "Now when he came to the house, <mark>jesus</mark> did not let anyone go in with him except Peter, John, and James, and the child’s father and mother."
    },
    {
        "book": "Luke",
        "chapter": 8,
        "verse": 54,
        "text": "But <mark>jesus</mark> gently took her by the hand and said, “Child, get up.”"
    },
    {
        "book": "Philippians",
        "chapter": 2,
        "verse": 19,
        "text": "Now I hope in the Lord <mark>jesus</mark> to send Timothy to you soon, so that I too may be encouraged by hearing news about you."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 1,
        "text": "After <mark>jesus</mark> called the twelve together, he gave them power and authority over all demons and to cure diseases,"
    },
    {
        "book": "Philippians",
        "chapter": 2,
        "verse": 21,
        "text": "Others are busy with their own concerns, not those of <mark>jesus</mark> Christ."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 9,
        "text": "Herod said, “I had John beheaded, but who is this about whom I hear such things?” So Herod wanted to learn about <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 10,
        "text": "When the apostles returned, they told <mark>jesus</mark> everything they had done. Then he took them with him and they withdrew privately to a town called Bethsaida."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 12,
        "text": "Now the day began to draw to a close, so the twelve came and said to <mark>jesus</mark>, “Send the crowd away, so they can go into the surrounding villages and countryside and find lodging and food, because we are in an isolated place.”"
    },
    {
        "book": "Philippians",
        "chapter": 3,
        "verse": 3,
        "text": "For we are the circumcision, the ones who worship by the Spirit of God, exult in Christ <mark>jesus</mark>, and do not rely on human credentials"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 15,
        "text": "So they did as <mark>jesus</mark> directed, and the people all sat down."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 18,
        "text": "Once when <mark>jesus</mark> was praying by himself, and his disciples were nearby, he asked them, “Who do the crowds say that I am?”"
    },
    {
        "book": "Philippians",
        "chapter": 3,
        "verse": 8,
        "text": "More than that, I now regard all things as liabilities compared to the far greater value of knowing Christ <mark>jesus</mark> my Lord, for whom I have suffered the loss of all things — indeed, I regard them as dung! — that I may gain Christ,"
    },
    {
        "book": "Philippians",
        "chapter": 3,
        "verse": 12,
        "text": "Not that I have already attained this — that is, I have not already been perfected — but I strive to lay hold of that for which Christ <mark>jesus</mark> also laid hold of me."
    },
    {
        "book": "Philippians",
        "chapter": 3,
        "verse": 14,
        "text": "with this goal in mind, I strive toward the prize of the upward call of God in Christ <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 28,
        "text": "Now about eight days after these sayings, <mark>jesus</mark> took with him Peter, John, and James, and went up the mountain to pray."
    },
    {
        "book": "Philippians",
        "chapter": 3,
        "verse": 20,
        "text": "But our citizenship is in heaven — and we also await a savior from there, the Lord <mark>jesus</mark> Christ,"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 33,
        "text": "Then as the men were starting to leave, Peter said to <mark>jesus</mark>, “Master, it is good for us to be here. Let us make three shelters, one for you and one for Moses and one for Elijah” — not knowing what he was saying."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 36,
        "text": "After the voice had spoken, <mark>jesus</mark> was found alone. So they kept silent and told no one at that time anything of what they had seen."
    },
    {
        "book": "Philippians",
        "chapter": 4,
        "verse": 7,
        "text": "And the peace of God that surpasses all understanding will guard your hearts and minds in Christ <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 41,
        "text": "<mark>jesus</mark> answered, “You unbelieving and perverse generation! How much longer must I be with you and endure you? Bring your son here.”"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 42,
        "text": "As the boy was approaching, the demon threw him to the ground and shook him with convulsions. But <mark>jesus</mark> rebuked the unclean spirit, healed the boy, and gave him back to his father."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 43,
        "text": "Then they were all astonished at the mighty power of God. But while the entire crowd was amazed at everything <mark>jesus</mark> was doing, he said to his disciples,"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 47,
        "text": "But when <mark>jesus</mark> discerned their innermost thoughts, he took a child, had him stand by his side,"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 50,
        "text": "But <mark>jesus</mark> said to him, “Do not stop him, for whoever is not against you is for you.”"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 51,
        "text": "Now when the days drew near for him to be taken up, <mark>jesus</mark> set out resolutely to go to Jerusalem."
    },
    {
        "book": "Philippians",
        "chapter": 4,
        "verse": 19,
        "text": "And my God will supply your every need according to his glorious riches in Christ <mark>jesus</mark>."
    },
    {
        "book": "Philippians",
        "chapter": 4,
        "verse": 21,
        "text": "Give greetings to all the saints in Christ <mark>jesus</mark>. The brothers with me here send greetings."
    },
    {
        "book": "Philippians",
        "chapter": 4,
        "verse": 23,
        "text": "The grace of the Lord <mark>jesus</mark> Christ be with your spirit."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 55,
        "text": "But <mark>jesus</mark> turned and rebuked them,"
    },
    {
        "book": "Colossians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul, an apostle of Christ <mark>jesus</mark> by the will of God, and Timothy our brother,"
    },
    {
        "book": "Colossians",
        "chapter": 1,
        "verse": 3,
        "text": "We always give thanks to God, the Father of our Lord <mark>jesus</mark> Christ, when we pray for you,"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 58,
        "text": "<mark>jesus</mark> said to him, “Foxes have dens and the birds in the sky have nests, but the Son of Man has no place to lay his head.”"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 59,
        "text": "<mark>jesus</mark> said to another, “Follow me.” But he replied, “Lord, first let me go and bury my father.”"
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 60,
        "text": "But <mark>jesus</mark> said to him, “Let the dead bury their own dead, but as for you, go and proclaim the kingdom of God.”"
    },
    {
        "book": "Colossians",
        "chapter": 1,
        "verse": 4,
        "text": "since we heard about your faith in Christ <mark>jesus</mark> and the love that you have for all the saints."
    },
    {
        "book": "Luke",
        "chapter": 9,
        "verse": 62,
        "text": "<mark>jesus</mark> said to him, “No one who puts his hand to the plow and looks back is fit for the kingdom of God.”"
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 21,
        "text": "On that same occasion <mark>jesus</mark> rejoiced in the Holy Spirit and said, “I praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and intelligent, and revealed them to little children. Yes, Father, for this was your gracious will."
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 23,
        "text": "Then <mark>jesus</mark> turned to his disciples and said privately, “Blessed are the eyes that see what you see!"
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 25,
        "text": "Now an expert in religious law stood up to test <mark>jesus</mark>, saying, “Teacher, what must I do to inherit eternal life?”"
    },
    {
        "book": "Colossians",
        "chapter": 2,
        "verse": 6,
        "text": "Therefore, just as you received Christ <mark>jesus</mark> as Lord, continue to live your lives in him,"
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 28,
        "text": "<mark>jesus</mark> said to him, “You have answered correctly; do this, and you will live.”"
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 29,
        "text": "But the expert, wanting to justify himself, said to <mark>jesus</mark>, “And who is my neighbor?”"
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 30,
        "text": "<mark>jesus</mark> replied, “A man was going down from Jerusalem to Jericho, and fell into the hands of robbers, who stripped him, beat him up, and went off, leaving him half dead."
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 37,
        "text": "The expert in religious law said, “The one who showed mercy to him.” So <mark>jesus</mark> said to him, “Go and do the same.”"
    },
    {
        "book": "Luke",
        "chapter": 10,
        "verse": 38,
        "text": "Now as they went on their way, <mark>jesus</mark> entered a certain village where a woman named Martha welcomed him as a guest."
    },
    {
        "book": "Luke",
        "chapter": 11,
        "verse": 1,
        "text": "Now <mark>jesus</mark> was praying in a certain place. When he stopped, one of his disciples said to him, “Lord, teach us to pray, just as John taught his disciples.”"
    },
    {
        "book": "Luke",
        "chapter": 11,
        "verse": 17,
        "text": "But <mark>jesus</mark>, realizing their thoughts, said to them, “Every kingdom divided against itself is destroyed, and a divided household falls."
    },
    {
        "book": "Colossians",
        "chapter": 3,
        "verse": 17,
        "text": "And whatever you do in word or deed, do it all in the name of the Lord <mark>jesus</mark>, giving thanks to God the Father through him."
    },
    {
        "book": "Luke",
        "chapter": 11,
        "verse": 29,
        "text": "As the crowds were increasing, <mark>jesus</mark> began to say, “This generation is a wicked generation; it looks for a sign, but no sign will be given to it except the sign of Jonah."
    },
    {
        "book": "Luke",
        "chapter": 11,
        "verse": 37,
        "text": "As he spoke, a Pharisee invited <mark>jesus</mark> to have a meal with him, so he went in and took his place at the table."
    },
    {
        "book": "Colossians",
        "chapter": 4,
        "verse": 11,
        "text": "And <mark>jesus</mark> who is called Justus also sends greetings. In terms of Jewish converts, these are the only fellow workers for the kingdom of God, and they have been a comfort to me."
    },
    {
        "book": "Luke",
        "chapter": 11,
        "verse": 38,
        "text": "The Pharisee was astonished when he saw that <mark>jesus</mark> did not first wash his hands before the meal."
    },
    {
        "book": "Luke",
        "chapter": 11,
        "verse": 46,
        "text": "But <mark>jesus</mark> replied, “Woe to you experts in religious law as well! You load people down with burdens difficult to bear, yet you yourselves refuse to touch the burdens with even one of your fingers!"
    },
    {
        "book": "1 Thessalonians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul and Silvanus and Timothy, to the church of the Thessalonians in God the Father and the Lord <mark>jesus</mark> Christ. Grace and peace to you!"
    },
    {
        "book": "1 Thessalonians",
        "chapter": 1,
        "verse": 3,
        "text": "because we recall in the presence of our God and Father your work of faith and labor of love and endurance of hope in our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "Luke",
        "chapter": 12,
        "verse": 1,
        "text": "Meanwhile, when many thousands of the crowd had gathered so that they were trampling on one another, <mark>jesus</mark> began to speak first to his disciples, “Be on your guard against the yeast of the Pharisees, which is hypocrisy."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 1,
        "verse": 10,
        "text": "and to wait for his Son from heaven, whom he raised from the dead, <mark>jesus</mark> our deliverer from the coming wrath."
    },
    {
        "book": "Luke",
        "chapter": 12,
        "verse": 14,
        "text": "But <mark>jesus</mark> said to him, “Man, who made me a judge or arbitrator between you two?”"
    },
    {
        "book": "1 Thessalonians",
        "chapter": 2,
        "verse": 14,
        "text": "For you became imitators, brothers and sisters, of God’s churches in Christ <mark>jesus</mark> that are in Judea, because you too suffered the same things from your own countrymen as they in fact did from the Jews,"
    },
    {
        "book": "1 Thessalonians",
        "chapter": 2,
        "verse": 15,
        "text": "who killed both the Lord <mark>jesus</mark> and the prophets and persecuted us severely. They are displeasing to God and are opposed to all people,"
    },
    {
        "book": "1 Thessalonians",
        "chapter": 2,
        "verse": 19,
        "text": "For who is our hope or joy or crown to boast of before our Lord <mark>jesus</mark> at his coming? Is it not of course you?"
    },
    {
        "book": "Luke",
        "chapter": 12,
        "verse": 22,
        "text": "Then <mark>jesus</mark> said to his disciples, “Therefore I tell you, do not worry about your life, what you will eat, or about your body, what you will wear."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 3,
        "verse": 11,
        "text": "Now may God our Father himself and our Lord <mark>jesus</mark> direct our way to you."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 3,
        "verse": 13,
        "text": "so that your hearts are strengthened in holiness to be blameless before our God and Father at the coming of our Lord <mark>jesus</mark> with all his saints."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 4,
        "verse": 1,
        "text": "Finally then, brothers and sisters, we ask you and urge you in the Lord <mark>jesus</mark>, that as you received instruction from us about how you must live and please God (as you are in fact living) that you do so more and more."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 4,
        "verse": 2,
        "text": "For you know what commands we gave you through the Lord <mark>jesus</mark>."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 4,
        "verse": 14,
        "text": "For if we believe that <mark>jesus</mark> died and rose again, so also we believe that God will bring with him those who have fallen asleep as Christians."
    },
    {
        "book": "Luke",
        "chapter": 12,
        "verse": 54,
        "text": "<mark>jesus</mark> also said to the crowds, “When you see a cloud rising in the west, you say at once, ‘A rainstorm is coming,’ and it does."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 5,
        "verse": 9,
        "text": "For God did not destine us for wrath but for gaining salvation through our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "Luke",
        "chapter": 13,
        "verse": 6,
        "text": "Then <mark>jesus</mark> told this parable: “A man had a fig tree planted in his vineyard, and he came looking for fruit on it and found none."
    },
    {
        "book": "1 Thessalonians",
        "chapter": 5,
        "verse": 18,
        "text": "in everything give thanks. For this is God’s will for you in Christ <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 13,
        "verse": 12,
        "text": "When <mark>jesus</mark> saw her, he called her to him and said, “Woman, you are freed from your infirmity.”"
    },
    {
        "book": "Luke",
        "chapter": 13,
        "verse": 14,
        "text": "But the president of the synagogue, indignant because <mark>jesus</mark> had healed on the Sabbath, said to the crowd, “There are six days on which work should be done! So come and be healed on those days, and not on the Sabbath day.”"
    },
    {
        "book": "1 Thessalonians",
        "chapter": 5,
        "verse": 23,
        "text": "Now may the God of peace himself make you completely holy and may your spirit and soul and body be kept entirely blameless at the coming of our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "Luke",
        "chapter": 13,
        "verse": 18,
        "text": "Thus <mark>jesus</mark> asked, “What is the kingdom of God like? To what should I compare it?"
    },
    {
        "book": "1 Thessalonians",
        "chapter": 5,
        "verse": 28,
        "text": "The grace of our Lord <mark>jesus</mark> Christ be with you."
    },
    {
        "book": "Luke",
        "chapter": 13,
        "verse": 22,
        "text": "Then <mark>jesus</mark> traveled throughout towns and villages, teaching and making his way toward Jerusalem."
    },
    {
        "book": "2 Thessalonians",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul and Silvanus and Timothy, to the church of the Thessalonians in God our Father and the Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "2 Thessalonians",
        "chapter": 1,
        "verse": 2,
        "text": "Grace and peace to you from God the Father and the Lord <mark>jesus</mark> Christ!"
    },
    {
        "book": "2 Thessalonians",
        "chapter": 1,
        "verse": 7,
        "text": "and to you who are being afflicted to give rest together with us when the Lord <mark>jesus</mark> is revealed from heaven with his mighty angels."
    },
    {
        "book": "2 Thessalonians",
        "chapter": 1,
        "verse": 8,
        "text": "<b>With flaming fire he will mete out</b> <b>punishment on those who do not know God</b> and do not obey the gospel of our Lord <mark>jesus</mark>."
    },
    {
        "book": "Luke",
        "chapter": 13,
        "verse": 31,
        "text": "At that time, some Pharisees came up and said to <mark>jesus</mark>, “Get away from here, because Herod wants to kill you.”"
    },
    {
        "book": "2 Thessalonians",
        "chapter": 1,
        "verse": 12,
        "text": "that the name of our Lord <mark>jesus</mark> may be glorified in you, and you in him, according to the grace of our God and the Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "2 Thessalonians",
        "chapter": 2,
        "verse": 1,
        "text": "Now regarding the arrival of our Lord <mark>jesus</mark> Christ and our being gathered to be with him, we ask you, brothers and sisters,"
    },
    {
        "book": "Luke",
        "chapter": 14,
        "verse": 1,
        "text": "Now one Sabbath when <mark>jesus</mark> went to dine at the house of a leader of the Pharisees, they were watching him closely."
    },
    {
        "book": "Luke",
        "chapter": 14,
        "verse": 3,
        "text": "So <mark>jesus</mark> asked the experts in religious law and the Pharisees, “Is it lawful to heal on the Sabbath or not?”"
    },
    {
        "book": "Luke",
        "chapter": 14,
        "verse": 4,
        "text": "But they remained silent. So <mark>jesus</mark> took hold of the man, healed him, and sent him away."
    },
    {
        "book": "Luke",
        "chapter": 14,
        "verse": 7,
        "text": "Then when <mark>jesus</mark> noticed how the guests chose the places of honor, he told them a parable. He said to them,"
    },
    {
        "book": "2 Thessalonians",
        "chapter": 2,
        "verse": 14,
        "text": "He called you to this salvation through our gospel, so that you may possess the glory of our Lord <mark>jesus</mark> Christ."
    },
    {
        "book": "2 Thessalonians",
        "chapter": 2,
        "verse": 16,
        "text": "Now may our Lord <mark>jesus</mark> Christ himself and God our Father, who loved us and by grace gave us eternal comfort and good hope,"
    },
    {
        "book": "Luke",
        "chapter": 14,
        "verse": 15,
        "text": "When one of those at the meal with <mark>jesus</mark> heard this, he said to him, “Blessed is everyone who will feast in the kingdom of God!”"
    },
    {
        "book": "Luke",
        "chapter": 14,
        "verse": 16,
        "text": "But <mark>jesus</mark> said to him, “A man once gave a great banquet and invited many guests."
    },
    {
        "book": "2 Thessalonians",
        "chapter": 3,
        "verse": 6,
        "text": "But we command you, brothers and sisters, in the name of our Lord <mark>jesus</mark> Christ, to keep away from any brother who lives an undisciplined life and not according to the tradition they received from us."
    },
    {
        "book": "Luke",
        "chapter": 14,
        "verse": 25,
        "text": "Now large crowds were accompanying <mark>jesus</mark>, and turning to them he said,"
    },
    {
        "book": "2 Thessalonians",
        "chapter": 3,
        "verse": 12,
        "text": "Now such people we command and urge in the Lord <mark>jesus</mark> Christ to work quietly and so provide their own food to eat."
    },
    {
        "book": "2 Thessalonians",
        "chapter": 3,
        "verse": 18,
        "text": "The grace of our Lord <mark>jesus</mark> Christ be with you all."
    },
    {
        "book": "1 Timothy",
        "chapter": 1,
        "verse": 1,
        "text": "From Paul, an apostle of Christ <mark>jesus</mark> by the command of God our Savior and of Christ <mark>jesus</mark> our hope,"
    },
    {
        "book": "1 Timothy",
        "chapter": 1,
        "verse": 2,
        "text": "to Timothy, my genuine child in the faith. Grace, mercy, and peace from God the Father and Christ <mark>jesus</mark> our Lord!"
    },
    {
        "book": "Luke",
        "chapter": 15,
        "verse": 3,
        "text": "So <mark>jesus</mark> told them this parable:"
    },
    {
        "book": "1 Timothy",
        "chapter": 1,
        "verse": 12,
        "text": "I am grateful to the one who has strengthened me, Christ <mark>jesus</mark> our Lord, because he considered me faithful in putting me into ministry,"
    },
    {
        "book": "Luke",
        "chapter": 15,
        "verse": 11,
        "text": "Then <mark>jesus</mark> said, “A man had two sons."
    },
    {
        "book": "1 Timothy",
        "chapter": 1,
        "verse": 14,
        "text": "and our Lord’s grace was abundant, bringing faith and love in Christ <mark>jesus</mark>."
    },
    {
        "book": "1 Timothy",
        "chapter": 1,
        "verse": 15,
        "text": "This saying is trustworthy and deserves full acceptance: “Christ <mark>jesus</mark> came into the world to save sinners” — and I am the worst of them!"
    },
    {
        "book": "1 Timothy",
        "chapter": 1,
        "verse": 16,
        "text": "But here is why I was treated with mercy: so that in me as the worst, Christ <mark>jesus</mark> could demonstrate his utmost patience, as an example for those who are going to believe in him for eternal life."
    },
    {
        "book": "1 Timothy",
        "chapter": 2,
        "verse": 5,
        "text": "For there is one God and one intermediary between God and humanity, Christ <mark>jesus</mark>, himself human,"
    },
    {
        "book": "Luke",
        "chapter": 16,
        "verse": 1,
        "text": "<mark>jesus</mark> also said to the disciples, “There was a rich man who was informed of accusations that his manager was wasting his assets."
    }
]
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
