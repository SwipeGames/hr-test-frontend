"use client";

import React, { useState } from 'react';
import { Video, UserState } from './types';
import VideoPlayer from './components/VideoPlayer';
import BettingOverlay from './components/BettingOverlay';
import videos from './videos.json'; // Importing the new video data

// Initial user state
const initialUserState: UserState = {
  balance: 1000,
  bets: [],
  activeBet: null
};

function App() {
    
  // TODO: Implement these states
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [userState, setUserState] = useState<UserState>(initialUserState);
  const [showBetting, setShowBetting] = useState(false);

  // TODO: Implement these handlers
  const handleTimeUpdate = (time: number) => {
    const currentVideo = videos[currentVideoIndex];
    if (time >= currentVideo.betTriggerTime && !showBetting && !userState.activeBet) {
      setShowBetting(true);
    }
  };

  const handleBet = (option: 'a' | 'b', amount: number) => {
    // Implement betting logic
    console.log('Bet placed:', { option, amount });
  };

  return (
    <div className="h-screen w-full bg-black">
      <div className="relative h-full w-full max-w-md mx-auto">
        {/* Current video with betting overlay */}
        <div className="relative h-full">
          <VideoPlayer
            video={videos[currentVideoIndex]}
            isActive={true}
            onTimeUpdate={handleTimeUpdate}
          />
          {showBetting && (
            <BettingOverlay
              options={videos[currentVideoIndex].options}
              onBet={handleBet}
              userBalance={userState.balance}
            />
          )}
        </div>

        {/* User balance display */}
        <div className="absolute top-4 right-4 bg-white/80 px-3 py-1 rounded-full">
          Balance: ${userState.balance}
        </div>
      </div>
    </div>
  );
}

export default App;
