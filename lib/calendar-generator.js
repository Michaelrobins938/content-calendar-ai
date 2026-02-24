const PLATFORMS = ['LinkedIn', 'Twitter', 'Blog', 'Instagram']
const CONTENT_TYPES = ['Industry News', 'Product Updates', 'Tips & Tricks', 'Case Studies', 'Thought Leadership']
const TIME_SLOTS = [
  '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
]

export function generateContentCalendar(days = 7, preferences = {}) {
  const calendar = []
  const now = new Date()

  // Platform-specific best times (based on research)
  const platformTimes = {
    LinkedIn: ['10:00', '11:00', '15:00'],
    Twitter: ['9:00', '12:00', '15:00', '16:00'],
    Blog: ['11:00', '14:00'],
    Instagram: ['12:00', '13:00', '15:00']
  }

  for (let i = 0; i < days; i++) {
    const date = new Date(now.getTime() + i * 24 * 60 * 60 * 1000)
    const dayPosts = []

    // Generate 2-3 posts per day
    const postsCount = Math.floor(Math.random() * 2) + 2

    for (let j = 0; j < postsCount; j++) {
      const platform = PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)]
      const contentType = CONTENT_TYPES[Math.floor(Math.random() * CONTENT_TYPES.length)]
      const bestTimes = platformTimes[platform]
      const time = bestTimes[Math.floor(Math.random() * bestTimes.length)]

      dayPosts.push({
        platform,
        contentType,
        time,
        suggestedTopics: generateTopicSuggestions(platform, contentType),
      })
    }

    // Sort posts by time
    dayPosts.sort((a, b) => a.time.localeCompare(b.time))

    calendar.push({
      date: date.toISOString(),
      weekday: date.toLocaleDateString('en-US', { weekday: 'long' }),
      posts: dayPosts
    })
  }

  return calendar
}

function generateTopicSuggestions(platform, contentType) {
  // Platform-specific topic suggestions
  const topics = {
    LinkedIn: {
      'Industry News': ['AI Implementation Success Stories', 'Market Analysis', 'Leadership Insights'],
      'Product Updates': ['New Feature Deep Dives', 'Integration Announcements', 'Product Roadmap'],
      'Tips & Tricks': ['Professional Development', 'Team Management', 'Productivity Hacks'],
      'Case Studies': ['Client Success Stories', 'ROI Analysis', 'Implementation Guides'],
      'Thought Leadership': ['Industry Trends', 'Future Predictions', 'Expert Interviews']
    },
    Twitter: {
      'Industry News': ['Breaking News', 'Quick Updates', 'Live Commentary'],
      'Product Updates': ['Feature Previews', 'Quick Tips', 'User Highlights'],
      'Tips & Tricks': ['Daily Tips', 'Quick Hacks', 'Tool Recommendations'],
      'Case Studies': ['Success Metrics', 'Quick Wins', 'User Stories'],
      'Thought Leadership': ['Hot Takes', 'Trend Analysis', 'Expert Quotes']
    },
    Blog: {
      'Industry News': ['Detailed Analysis', 'Impact Assessment', 'Strategy Guide'],
      'Product Updates': ['Technical Deep Dives', 'Best Practices', 'Setup Guides'],
      'Tips & Tricks': ['Step-by-Step Guides', 'Resource Lists', 'Expert Tips'],
      'Case Studies': ['Detailed Case Studies', 'Interview Series', 'Data Analysis'],
      'Thought Leadership': ['Research Papers', 'Industry Reports', 'Trend Analysis']
    },
    Instagram: {
      'Industry News': ['Visual Stories', 'Infographics', 'Event Coverage'],
      'Product Updates': ['Feature Showcases', 'User Stories', 'Behind the Scenes'],
      'Tips & Tricks': ['Visual Guides', 'Quick Tips', 'Tool Showcases'],
      'Case Studies': ['Success Story Graphics', 'Quote Cards', 'Stat Visuals'],
      'Thought Leadership': ['Quote Graphics', 'Trend Visuals', 'Story Highlights']
    }
  }

  return topics[platform][contentType].slice(0, 3)
}

export function analyzeCalendarPerformance(calendar) {
  return {
    totalPosts: calendar.reduce((acc, day) => acc + day.posts.length, 0),
    platformDistribution: calendar.reduce((acc, day) => {
      day.posts.forEach(post => {
        acc[post.platform] = (acc[post.platform] || 0) + 1
      })
      return acc
    }, {}),
    contentTypeDistribution: calendar.reduce((acc, day) => {
      day.posts.forEach(post => {
        acc[post.contentType] = (acc[post.contentType] || 0) + 1
      })
      return acc
    }, {}),
    averagePostsPerDay: calendar.reduce((acc, day) => acc + day.posts.length, 0) / calendar.length
  }
}