# Hope Community Platform

A compassionate, supportive community platform designed to help people connect, share stories, and support each other through mental health challenges.

## 🌱 About Hope

Hope Community is a safe, judgment-free space where everyone belongs. We provide mental health support through community connection, sharing stories of resilience, and organizing supportive events.

## ✨ Features

### Main Pages
- **Home Page**: Hero section, About Us, Mission, Featured Posts (carousel), Upcoming Events, Contact form
- **Posts Listing**: Paginated blog posts with stories of hope and resilience
- **Post Details**: Full article view with rich content formatting
- **Events Listing**: Paginated upcoming community events
- **Event Details**: Full event information with registration functionality

### Key Features
- 🎨 Modern, supportive design with green color scheme
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessibility-focused (WCAG compliant)
- 🔄 Smooth animations and transitions
- 📄 Pagination for listings
- 📝 Event registration system
- 💚 Supportive, trauma-informed UX

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextjs-hope-community
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── api/                  # API routes
│   │   ├── posts/            # Posts API endpoints
│   │   └── events/           # Events API endpoints
│   ├── posts/                # Posts pages
│   │   ├── [id]/             # Post detail page
│   │   └── page.tsx          # Posts listing
│   ├── events/               # Events pages
│   │   ├── [id]/             # Event detail page
│   │   └── page.tsx          # Events listing
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/               # React components
│   ├── ui/                   # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── Pagination.tsx
│   ├── layout/               # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── home/                 # Home page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Mission.tsx
│   │   ├── FeaturedPosts.tsx
│   │   ├── UpcomingEvents.tsx
│   │   └── Contact.tsx
│   ├── posts/                # Post components
│   │   └── PostCard.tsx
│   └── events/               # Event components
│       └── EventCard.tsx
├── lib/                      # Utility functions
│   └── mock-data.ts          # Mock data for development
├── types/                    # TypeScript types
│   └── index.ts
└── sanity/                   # Sanity CMS (for future use)
    └── client.ts
```

## 🎨 Design System

### Colors
- **Primary Green**: `#059669` (emerald-600)
- **Light Green**: `#ecfdf5` (emerald-50)
- **Dark Green**: `#047857` (emerald-700)
- **Text**: `#1f2937` (gray-900)
- **Backgrounds**: White, `#f9fafb` (gray-50)

### Typography
- **Font Family**: Inter (via Google Fonts)
- **Headings**: Bold, various sizes
- **Body**: Regular weight, comfortable line-height

### Components
All components follow a consistent design pattern:
- Rounded corners (rounded-2xl for cards)
- Subtle shadows with hover effects
- Smooth transitions (duration-200 to duration-300)
- Accessible focus states

## 🔌 API Endpoints

### Posts
- `GET /api/posts` - Get paginated posts
  - Query params: `page`, `pageSize`, `featured`
- `GET /api/posts/[id]` - Get single post

### Events
- `GET /api/events` - Get paginated events
  - Query params: `page`, `pageSize`, `upcoming`
- `GET /api/events/[id]` - Get single event
- `POST /api/events/[id]/register` - Register for event
  - Body: `{ name, email, phone? }`

## 📊 Mock Data

Currently using mock data defined in `src/lib/mock-data.ts`. This includes:
- 8 blog posts with various categories
- 8 community events with different types
- All content is supportive and aligned with the mission

## 🔮 Future Enhancements

- [ ] Connect to Sanity CMS for content management
- [ ] User authentication and profiles
- [ ] Community forum/discussion boards
- [ ] Resource library
- [ ] Crisis support integration
- [ ] Newsletter subscription
- [ ] Social sharing features
- [ ] Event calendar view
- [ ] Search functionality
- [ ] Admin dashboard

## 🤝 Contributing

This project is built with care for people going through difficult times. When contributing:
- Use supportive, non-judgmental language
- Consider accessibility in all features
- Test across different devices
- Maintain the warm, welcoming tone

## 📝 License

This project is created for Hope Community.

## 💚 Support

If you or someone you know is in crisis:
- **Crisis Hotline**: 988 (24/7)
- **Text Support**: Text HOPE to 741741

---

**Built with compassion and hope** 🌱
