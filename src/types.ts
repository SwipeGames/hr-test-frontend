export interface Video {
  id: string;
  url: string;
  betTriggerTime: number;
  options: {
    a: { text: string; odds: number };
    b: { text: string; odds: number };
  };
}

export interface Bet {
  videoId: string;
  amount: number;
  option: 'a' | 'b';
  timestamp: number;
}

export interface UserState {
  balance: number;
  bets: Bet[];
  activeBet: Bet | null;
}

export interface VideoPlayerProps {
  video: Video;
  isActive: boolean;
  onTimeUpdate: (time: number) => void;
}

export interface BettingOverlayProps {
  options: Video['options'];
  onBet: (option: 'a' | 'b', amount: number) => void;
  userBalance: number;
}
