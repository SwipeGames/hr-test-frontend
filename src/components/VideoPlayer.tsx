import React from 'react';
import { VideoPlayerProps } from '../types';

const VideoPlayer: React.FC<VideoPlayerProps> = ({ 
  video, 
  isActive, 
  onTimeUpdate 
}) => {
  // TODO: Implement video ref and state management
  // - Track play/pause state
  // - Handle video progress
  // - Manage active/inactive state
  
  // TODO: Implement useEffect for video control
  // - Play video when isActive is true
  // - Pause when isActive is false
  // - Clean up event listeners
  
  // TODO: Implement time update handler
  // - Track current time
  // - Call onTimeUpdate with current time
  // - Update progress indicator
  
  // TODO: Implement play/pause toggle
  // - Handle video play/pause
  // - Update play state
  // - Handle autoplay restrictions

  return (
    <div className="relative w-full h-full">
      {/* TODO: Implement video element */}
      <video
        src={video.url}
        className="w-full h-full object-cover"
      />
      
      {/* TODO: Implement video controls
          Requirements:
          - Play/Pause button
          - Progress bar
          - Time display (optional)
          - Volume control (optional)
      */}
      <div className="absolute bottom-4 left-4 right-4">
        {/* Your controls implementation */}
      </div>
    </div>
  );
};

export default VideoPlayer;
