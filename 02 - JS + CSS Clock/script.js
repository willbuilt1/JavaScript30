const hourHand = document.querySelector('.hour-hand');
      const minHand = document.querySelector('.min-hand');
      const secondHand = document.querySelector('.second-hand');
      
      
      function setTime () {
          //1. Get new date
          const now = new Date();
          //2. Using Date() rotate hour hand
          const hourDeg = now.getHours();
          const rotateHour = ((hourDeg / 12) * 360 +90);
          hourHand.style.transform = `rotate(${rotateHour}deg)`;
          //3. Using Date() rotate minute hand
          const minDeg = now.getMinutes();
          const rotateMin = ((hourDeg / 60) * 360 +90);
          minHand.style.transform = `rotate(${rotateMin}deg)`;
          //4. Using Date() rotate seconds hand
          const secDeg = now.getSeconds();
          const rotateSec = ((secDeg / 60) * 360 +90);
          secondHand.style.transform = `rotate(${rotateSec}deg)`;
      }
      //5. Update rotation every second
      setInterval(setTime, 1000);
      //6. Rotate hands on startup
      setTime();