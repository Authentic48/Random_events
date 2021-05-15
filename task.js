const isOdd = (num) => num % 2;

  const random = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (isOdd(randomNumber)) {
      console.log("No");
    } else {
      console.log("Yes");
    }
  };

random(10, 100);