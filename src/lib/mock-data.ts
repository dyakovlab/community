import { Post, Event } from '@/types';

export const mockPosts: Post[] = [
  {
    id: '1',
    title: 'Finding Light in Dark Times: A Journey of Hope',
    excerpt: 'Discover how small acts of kindness can transform your perspective and bring hope into your daily life.',
    content: `In moments of darkness, it's easy to feel alone and overwhelmed. But throughout my journey, I've learned that hope isn't just a feeling—it's a choice we make every single day.

## The Power of Community

When we come together as a community, we create a support system that can weather any storm. Every person here has a story, a struggle, and a strength that can inspire others.

## Small Steps Forward

Recovery and growth don't happen overnight. They happen in small, consistent steps. Whether it's reaching out to a friend, taking a walk in nature, or simply getting out of bed—every step counts.

## You Are Not Alone

Remember, the Hope community is here for you. We believe in your strength, even when you don't see it yourself. Together, we can find the light.`,
    author: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=1200&h=600&fit=crop',
    date: '2026-01-20',
    readTime: '5 min read',
    featured: true
  },
  {
    id: '2',
    title: 'Building Resilience Through Connection',
    excerpt: 'Learn practical strategies for building emotional resilience through meaningful connections with others.',
    content: `Resilience is not about being unbreakable—it's about learning how to bend without breaking. And one of the most powerful tools we have is connection.

## Why Connection Matters

Human beings are wired for connection. Studies show that strong social bonds can significantly improve mental health and help us navigate difficult times.

## Practical Steps

1. Start small - reach out to one person today
2. Join community events
3. Share your story when you're ready
4. Listen with empathy to others

## The Ripple Effect

When you connect with one person, you create a ripple effect. Your vulnerability gives others permission to be vulnerable too, creating a chain of support and understanding.`,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
    date: '2026-01-18',
    readTime: '7 min read',
    featured: true
  },
  {
    id: '3',
    title: 'Mindfulness Practices for Daily Life',
    excerpt: 'Simple mindfulness techniques you can incorporate into your routine to reduce stress and find peace.',
    content: `Mindfulness doesn't require hours of meditation or special equipment. It's about being present in the moment, wherever you are.

## What is Mindfulness?

Mindfulness is the practice of paying attention to the present moment without judgment. It's a skill that can be developed over time.

## Simple Practices

- **Breathing exercises**: Take 5 deep breaths when feeling overwhelmed
- **Body scan**: Notice sensations in your body without trying to change them
- **Mindful walking**: Pay attention to each step you take
- **Gratitude moments**: Notice three things you're grateful for each day

## The Benefits

Regular mindfulness practice has been shown to reduce anxiety, improve focus, and increase overall well-being. Start with just 2 minutes a day.`,
    author: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop',
    date: '2026-01-15',
    readTime: '6 min read',
    featured: true
  },
  {
    id: '4',
    title: 'Overcoming Social Anxiety Together',
    excerpt: 'Practical advice and personal experiences on managing social anxiety in a supportive environment.',
    content: `Social anxiety can feel like an insurmountable barrier, but with understanding and support, we can learn to navigate social situations with greater ease.

## Understanding Social Anxiety

Social anxiety is more than just shyness. It's an intense fear of being judged or embarrassed in social situations. But understanding it is the first step to managing it.

## Strategies That Help

1. Start with smaller gatherings
2. Practice self-compassion
3. Challenge negative thoughts
4. Gradually expose yourself to social situations
5. Remember: everyone feels awkward sometimes

## The Hope Community Difference

Our events are designed to be welcoming and judgment-free. We understand that taking the first step is often the hardest, and we celebrate your courage in showing up.`,
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&h=600&fit=crop',
    date: '2026-01-12',
    readTime: '8 min read',
    featured: false
  },
  {
    id: '5',
    title: 'The Healing Power of Nature',
    excerpt: 'Explore how spending time in nature can positively impact your mental health and overall well-being.',
    content: `There's something deeply healing about connecting with nature. Whether it's a walk in the park or sitting under a tree, nature offers a sanctuary for our minds.

## Science-Backed Benefits

Research shows that spending time in nature can:
- Reduce stress hormones
- Lower blood pressure
- Improve mood and focus
- Boost immune system function

## Getting Started

You don't need to hike mountains or camp in forests. Start with:
- 10-minute walks in a local park
- Sitting outside during lunch
- Bringing plants into your home
- Opening windows to let in fresh air

## Nature in Our Community

Join our weekly nature walks where we combine gentle exercise with mindful appreciation of our natural surroundings.`,
    author: {
      name: 'Jordan Lee',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
    },
    category: 'Wellness',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=600&fit=crop',
    date: '2026-01-10',
    readTime: '5 min read',
    featured: true
  },
  {
    id: '6',
    title: 'Creating Healthy Boundaries',
    excerpt: 'Learn how to set and maintain healthy boundaries to protect your mental health and relationships.',
    content: `Setting boundaries is an act of self-love and respect. It's about honoring your needs while maintaining meaningful relationships.

## Why Boundaries Matter

Boundaries help us:
- Protect our energy
- Maintain healthy relationships
- Reduce resentment and burnout
- Honor our values and needs

## Types of Boundaries

1. **Physical boundaries**: Personal space and touch
2. **Emotional boundaries**: Feelings and emotional energy
3. **Time boundaries**: How you spend your time
4. **Mental boundaries**: Thoughts, values, and opinions

## How to Set Boundaries

- Be clear and direct
- Start with small boundaries
- Use "I" statements
- Don't apologize for your needs
- Be consistent

Remember: boundaries are not walls—they're bridges to healthier relationships.`,
    author: {
      name: 'Sophia Martinez',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
    },
    category: 'Personal Growth',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&h=600&fit=crop',
    date: '2026-01-08',
    readTime: '7 min read',
    featured: false
  },
  {
    id: '7',
    title: 'Finding Purpose Through Service',
    excerpt: 'Discover how helping others can bring meaning and fulfillment to your own life.',
    content: `One of the most powerful ways to find hope and purpose is through helping others. Service to our community creates a positive cycle of healing and growth.

## The Science of Helping

Studies show that helping others:
- Releases feel-good hormones
- Reduces symptoms of depression
- Increases life satisfaction
- Creates a sense of purpose

## Ways to Serve

You don't need to make grand gestures. Small acts of service include:
- Listening without judgment
- Sharing your story
- Volunteering at community events
- Offering encouragement
- Being present for someone in need

## Join Our Mission

Hope Community thrives because of people like you who choose to show up and support one another. Your presence matters.`,
    author: {
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop'
    },
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=600&fit=crop',
    date: '2026-01-05',
    readTime: '6 min read',
    featured: false
  },
  {
    id: '8',
    title: 'Managing Stress in Uncertain Times',
    excerpt: 'Effective strategies for coping with stress and uncertainty in today\'s fast-paced world.',
    content: `Uncertainty is a natural part of life, but that doesn't make it easy to handle. Here are some evidence-based strategies for managing stress during challenging times.

## Acknowledge Your Feelings

It's okay to not be okay. Acknowledging your stress and anxiety is the first step in addressing it.

## Practical Coping Strategies

1. **Routine and structure**: Create daily rituals
2. **Limit news consumption**: Stay informed but not overwhelmed
3. **Physical activity**: Move your body regularly
4. **Connection**: Reach out to supportive people
5. **Professional help**: Therapy is a sign of strength

## Build Your Toolkit

Everyone's stress management toolkit looks different. Experiment with various techniques to find what works for you.`,
    author: {
      name: 'Rachel Green',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop'
    },
    category: 'Mental Health',
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1200&h=600&fit=crop',
    date: '2026-01-03',
    readTime: '8 min read',
    featured: false
  }
];

export const mockEvents: Event[] = [
  {
    id: '1',
    title: 'Weekly Support Circle',
    description: 'A safe space to share experiences, listen, and support one another in our mental health journeys.',
    content: `Join us for our weekly support circle where we gather as a community to share, listen, and heal together.

## What to Expect

This is a peer-led support group where everyone has the opportunity to share their experiences in a judgment-free environment. No advice-giving—just compassionate listening and mutual support.

## Format

- Welcome and introductions (10 mins)
- Check-in circle (30 mins)
- Topic discussion (30 mins)
- Closing reflection (10 mins)

## Guidelines

- Everything shared stays in the room
- Speak from your own experience
- Listen without judgment
- You can always pass if you prefer to listen
- Respect everyone's time and space

## Who Should Attend

This circle is open to anyone seeking connection and support. Whether you're going through a difficult time or simply want to be part of a supportive community, you're welcome here.

No registration required—just show up. We look forward to seeing you there.`,
    date: '2026-01-25',
    time: '18:00 - 19:30',
    location: 'Hope Community Center, Room 201',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&h=600&fit=crop',
    category: 'Support Group',
    capacity: 20,
    registered: 12,
    organizer: {
      name: 'Sarah Mitchell',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Mindful Morning Walk',
    description: 'Start your day with a gentle nature walk focused on mindfulness and connection with nature.',
    content: `Begin your morning with intention and peace. Our mindful morning walk combines gentle exercise with mindfulness practices to set a positive tone for your day.

## What is a Mindful Walk?

A mindful walk is a walking meditation where we pay attention to our surroundings, our breath, and the present moment. It's a moving meditation that grounds us in the here and now.

## The Route

We'll walk through Riverside Park, a beautiful natural setting that offers peaceful trails, scenic views, and a calming atmosphere. The pace is gentle and suitable for all fitness levels.

## What to Bring

- Comfortable walking shoes
- Water bottle
- Weather-appropriate clothing
- Open mind and heart

## Benefits

- Reduces stress and anxiety
- Improves mood
- Connects you with nature
- Builds community
- Gentle physical exercise

## Meeting Point

We'll meet at the main entrance of Riverside Park near the fountain. Look for the group with green Hope Community t-shirts.

All fitness levels welcome. Feel free to walk at your own pace within the group.`,
    date: '2026-01-26',
    time: '08:00 - 09:00',
    location: 'Riverside Park Main Entrance',
    image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1200&h=600&fit=crop',
    category: 'Wellness',
    capacity: 30,
    registered: 18,
    organizer: {
      name: 'Emma Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    }
  },
  {
    id: '3',
    title: 'Art Therapy Workshop',
    description: 'Express yourself through creative art activities in a supportive, non-judgmental environment.',
    content: `Discover the therapeutic power of creative expression in our art therapy workshop. No artistic experience necessary—just bring your willingness to explore and express.

## About Art Therapy

Art therapy is a form of expression that allows us to explore emotions, reduce stress, and process experiences through creative activities. It's not about creating perfect art—it's about the process of creation.

## Workshop Activities

- Guided painting session
- Collage creation
- Intuitive drawing
- Group sharing (optional)

## What's Provided

All art supplies are provided including:
- Canvas and paper
- Paints, markers, and colored pencils
- Magazines for collage
- Clay and sculpting tools

## Benefits

- Process emotions in a healthy way
- Reduce stress and anxiety
- Boost self-esteem
- Connect with others creatively
- Discover new coping tools

## Facilitated By

Our workshop is led by certified art therapist Linda Chen, who has 10 years of experience helping people heal through creative expression.

Remember: There's no right or wrong way to create. This is a judgment-free zone where all expressions are valid and valued.`,
    date: '2026-01-28',
    time: '14:00 - 16:00',
    location: 'Hope Community Center, Art Studio',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1200&h=600&fit=crop',
    category: 'Workshop',
    capacity: 15,
    registered: 10,
    organizer: {
      name: 'Linda Chen',
      avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop'
    }
  },
  {
    id: '4',
    title: 'Community Potluck Dinner',
    description: 'Share a meal and build connections in a warm, welcoming atmosphere.',
    content: `Food has a way of bringing people together. Join us for our monthly community potluck dinner where we share meals, stories, and laughter.

## About the Event

This is a casual gathering where everyone brings a dish to share (or just brings themselves if that's easier). It's a time to connect, relax, and enjoy good food with good people.

## How It Works

- Bring a dish if you can (homemade or store-bought—both are welcome!)
- Can't cook? No problem—just bring yourself
- We'll have some basic food and drinks available
- Share a meal together at communal tables
- Optional: Share about your dish or a story

## What to Expect

A relaxed, welcoming atmosphere where you can:
- Meet new friends
- Reconnect with familiar faces
- Enjoy diverse cuisines
- Share stories and laughter
- Feel part of a community

## Dietary Considerations

Please label your dish with ingredients and common allergens. We strive to have options for various dietary needs.

## Bring the Family

This is a family-friendly event. Children are absolutely welcome!

Come hungry, leave happy. Everyone belongs at our table.`,
    date: '2026-01-30',
    time: '18:00 - 20:00',
    location: 'Hope Community Center, Main Hall',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop',
    category: 'Social',
    capacity: 50,
    registered: 32,
    organizer: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    }
  },
  {
    id: '5',
    title: 'Mental Health First Aid Training',
    description: 'Learn how to recognize and respond to signs of mental health challenges in yourself and others.',
    content: `Become equipped with the knowledge and skills to help someone experiencing a mental health crisis or challenge. This certified training can save lives.

## Course Overview

Mental Health First Aid teaches you how to identify, understand, and respond to signs of mental illness and substance use disorders. This 6-hour course gives you the skills you need to reach out and provide initial support.

## What You'll Learn

- Common signs and symptoms of mental health challenges
- How to approach someone you're concerned about
- Active listening techniques
- How to give reassurance and information
- When and how to seek professional help
- Resources available in our community

## Certification

Upon completion, you'll receive a certificate from the National Council for Mental Health Wellbeing, valid for 3 years.

## Who Should Attend

This training is valuable for:
- Anyone who wants to help others
- Family members and friends
- Community leaders
- Healthcare workers
- Teachers and students
- Everyone!

## Course Format

- Interactive presentations
- Videos and discussions
- Role-playing scenarios
- Small group activities
- Q&A sessions

## Materials Provided

Each participant receives:
- Course manual
- Resource guide
- Certificate upon completion
- Lunch and refreshments

## Registration Required

Limited to 25 participants to ensure quality interaction. Early registration recommended.

Together, we can create a community where mental health support is accessible to all.`,
    date: '2026-02-05',
    time: '09:00 - 15:30',
    location: 'Hope Community Center, Training Room',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&h=600&fit=crop',
    category: 'Training',
    capacity: 25,
    registered: 15,
    organizer: {
      name: 'Dr. James Wilson',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop'
    }
  },
  {
    id: '6',
    title: 'Yoga for Stress Relief',
    description: 'Gentle yoga practice designed to release tension and promote relaxation.',
    content: `Find peace and calm through gentle yoga practice. This class is specifically designed for stress relief and is suitable for all levels, including complete beginners.

## Class Focus

Our stress relief yoga focuses on:
- Gentle stretching
- Breathwork (pranayama)
- Relaxation techniques
- Mindful movement
- Restorative poses

## What Makes This Different

This is not a typical fitness-focused yoga class. Our approach is:
- Slower-paced and gentle
- Trauma-informed
- Focused on relaxation over performance
- Adaptable to all bodies and abilities
- Judgment-free

## What to Bring

- Yoga mat (some extras available)
- Comfortable, loose-fitting clothing
- Water bottle
- Small blanket or towel (optional)

## Benefits

Regular yoga practice can:
- Reduce stress and anxiety
- Improve sleep quality
- Increase flexibility
- Lower blood pressure
- Enhance mind-body connection
- Build community

## Instructor

Maya Patel is a certified yoga instructor with specialized training in trauma-sensitive yoga and teaching for mental health wellness.

## For All Bodies

This practice honors all bodies. Modifications are offered for every pose, and you're encouraged to do what feels right for you.

No experience necessary. Just show up as you are.`,
    date: '2026-02-07',
    time: '10:00 - 11:00',
    location: 'Hope Community Center, Wellness Studio',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop',
    category: 'Wellness',
    capacity: 20,
    registered: 14,
    organizer: {
      name: 'Maya Patel',
      avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop'
    }
  },
  {
    id: '7',
    title: 'Hope Storytelling Night',
    description: 'Share your story of hope, resilience, and recovery in a supportive community setting.',
    content: `Stories have the power to heal, inspire, and connect us. Join us for an evening of authentic storytelling where community members share their personal journeys.

## About the Event

Hope Storytelling Night is a space where people share real stories about their experiences with mental health, recovery, resilience, and finding hope. It's raw, real, and deeply moving.

## How It Works

- Open mic format
- 5-10 minutes per story
- Stories can be about any aspect of your journey
- You can read from notes or speak freely
- Optional: advance signup or speak spontaneously

## Story Themes

Share about:
- Your journey to finding hope
- Moments of resilience
- Lessons learned through hardship
- What helps you cope
- Why community matters to you

## Not Ready to Share?

You're welcome to attend just to listen. Being a compassionate witness is just as important as sharing.

## Safe Space Guidelines

- Stories stay in the room
- We listen without judgment
- Respect each person's experience
- Support, don't advise
- Honor vulnerability

## Why Share?

- Sharing your story is healing
- Your experience can help others feel less alone
- Building authenticity creates real connection
- Speaking your truth is empowering

## Refreshments Provided

Light snacks and beverages will be available.

Your story matters. Your voice matters. You matter.`,
    date: '2026-02-10',
    time: '19:00 - 21:00',
    location: 'Hope Community Center, Main Hall',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=600&fit=crop',
    category: 'Social',
    capacity: 40,
    registered: 22,
    organizer: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    }
  },
  {
    id: '8',
    title: 'Family Support Workshop',
    description: 'For family members and friends supporting loved ones with mental health challenges.',
    content: `Supporting a loved one with mental health challenges can be both rewarding and difficult. This workshop provides tools, strategies, and community for those in a supporting role.

## Workshop Goals

- Understand mental health from a family perspective
- Learn effective communication strategies
- Discover how to support without burning out
- Connect with others in similar situations
- Build a toolkit of practical resources

## Topics Covered

### Understanding Mental Health
- Common mental health conditions
- How mental health affects families
- Breaking down stigma

### Communication Skills
- Active listening techniques
- How to start difficult conversations
- Setting healthy boundaries

### Self-Care for Supporters
- Recognizing caregiver burnout
- Building your support system
- Self-care isn't selfish

### Practical Tools
- Crisis planning
- Finding professional help
- Community resources
- When to step in vs. step back

## Who Should Attend

- Parents supporting children/teens
- Adult children supporting parents
- Partners and spouses
- Siblings and other family members
- Close friends in supporting roles

## Format

- Educational presentation
- Small group discussions
- Q&A with mental health professional
- Resource sharing
- Break-out sessions

## Materials Provided

- Comprehensive resource guide
- Communication tools worksheet
- Local services directory
- Self-care checklist

## Facilitated By

Led by family therapist Dr. Rebecca Foster and peer support specialist Tom Anderson, both with extensive experience in family mental health support.

You don't have to navigate this alone. Join us.`,
    date: '2026-02-12',
    time: '17:00 - 19:00',
    location: 'Hope Community Center, Room 201',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=600&fit=crop',
    category: 'Workshop',
    capacity: 30,
    registered: 19,
    organizer: {
      name: 'Dr. Rebecca Foster',
      avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop'
    }
  }
];

