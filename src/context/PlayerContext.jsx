import { createContext, useRef, useState, useEffect } from 'react';
import { songsData } from '../assets/assets';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[1]);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };
  
  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };
  const playwithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlayStatus(true);
  };

  const previous = async () => {
    if (track.id > 0) {
      await setTrack(songsData[track.id - 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }
  
  const next = async () => {
    if (track.id < songsData.length - 1) {
      await setTrack(songsData[track.id + 1]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  }
  const seekSong = async (e) => {audioRef.current.currentTime = ((e.nativeEvent.offsetX / seekBg.current.offsetWidth) * audioRef.current.duration );

}

  

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current && seekBar.current) {
        seekBar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%";
      }
      
      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    };

    if (audioRef.current) {
      audioRef.current.ontimeupdate = handleTimeUpdate;
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, [audioRef]);

  return (
    <PlayerContext.Provider value={{ audioRef, seekBg, seekBar, track, setTrack, playStatus, setPlayStatus, time, setTime, play, pause , playwithId , previous , next , seekSong}}>
      {children}
    </PlayerContext.Provider>
  );
};
