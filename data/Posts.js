import Images from "../utils/Images";

export default Posts = [
  {
    profile_picture: Images.USERS.USER1,
    name: "Sid the Sloth",
    title: "Tech Enthusiast 💻 | Full-Stack Web Developer ☕ | Freelancer 🌍",
    timeAgo: 20, // hrs
    timeDuration: "h",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd & handle the follow button with this param only.
    content: "In the last two days, I was working on the user authentication of the app. I'm learning a lot along the way, Supabase is a great BAAS, we could set up things quite fast with it in React. Also, today I integrated SendGrid with Supabase so we can have more control over the emails. 📧 I looked at other SMTPs like Resend, MailerSend, and AWS SES but SendGrid looked quite easy to set up and didn't require a domain so for now it's great for testing purposes.If you know any other SMTPs then let me know, maybe in my future projects I will use something different. 💡",
    hasImage: false, // hasImage or not
    shares: 0, // share count
    comments: 7,
    likes: 21, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER2,
    name: "Manny the Mommoth",
    title: "Software Engineer -Building Products to Drive Business Success || JAVA || SQL || AWS",
    timeAgo: 2, // hrs or week or month
    timeDuration: "w",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    content: "The Elephant in the Room",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST1,
    shares: 0, // share count
    comments: 1,
    likes: 11, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER3,
    name: "Diego the Sabertooth",
    title: "Frontend Developer",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    timeAgo: 1, // hrs
    timeDuration: "mo",
    content: "Running after the bug, I can't do it, I am tired",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST2,
    shares: 0, // share count
    comments: 6,
    likes: 25, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER4,
    name: "The T-Rex Mom",
    connection: '1st', // which connection it is - 1st, 2nd, 3rd
    title: "CEO, Jungle Pvt. Ltd.",
    timeAgo: 3, // hrs
    timeDuration: "w",
    content: "Anyone seen these three",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST3,
    shares: 0, // share count
    comments: 0,
    likes: 6, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER5,
    name: "Rudy the Spinosaurus",
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    title: "FRONT END Dev Html || css || JavaScript || MOBILE Dev || React-Native",
    timeAgo: 1, // hrs
    timeDuration: "mo",
    content: "Today, I lost my baby teeth",
    hasImage: false, // hasImage or not
    shares: 0, // share count
    comments: 0,
    likes: 22, // like count
    isLiked: true, // is liked by current user or not
  },
  {
    profile_picture: Images.USERS.USER6,
    name: "Buck Wild",
    connection: '2nd', // which connection it is - 1st, 2nd, 3rd
    title: "CSE Aspirant | Aspiring Buddha | Political Strategist | Election Campaign Manager | Teacher | Content Writer | MA History, IGNOU | BA History ,DU",
    timeAgo: 1, // hrs
    timeDuration: "w",
    content: "Found a tooth today",
    hasImage: true, // hasImage or not
    postImage: Images.POSTS.POST5,
    shares: 0, // share count
    comments: 0,
    likes: 5, // like count
    isLiked: true, // is liked by current user or not
  },
]