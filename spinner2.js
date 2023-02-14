const spinnerChars = ["\r|  ", "\r/  ", "\r-  ", "\r\\ ", "\r|  ", "\r/  ", "\r-  ", "\r\\  ", "\r|  "];
let durationCount = 100;
  

for (const element of spinnerChars) {
    setTimeout(() => {
      process.stdout.write(element)
    }, durationCount);
    durationCount += 200;
  };

