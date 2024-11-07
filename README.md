# Video Feed Betting Challenge

> **Note:** To get started, please open this project in a sandbox environment like [CodeSandbox](https://codesandbox.io/s/github/SwipeGames/hr-test-frontend) or [Replit](https://replit.com/github/SwipeGames/hr-test-frontend).

## Project Overview
Create a vertical video feed (like TikTok) where users can place bets at specific moments during video playback.

## Core Features

### 1. Video Feed
- Vertical scrolling between videos
- Current video plays automatically
- Previous/next videos are paused
- Basic video controls (play/pause)

### 2. Betting
- Overlay pops up at specific timestamp (e.g., 5 seconds into video)
- Shows two betting options with odds
- User can input bet amount
- Basic validation (can't bet more than available balance)

### 3. State Management
- Track current video position in feed
- Handle user balance updates after bets
- Store betting history
- Handle active bet state

## Starting Code

```typescript
// Types you'll need
interface Video {
  id: string;
  url: string;
  betTriggerTime: number; // when to show overlay
  options: {
    a: { text: string; odds: number };
    b: { text: string; odds: number };
  };
}

interface Bet {
  videoId: string;
  amount: number;
  option: 'a' | 'b';
}

// Sample data
const videos = [
  {
    id: '1',
    url: 'https://example.com/video1.mp4',
    betTriggerTime: 5,
    options: {
      a: { text: 'Score', odds: 1.5 },
      b: { text: 'Miss', odds: 2.0 }
    }
  },
  // more videos...
];

const initialBalance = 1000;
```

## Main Tasks

1. Set up video feed:
   - Handle video playback
   - Implement scrolling between videos
   - Show current video index

2. Create betting overlay:
   - Show/hide at correct timestamp
   - Display betting options and odds
   - Input for bet amount
   - Place bet button

3. Manage state:
   - Track user balance
   - Store active bets
   - Update balance after betting
   - Show betting history

## Testing Points
- What happens if user scrolls while betting overlay is open?
- How do you handle video buffering?
- What if user seeks video past the bet trigger point?
- How do you handle failed bets?

## Time: 45-60 minutes

## Notes
- Focus on functionality over styling
- Use any state management approach you prefer
- TypeScript is set up but use is optional
