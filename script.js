/* ==========================================
   JADON
   COMPLETE JAVASCRIPT
========================================== */


/* ==========================================
   STAR CONTENT
========================================== */

const stars = [

    /* ==========================================
       1–94: REASONS I LOVE YOU
    ========================================== */

    {
        id: 1,
        type: "reason",
        title: "You Are My Safe Place",
        message: "Before you, I don't think I really knew what it felt like to feel completely safe with another person. Somehow you became the person I can bring every messy, scared, overwhelmed part of myself to and still feel loved."
    },

    {
        id: 2,
        type: "reason",
        title: "A Place To Rest My Heart",
        message: "For so much of my life, I felt like I never really had somewhere I belonged. Then you came along and somehow became the place where I could finally set my heart down and rest."
    },

    {
        id: 3,
        type: "reason",
        title: "When You Call Me Your Angel",
        message: "Every single time you call me your angel, my heart melts. It doesn't matter how many times I've heard it. Coming from you, it still makes me feel ridiculously loved."
    },

    {
        id: 4,
        type: "reason",
        title: "WE Will Figure It Out",
        message: "I don't think you realize what happens inside my heart when I'm struggling and you say, \"WE will figure it out.\" You never make me feel like I'm standing alone against whatever I'm facing. You remind me that we're a team."
    },

    {
        id: 5,
        type: "reason",
        title: "WE Will Get Through It",
        message: "You could easily tell me that everything will be okay, but instead you always say WE will get through it. That tiny word means everything to me because you keep reminding me that I don't have to face life by myself anymore."
    },

    {
        id: 6,
        type: "reason",
        title: "You Let Me Be Your Safe Place",
        message: "I love that you've trusted me enough to open parts of yourself you told me you've never allowed yourself to open before. Being someone you feel safe with is something I will never take for granted."
    },

    {
        id: 7,
        type: "reason",
        title: "Your Beautiful Brain",
        message: "I love your ADHD brain. I love the tangents, the random thoughts, the sudden subject changes, and somehow having several completely different conversations happening at the exact same time."
    },

    {
        id: 8,
        type: "reason",
        title: "When You Talk To Yourself",
        message: "I love listening to you talk to yourself when we're playing games. You probably don't even think twice about it, but those tiny unfiltered pieces of you make me smile so much."
    },

    {
        id: 9,
        type: "reason",
        title: "When You Start Singing",
        message: "I love when we're playing and you randomly start singing. It's one of those little things you probably don't realize I've tucked away as something I absolutely adore about you."
    },

    {
        id: 10,
        type: "reason",
        title: "Your Voice",
        message: "Your voice has become one of my favorite sounds. It can make me laugh, calm me down, comfort me, or make an ordinary night feel like exactly where I want to be."
    },

    {
        id: 11,
        type: "reason",
        title: "You Make Me Laugh When I'm Crying",
        message: "I love that somehow, even when I'm crying, you can find a way to make me laugh. You don't dismiss what I'm feeling. You just somehow remind me that there is still a little bit of light there too."
    },

    {
        id: 12,
        type: "reason",
        title: "You Tell Me You're Proud Of Me",
        message: "I love how often you tell me you're proud of me. Sometimes you believe in me during moments when I'm struggling to believe in myself, and I hope you know how much that stays with me."
    },

    {
        id: 13,
        type: "reason",
        title: "The Way You Care For Me",
        message: "I love the way you care for me. Not just in the obvious moments, but in the little ways you pay attention to how I'm feeling and make sure I know that what matters to me matters to you."
    },

    {
        id: 14,
        type: "reason",
        title: "The Way You Treat My Heart",
        message: "I love the way you treat me emotionally. You make my feelings feel important instead of inconvenient. You make my heart feel like something worth being careful with."
    },

    {
        id: 15,
        type: "reason",
        title: "You Listen",
        message: "You don't just wait for your turn to speak. You listen to me. You let me explain things, ramble, cry, overthink, and work through what I'm feeling without making me feel like I'm too much."
    },

    {
        id: 16,
        type: "reason",
        title: "You Make Room For My Feelings",
        message: "I love that there is room for my feelings with you. I don't have to package them perfectly or make them easier to deal with before bringing them to you."
    },

    {
        id: 17,
        type: "reason",
        title: "I Can Exhale Around You",
        message: "There is something about you that makes me feel like I can finally exhale. Like I don't have to be alert or have everything figured out. I can just be Paige for a while."
    },

    {
        id: 18,
        type: "reason",
        title: "You Make Me Feel Chosen",
        message: "I love the ways you make me feel chosen. Not as an option or an afterthought, but as someone you genuinely want beside you."
    },

    {
        id: 19,
        type: "reason",
        title: "You Make Me Feel Wanted",
        message: "There is such a difference between being loved and feeling genuinely wanted in someone's life. With you, I feel both."
    },

    {
        id: 20,
        type: "reason",
        title: "Your Kindness",
        message: "There is so much kindness in you. I wish you could see how much goodness you bring into my life simply by being the person you are."
    },

    {
        id: 21,
        type: "reason",
        title: "Your Strength",
        message: "I see how strong you are, especially on the days when you don't feel strong at all. Strength isn't never struggling. Sometimes it's continuing to show up when everything feels impossibly heavy."
    },

    {
        id: 22,
        type: "reason",
        title: "How Hard You Work",
        message: "I admire how hardworking you are. I know how much you carry and how much effort you put into the things that matter to you. I hope you remember that you're allowed to be proud of yourself too."
    },

    {
        id: 23,
        type: "reason",
        title: "Your Softness",
        message: "Underneath all of your strength is this incredibly soft part of you, and I love that you've trusted me enough to let me see it."
    },

    {
        id: 24,
        type: "reason",
        title: "Your Honesty",
        message: "I love the honesty we've built between us. Even when conversations are difficult or vulnerable, I would rather have something real with you than something easy with anyone else."
    },

    {
        id: 25,
        type: "reason",
        title: "Your Vulnerability",
        message: "I know opening up isn't always easy for you. Every time you let me into another part of your heart, I understand what a gift that trust is."
    },

    {
        id: 26,
        type: "reason",
        title: "You Trust Me",
        message: "Being trusted by you means more to me than I know how to explain. I want your heart to always feel safe in my hands."
    },

    {
        id: 27,
        type: "reason",
        title: "I Trust You",
        message: "You gave me something I wasn't sure I'd ever have: the ability to feel safe enough to trust someone with the most fragile parts of me."
    },

    {
        id: 28,
        type: "reason",
        title: "You Never Make Me Feel Alone",
        message: "Even when you can't fix what I'm going through, you have this way of standing beside me in it. Sometimes that's all I've ever needed."
    },

    {
        id: 29,
        type: "reason",
        title: "You Are On My Team",
        message: "I love knowing that we're on the same team. It isn't me against you or you against me. It's us looking at whatever life throws at us and figuring out what to do next together."
    },

    {
        id: 30,
        type: "reason",
        title: "I Get To Be On Your Team",
        message: "I don't only love having you in my corner. I love getting to stand in yours. I want to be the person cheering for you, comforting you, believing in you, and reminding you who you are when you forget."
    },

    {
        id: 31,
        type: "reason",
        title: "Apex With You",
        message: "I love playing Apex with you. The wins are great, the losses can be ridiculous, but my favorite part has always been getting to spend that time with you."
    },

    {
        id: 32,
        type: "reason",
        title: "Even The Bad Apex Games",
        message: "You know it's serious when someone can make even a terrible night of Apex worth playing. We can get absolutely destroyed and somehow you're still the part of the night I'll remember."
    },

    {
        id: 33,
        type: "reason",
        title: "Palworld With You",
        message: "I love getting lost in Palworld with you, building things, figuring things out, getting distracted, and turning a game into another little world where I get to spend time beside you."
    },

    {
        id: 34,
        type: "reason",
        title: "Watching YouTube Together",
        message: "I love that we don't have to be doing something exciting. We can just watch YouTube together and I'm happy because what I really wanted wasn't the video. It was your company."
    },

    {
        id: 35,
        type: "reason",
        title: "Doing Nothing With You",
        message: "You are one of the only people who can make doing absolutely nothing feel like something I never want to end."
    },

    {
        id: 36,
        type: "reason",
        title: "Our Random Conversations",
        message: "I love how our conversations can start in one universe and end somewhere completely unrelated twenty minutes later. Somehow I always want to know where your brain is going next."
    },

    {
        id: 37,
        type: "reason",
        title: "Our Serious Conversations",
        message: "I love that underneath all the joking and chaos, we can talk about real things. The scary things. The painful things. The future. The past. The things that actually matter."
    },

    {
        id: 38,
        type: "reason",
        title: "Our Silly Conversations",
        message: "And I equally love the conversations that have absolutely no value to society whatsoever. Those might actually be some of my favorites."
    },

    {
        id: 39,
        type: "reason",
        title: "The Way We Can Talk For Hours",
        message: "I love that talking to you rarely feels like something I have to work at. Hours can disappear and somehow I still have one more thing I want to tell you."
    },

    {
        id: 40,
        type: "reason",
        title: "I Never Get Tired Of You",
        message: "I can spend so much time with you and still miss you afterward. Honestly, it's a little ridiculous."
    },

    {
        id: 41,
        type: "reason",
        title: "You Are My Favorite Notification",
        message: "Seeing your name appear on my phone still makes me happy. You're my favorite notification and I don't think that's changing anytime soon."
    },

    {
        id: 42,
        type: "reason",
        title: "You Are The Person I Want To Tell",
        message: "When something funny, exciting, annoying, scary, or completely random happens, you're the person I immediately want to tell."
    },

    {
        id: 43,
        type: "reason",
        title: "You Know The Real Me",
        message: "You've seen pieces of me that aren't polished or easy. Somehow being known by you doesn't make me want to hide. It makes me want to let you know me even more."
    },

    {
        id: 44,
        type: "reason",
        title: "I Can Be Weird With You",
        message: "I love that I don't have to tone myself down around you. I can be weird, emotional, ridiculous, excited, sleepy, annoying, and completely myself."
    },

    {
        id: 45,
        type: "reason",
        title: "You Make Ordinary Things Special",
        message: "You taught me that some of the best parts of loving someone aren't huge moments. Sometimes it's playing a game, watching a video, hearing your voice, or just knowing you're there."
    },

    {
        id: 46,
        type: "reason",
        title: "Your Laugh",
        message: "I love hearing you genuinely laugh. There is something about knowing you're happy in that moment that makes me happy too."
    },

    {
        id: 47,
        type: "reason",
        title: "Your Smile",
        message: "Being able to hear you smile and laugh through the phone is another one of my favorite sounds."
    },

    {
        id: 48,
        type: "reason",
        title: "Your Face",
        message: "This one is very deep and emotionally complex: I think your face is ridiculously handsome. That's it. That's the star."
    },

    {
        id: 49,
        type: "reason",
        title: "Everything About You Is Attractive",
        message: "I tried to pick one thing about you that I find most attractive and unfortunately that plan failed because apparently my answer is just you. All of you."
    },

    {
        id: 50,
        type: "reason",
        title: "Your Heart Is Even More Attractive",
        message: "As attracted to you as I am, somehow the person underneath all of that is even more beautiful to me."
    },

    {
        id: 51,
        type: "reason",
        title: "You Bring Sunshine Into My Life",
        message: "You have brought so much sunshine into places in me that used to feel dark. I wish you could see how much brighter my world became when you became part of it."
    },

    {
        id: 52,
        type: "reason",
        title: "You Bring Me Peace",
        message: "Love isn't only butterflies with you. Sometimes it's peace. It's hearing your voice and feeling something inside me finally settle."
    },

    {
        id: 53,
        type: "reason",
        title: "You Make Me Feel At Home",
        message: "For someone who spent so much of her life feeling like she didn't have somewhere she truly belonged, loving you has changed what the word home means to me."
    },

    {
        id: 54,
        type: "reason",
        title: "You Make Me Want To Heal",
        message: "One of the ways I knew what I felt for you was real was when I noticed myself healing. Loving you made me want to unlearn the things that hurt me and stop carrying old pain into something that feels this precious."
    },

    {
        id: 55,
        type: "reason",
        title: "You Make Me Want To Grow",
        message: "You don't make me feel like I need to become someone else. You make me want to become a healthier version of myself because I want to love you as gently and fully as I can."
    },

    {
        id: 56,
        type: "reason",
        title: "You Make Me Want To Break Old Patterns",
        message: "I started noticing old habits and things I wanted to change because for the first time, I had something that felt too beautiful to let old wounds control."
    },

    {
        id: 57,
        type: "reason",
        title: "You Never Asked Me To Heal For You",
        message: "Maybe one of the most beautiful parts is that you never demanded any of that growth from me. Feeling safe with you simply gave me room to want it for myself."
    },

    {
        id: 58,
        type: "reason",
        title: "You Showed Me Love Can Feel Different",
        message: "You have shown me that love doesn't have to feel like constantly waiting for something to go wrong. It can feel soft. It can feel safe. It can feel like somewhere to rest."
    },

    {
        id: 59,
        type: "reason",
        title: "I Don't Have To Earn Your Care",
        message: "You care about me when I'm doing well and when I'm falling apart. You make me feel like I don't have to perform or be perfect to deserve tenderness."
    },

    {
        id: 60,
        type: "reason",
        title: "You Love The Messy Parts Too",
        message: "I love that I can bring you the parts of myself I'm still figuring out. You don't only love the easiest version of me."
    },

    {
        id: 61,
        type: "reason",
        title: "You Handle My Heart Gently",
        message: "You once became someone I was terrified to lose, but somehow you also became the person I feel safest trusting with that fear."
    },

    {
        id: 62,
        type: "reason",
        title: "You Would Rather Do Anything Than Hurt Me",
        message: "When you tell me you'd rather do anything than hurt me, I believe the heart behind those words. I see how much you care about protecting what we have."
    },

    {
        id: 63,
        type: "reason",
        title: "I Want To Protect Your Heart Too",
        message: "The more you've trusted me with your heart, the more precious it has become to me. I never want your vulnerability with me to become something you regret."
    },

    {
        id: 64,
        type: "reason",
        title: "Your Happiness Matters To Me",
        message: "Your happiness became important to me in a way that goes beyond what you can give me. I want good things for you simply because you're you."
    },

    {
        id: 65,
        type: "reason",
        title: "Even If It Wasn't Me",
        message: "One of the scariest ways I knew I loved you was realizing I wanted what was best for you even if somehow that wasn't me. I wanted you safe, happy, loved, and surrounded by everything you deserve. I'm just incredibly grateful that I get to be the person standing beside you."
    },

    {
        id: 66,
        type: "reason",
        title: "I Choose You",
        message: "I choose you on the exciting days and the completely ordinary ones. On the easy days and the heavy ones. I don't only want the shiny pieces of a life with you. I want the real thing."
    },

    {
        id: 67,
        type: "reason",
        title: "I Love Every Version Of You",
        message: "I love happy you, sleepy you, excited you, stressed you, singing-to-yourself you, gaming you, overthinking you, serious you, and all the versions of you I haven't even met yet."
    },

    {
        id: 68,
        type: "reason",
        title: "You Don't Have To Be Strong With Me",
        message: "You never have to perform strength for me. You can have days where you don't know what to do next. You can be tired. You can need someone. None of that makes me love you less."
    },

    {
        id: 69,
        type: "reason",
        title: "You Are More Than What You Provide",
        message: "I don't love you because of what you can do for me. I don't love you because of what you accomplish or provide. If all of that disappeared tomorrow, you would still be the person I love."
    },

    {
        id: 70,
        type: "reason",
        title: "You Are Enough On The Hard Days",
        message: "On the days when you feel behind, overwhelmed, exhausted, or like you should be doing more, I hope you remember this: you don't have to accomplish anything today to still be worthy of love."
    },

    {
        id: 71,
        type: "reason",
        title: "I Wish You Could See Yourself Through My Eyes",
        message: "I wish I could lend you my eyes for five minutes. You would see someone incredibly strong, hardworking, kind, beautiful, loving, and deserving of so much more grace than he gives himself."
    },

    {
        id: 72,
        type: "reason",
        title: "I See The Good In You",
        message: "I see so much goodness in you. Even when you're frustrated with yourself or focused on everything you think you're doing wrong, I hope you know that I still see it."
    },

    {
        id: 73,
        type: "reason",
        title: "You Deserve Good Things",
        message: "I hope life gives you so many reasons to smile. Not because you've suffered enough to earn them, but because you are simply deserving of good things."
    },

    {
        id: 74,
        type: "reason",
        title: "You Deserve Rest",
        message: "You don't have to wait until everything is fixed to rest. The world can stay unfinished for a little while. You are allowed to put it down."
    },

    {
        id: 75,
        type: "reason",
        title: "You Don't Have To Carry It Alone",
        message: "I know your instinct might be to carry everything yourself. But if it gets too heavy, give me a corner of it. I may not be able to fix everything, but I can sit beside you while we figure out what comes next."
    },

    {
        id: 76,
        type: "reason",
        title: "Stay Love",
        message: "There are songs that stop being just songs because they become attached to a person, a feeling, a chapter of your life. Stay Love will always carry a little piece of us for me."
    },

    {
        id: 77,
        type: "reason",
        title: "Daylily",
        message: "Daylily will always feel different because it belongs somewhere inside our story now. I love that we have music that can make me think of you before I've even realized I'm smiling."
    },

    {
        id: 78,
        type: "reason",
        title: "Dusk",
        message: "Dusk is another little piece of us I get to carry around. The fact that you said this song makes me think of you will always have me in tears in the best way possible"
    },

    {
        id: 79,
        type: "reason",
        title: "Cyberpunk",
        message: "I love that even something as simple as a show can become part of our little collection of things that feel like us. Cyberpunk will always have you attached to it somewhere in my brain."
    },

    {
        id: 80,
        type: "reason",
        title: "Tokyo Ghoul",
        message: "Tokyo Ghoul gets a star too, because apparently loving someone means slowly building an entire library of games, shows, songs, jokes, and random things that will forever remind you of them."
    },

    {
        id: 81,
        type: "reason",
        title: "I Want The Exciting Days",
        message: "I want adventures with you. I want new places, ridiculous stories, big milestones, celebrations, and memories we'll talk about years later."
    },

    {
        id: 82,
        type: "reason",
        title: "But I Want The Ordinary Days More",
        message: "As much as I want the big moments, what I really dream about is having thousands of ordinary days with you. Waking up, making dinner, playing games, being tired, laughing about nothing, and getting to call that our life."
    },

    {
        id: 83,
        type: "reason",
        title: "Slow Dancing In The Kitchen",
        message: "I can't wait for the kind of life where we're in our kitchen and somehow dinner turns into me wrapping my arms around you and us slow dancing for absolutely no reason."
    },

    {
        id: 84,
        type: "reason",
        title: "Watching You Cook Dinner",
        message: "I picture myself sitting nearby while you cook dinner, probably distracting you, talking about absolutely everything, laughing together, and thinking about how unbelievably lucky I am that this is home."
    },

    {
        id: 85,
        type: "reason",
        title: "Curling Up Beside You",
        message: "I want the days when everything feels too heavy and we decide the world can wait. I want to curl up beside you, shut everything else out for a while, and just exist together."
    },

    {
        id: 86,
        type: "reason",
        title: "Falling Asleep Beside You",
        message: "I look forward to the ordinary intimacy of ending the day beside you. No big plans. No huge moment. Just knowing that at the end of everything, I get to come home to you."
    },

    {
        id: 87,
        type: "reason",
        title: "Waking Up Beside You",
        message: "I want sleepy mornings, messy hair, half-awake conversations, and all the completely unglamorous little moments that come with building an actual life together."
    },

    {
        id: 88,
        type: "reason",
        title: "Coming Home To You",
        message: "There is something inside me that aches in the sweetest way when I imagine finally being able to say I'm coming home and know that home means where you are."
    },

    {
        id: 89,
        type: "reason",
        title: "A Life Where We Can Shut The World Out",
        message: "I want us to have a place where, when everything outside gets too loud, we can close the door and let the world stay out there for a while. Just you, me, and the little life we've built."
    },

    {
        id: 90,
        type: "reason",
        title: "I Want To Keep Learning You",
        message: "I don't ever want to reach a point where I think I know everything about you. I want years of discovering new little things, new versions of you, new dreams, new fears, and new reasons to love you."
    },

    {
        id: 91,
        type: "reason",
        title: "I Want To Grow With You",
        message: "Neither of us will be exactly the same person years from now. I don't want us frozen in this moment. I want the privilege of meeting every version of you that comes next and growing beside you."
    },

    {
        id: 92,
        type: "reason",
        title: "You Changed What Love Means To Me",
        message: "I used to think love was mostly about how intensely you felt something. You taught me that love can also be safety, patience, friendship, laughter, honesty, choosing each other, and having somewhere soft to land."
    },

    {
        id: 93,
        type: "reason",
        title: "I Knew When I Started Healing",
        message: "I think part of how I knew I loved you was when I looked at myself and realized I was healing. I wanted to fix old toxic habits and become healthier, not because you asked me to change, but because loving you made me want to protect what we have and love you as gently as you love me."
    },

    {
        id: 94,
        type: "reason",
        title: "Because You Are You",
        message: "After 93 reasons, this might be the most important one. I don't need a reason to love you. I love you when you're strong and when you're exhausted, when you're laughing and when you're overwhelmed, when life is beautiful and when it's a mess. I love you because somewhere along the way, you became you to me—and there is nobody else I would rather have found."
    },


        /* ==========================================
       95–99: OUR MEMORIES
    ========================================== */

    {
        id: 95,
        type: "memory",
        title: "The First Time We Played Together",
        message: "March 1st was the first time we really talked and played Apex together. I had no idea that something as simple as playing a game with someone I met through a Twitch chat was going to become the beginning of something this important. And then afterward you texted me to tell me you really liked my voice. I still smile thinking about it.",
        date: "March 1, 2026"
    },

    {
        id: 96,
        type: "memory",
        title: "Your Star",
        message: "The night I bought you a star with your name on it will always stay with me. I'll never forget your reaction or the deep conversation we had afterward. Something about that night felt like a milestone for us, even if I couldn't fully explain why at the time. It felt like we had stepped into something deeper together.",
        date: "April 15, 2026"
    },

    {
        id: 97,
        type: "memory",
        title: "The Night You Let Me Talk",
        message: "This was the night I realized my feelings for you had become something really strong. You gave me space to talk about my brother, to cry, to remember him, and to get out everything I needed to say. You listened. You stayed. You talked with me about him instead of trying to rush me through my grief. I will never forget how safe you made me feel in one of the most vulnerable parts of my heart.",
        date: "April 16, 2026"
    },

    {
        id: 98,
        type: "memory",
        title: "The Day I Knew I Loved You",
        message: "You had already wished me happy birthday several times, but then I woke up to your message: \"thank you for being the light in my dark world my sweet angel.\" And something inside me just knew. I knew I loved you. I knew you weren't someone I wanted temporarily. I looked at those words and realized that you were the person I wanted for the rest of my life.",
        date: "May 27, 2026"
    },

    {
        id: 99,
        type: "memory",
        title: "When You Asked Me To Come Home",
        message: "Maybe this date looks small next to some of the others, but it isn't small to me. This was the day you asked me to move in. After spending so much of my life feeling like I didn't have somewhere I truly belonged, suddenly I could picture a home. A place where I could come back to you, feel safe, and finally have somewhere to rest my heart.",
        date: "June 13, 2026"
    },



    /* ==========================================
       100: MY WISH FOR US
    ========================================== */

    {
        id: 100,
        type: "special",
        title: "My Wish For Us",
        message: "My wish for us isn't a perfect life. I don't need every day to be easy, and I don't expect us to never struggle. I just hope that through every version of life we keep turning toward each other. I hope we keep saying \"WE will figure it out.\" I hope your heart always feels safe with me and mine always feels safe with you. I hope there are thousands of nights curled up together when the world feels too heavy, slow dances in the kitchen, dinners where I distract you while you're cooking, games that go horribly wrong, songs sung for no reason, conversations that somehow become five conversations at once, sleepy mornings, ridiculous laughter, and more ordinary days together than we could ever count. I hope years from now we look back at these two people who met through someone's Twitch chat and wish we could tell them everything that was waiting for them. But more than anything, my wish is simple: wherever life takes us, I hope we keep being each other's place to rest our hearts. I love you. In this life, through every version of us, I choose you."
    }
];
/* ==========================================
   STAR POSITIONS
   Carefully scattered around protected areas
========================================== */

/* ==========================================
   STAR POSITIONS
   Automatically generates positions
   for every star
========================================== */

/* ==========================================
   NATURAL STAR POSITIONS
   Scattered across the full universe
========================================== */

function createStarPositions(totalStars) {
    const positions = [];

    const minDistance = 6;

    /*
        Protected zones:
        x1, x2, y1, y2 are percentages
        of the star field.
    */

    const protectedZones = [
        // Main hero text
        {
            x1: 26,
            x2: 74,
            y1: 0,
            y2: 18
        },

        // Moon area
        {
            x1: 78,
            x2: 100,
            y1: 0,
            y2: 17
        },

        // Bottom-left legend
        {
            x1: 0,
            x2: 24,
            y1: 82,
            y2: 100
        },

        // Bottom-center footer
        {
            x1: 30,
            x2: 70,
            y1: 91,
            y2: 100
        },

        // Bottom-right music button
        {
            x1: 78,
            x2: 100,
            y1: 91,
            y2: 100
        }
    ];


    function pseudoRandom(seed) {
        const value =
            Math.sin(seed * 12.9898 + 78.233) * 43758.5453;

        return value - Math.floor(value);
    }


    function isInsideProtectedZone(x, y) {
        return protectedZones.some((zone) => {
            return (
                x >= zone.x1 &&
                x <= zone.x2 &&
                y >= zone.y1 &&
                y <= zone.y2
            );
        });
    }


    function isTooClose(x, y) {
        return positions.some((position) => {

            const dx = x - position.x;
            const dy = y - position.y;

            const distance =
                Math.sqrt(dx * dx + dy * dy);

            return distance < minDistance;
        });
    }


    for (let i = 0; i < totalStars; i++) {

        let attempts = 0;
        let positionFound = false;

        while (!positionFound && attempts < 500) {

            const seed = (i + 1) * 1000 + attempts;

            const x =
                3 + pseudoRandom(seed) * 94;

            const y =
                2 + pseudoRandom(seed + 91) * 95;

            const protectedArea =
                isInsideProtectedZone(x, y);

            const tooClose =
                isTooClose(x, y);

            if (!protectedArea && !tooClose) {

                positions.push({
                    x,
                    y
                });

                positionFound = true;
            }

            attempts++;
        }


        /*
            Fallback in case the page gets
            extremely crowded later.
        */

        if (!positionFound) {

            positions.push({
                x: 5 + pseudoRandom(i + 5000) * 90,
                y: 20 + pseudoRandom(i + 8000) * 70
            });
        }
    }


    return positions;
}


const starPositions =
    createStarPositions(stars.length);


/* ==========================================
   PAGE ELEMENTS
========================================== */

const starField = document.getElementById("stars");
const discoveredCount = document.getElementById("discoveredCount");
const starCounter = document.querySelector(".star-counter");

const starModal = document.getElementById("starModal");
const closeStarModalButton = document.getElementById("closeStarModal");

const modalNumber = document.getElementById("modalNumber");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalMessage = document.getElementById("modalMessage");

const moonButton = document.getElementById("moonButton");
const moonModal = document.getElementById("moonModal");
const closeMoonModalButton = document.getElementById("closeMoonModal");

const musicButton = document.getElementById("musicButton");
const ourSong = document.getElementById("ourSong");


/* ==========================================
   STORAGE
========================================== */

const STORAGE_KEY = "for-you-discovered-stars";

let discoveredStars = loadDiscoveredStars();


function loadDiscoveredStars() {
    const savedValue = localStorage.getItem(STORAGE_KEY);

    if (!savedValue) {
        return [];
    }

    try {
        const parsedValue = JSON.parse(savedValue);

        if (!Array.isArray(parsedValue)) {
            return [];
        }

    return parsedValue.filter((id) => {
    return Number.isInteger(id) && id >= 1 && id <= stars.length;
});

    } catch (error) {
        console.error("Could not load discovered stars:", error);
        return [];
    }
}


function saveDiscoveredStars() {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(discoveredStars)
    );
}


/* ==========================================
   CREATE ALL 29 STARS
========================================== */

function renderStars() {
    if (!starField) {
        console.error("The star field could not be found.");
        return;
    }

    starField.innerHTML = "";

    stars.forEach((star, index) => {
        const position = starPositions[index];

        if (!position) {
            return;
        }

        const starButton = document.createElement("button");

        starButton.type = "button";
        starButton.className = "interactive-star";
        starButton.dataset.starId = star.id;

        starButton.style.left = `${position.x}%`;
        starButton.style.top = `${position.y}%`;

        starButton.style.setProperty(
            "--twinkle-delay",
            `${(index % 9) * 0.28}s`
        );

        starButton.style.setProperty(
    "--twinkle-duration",
    `${2.4 + ((index * 7) % 18) / 10}s`
);

        if (star.type === "memory") {
            starButton.classList.add("memory");
        }

        if (star.type === "special") {
            starButton.classList.add("special");
        }

        if (discoveredStars.includes(star.id)) {
            starButton.classList.add("discovered");
        }

    

  starButton.innerHTML = `
    <span
        class="star-symbol"
        aria-hidden="true"
    >
        ✦
    </span>

    <span class="star-number">
        ${star.id}
    </span>
`;
        starButton.setAttribute(
            "aria-label",
            `Open star ${star.id}: ${star.title}`
        );

        starButton.addEventListener("click", () => {
            openStar(star, starButton);
        });

        starField.appendChild(starButton);
    });

    updateDiscoveredCounter();
}


/* ==========================================
   OPEN STAR
========================================== */

function openStar(star, starButton) {
    if (
        !starModal ||
        !modalNumber ||
        !modalTitle ||
        !modalMessage
    ) {
        return;
    }

  modalNumber.textContent = `Star ${star.id}`;
modalTitle.textContent = star.title;
modalMessage.textContent = star.message;

if (modalDate) {
    if (star.date) {
        modalDate.textContent = star.date;
        modalDate.hidden = false;
    } else {
        modalDate.textContent = "";
        modalDate.hidden = true;
    }
}

    starModal.hidden = false;
    document.body.classList.add("modal-open");

    if (!discoveredStars.includes(star.id)) {
        discoveredStars.push(star.id);

        discoveredStars.sort((a, b) => a - b);

        saveDiscoveredStars();

        starButton.classList.add("discovered");

        updateDiscoveredCounter();
    }
}


/* ==========================================
   COUNTER
========================================== */

function updateDiscoveredCounter() {
    if (discoveredCount) {
        discoveredCount.textContent = discoveredStars.length;
    }

    if (!starCounter) {
        return;
    }

    if (discoveredStars.length === stars.length) {
        starCounter.classList.add("all-discovered");

 starCounter.innerHTML = `
    <i class="fa-solid fa-sparkles"></i>
    <span>All ${stars.length} stars discovered</span>
`;
    }
}


/* ==========================================
   CLOSE STAR MODAL
========================================== */

function closeStarModal() {
    if (!starModal) {
        return;
    }

    starModal.hidden = true;
    document.body.classList.remove("modal-open");
}


if (closeStarModalButton) {
    closeStarModalButton.addEventListener(
        "click",
        closeStarModal
    );
}


if (starModal) {
    starModal.addEventListener("click", (event) => {
        if (event.target === starModal) {
            closeStarModal();
        }
    });
}


/* ==========================================
   MOON LETTER
========================================== */

function openMoonModal() {
    if (!moonModal) {
        return;
    }

    moonModal.hidden = false;
    document.body.classList.add("modal-open");
}


function closeMoonModal() {
    if (!moonModal) {
        return;
    }

    moonModal.hidden = true;
    document.body.classList.remove("modal-open");
}


if (moonButton) {
    moonButton.addEventListener(
        "click",
        openMoonModal
    );
}


if (closeMoonModalButton) {
    closeMoonModalButton.addEventListener(
        "click",
        closeMoonModal
    );
}


if (moonModal) {
    moonModal.addEventListener("click", (event) => {
        if (event.target === moonModal) {
            closeMoonModal();
        }
    });
}


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    if (starModal && !starModal.hidden) {
        closeStarModal();
    }

    if (moonModal && !moonModal.hidden) {
        closeMoonModal();
    }
});


/* ==========================================
   MUSIC
========================================== */

let musicIsPlaying = false;


function showPlayButton() {
    if (!musicButton) {
        return;
    }

    musicButton.classList.remove("playing");

    musicButton.innerHTML = `
        <i class="fa-solid fa-music"></i>
        <span>Play our song</span>
    `;
}


function showPauseButton() {
    if (!musicButton) {
        return;
    }

    musicButton.classList.add("playing");

    musicButton.innerHTML = `
        <i class="fa-solid fa-pause"></i>
        <span>Pause our song</span>
    `;
}


if (musicButton && ourSong) {
    musicButton.addEventListener("click", async () => {
        try {
            if (musicIsPlaying) {
                ourSong.pause();
                musicIsPlaying = false;
                showPlayButton();
                return;
            }

            await ourSong.play();

            musicIsPlaying = true;
            showPauseButton();
        } catch (error) {
            console.error("Our song could not play:", error);

            alert(
                "Add your song to the audio folder and name it our-song.mp3."
            );
        }
    });


    ourSong.addEventListener("pause", () => {
        musicIsPlaying = false;
        showPlayButton();
    });


    ourSong.addEventListener("play", () => {
        musicIsPlaying = true;
        showPauseButton();
    });
}


/* ==========================================
   START WEBSITE
========================================== */

renderStars();