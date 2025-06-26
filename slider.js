 (function autoSlide1() {
      let current = 1;
      const total = 5;
      setInterval(() => {
        document.getElementById('slide1-' + current).checked = false;
        current = current % total + 1;
        document.getElementById('slide1-' + current).checked = true;
      }, 5000); // 5 seconds
    })();