import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  CircularProgress,
  LinearProgress
} from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import StopIcon from '@mui/icons-material/Stop';
import api from '../services/api';

const Timer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [recipe, setRecipe] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timerId, setTimerId] = useState(null);
  const intervalRef = useRef(null);
  const [userId] = useState(localStorage.getItem('userId'));

  useEffect(() => {
    fetchRecipe();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [id]);

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            handleTimerComplete();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, timeRemaining]);

  const fetchRecipe = async () => {
    try {
      const response = await api.get(`/recipes/${id}`);
      setRecipe(response.data);
      setTimeRemaining(response.data.cookingTime);
    } catch (error) {
      console.error('Error fetching recipe:', error);
    }
  };

  const createTimer = async () => {
    try {
      const response = await api.post('/timers', {
        recipeId: parseInt(id),
        duration: recipe.cookingTime,
        userId: userId || null
      });
      setTimerId(response.data.id);
    } catch (error) {
      console.error('Error creating timer:', error);
    }
  };

  const updateTimerStatus = async (status) => {
    if (!timerId) return;
    
    try {
      await api.patch(`/timers/${timerId}`, { status });
    } catch (error) {
      console.error('Error updating timer:', error);
    }
  };

  const handleStart = async () => {
    if (!timerId) {
      await createTimer();
    }
    setIsRunning(true);
    setIsPaused(false);
    await updateTimerStatus('running');
    
    // Powiadomienie przeglądarki
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(t('timer.title'), {
        body: t('timer.start'),
        icon: '/logo192.png'
      });
    }
  };

  const handlePause = async () => {
    setIsRunning(false);
    setIsPaused(true);
    await updateTimerStatus('paused');
  };

  const handleResume = async () => {
    setIsRunning(true);
    setIsPaused(false);
    await updateTimerStatus('running');
  };

  const handleStop = async () => {
    setIsRunning(false);
    setIsPaused(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    await updateTimerStatus('completed');
    navigate(`/recipe/${id}`);
  };

  const handleTimerComplete = async () => {
    setIsRunning(false);
    setIsPaused(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    await updateTimerStatus('completed');
    
    // Powiadomienie o zakończeniu
    if ('Notification' in window) {
      if (Notification.permission === 'granted') {
        new Notification(t('timer.completed'), {
          body: t('timer.timeUp'),
          icon: '/logo192.png',
          requireInteraction: true
        });
      } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            new Notification(t('timer.completed'), {
              body: t('timer.timeUp'),
              icon: '/logo192.png',
              requireInteraction: true
            });
          }
        });
      }
    }
    
    // Dźwięk (jeśli dostępny)
    if (typeof Audio !== 'undefined') {
      const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OSdTgwOUKnm8LZjGwY4kdfyzHksBSR3x/DdkEAKFF606euoVRQKRp/g8r5sIQUrgc7y2Yk2CBtpvfDknU4MDlCp5vC2YxsGOJHX8sx5LAUkd8fw3ZBAC');
      audio.play().catch(() => {});
    }
  };

  // Prośba o pozwolenie na powiadomienia
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  if (!recipe) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="400px">
        <CircularProgress />
      </Box>
    );
  }

  const totalTime = recipe.cookingTime;
  const progress = totalTime > 0 ? ((totalTime - timeRemaining) / totalTime) * 100 : 0;
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <Card>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {recipe.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          {t('timer.title')}
        </Typography>

        <Box display="flex" flexDirection="column" alignItems="center" my={4}>
          <Typography variant="h2" component="div">
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {t('timer.remaining')}
          </Typography>
          
          <Box width="100%" mt={2}>
            <LinearProgress variant="determinate" value={progress} />
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" gap={2} mt={4}>
          {!isRunning && !isPaused && (
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<PlayArrowIcon />}
              onClick={handleStart}
            >
              {t('timer.start')}
            </Button>
          )}
          
          {isRunning && (
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PauseIcon />}
              onClick={handlePause}
            >
              {t('timer.pause')}
            </Button>
          )}
          
          {isPaused && (
            <>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<PlayArrowIcon />}
                onClick={handleResume}
              >
                {t('timer.resume')}
              </Button>
              <Button
                variant="contained"
                color="error"
                size="large"
                startIcon={<StopIcon />}
                onClick={handleStop}
              >
                {t('timer.stop')}
              </Button>
            </>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Timer;
