console.log("js");
{
  // 1array ichida sonlar berilgan shu sonlarni faqat musbat sonlarini qaytaruvch programma tuzilsin
  function son(array) {
    let nmadr = [];
    for (let i = 0, len = array.length; len > i; i++) {
      if (array[i] > 0) {
        // console.log(array[i]);
        nmadr.push(array[i]);
      }
    }
    return nmadr;
  }

  console.log(son([-5, 3, 8, -7, 6]));
}
{
  // 2masala
  const foo = (str) => {
    return str.split("").reverse().join("");
  };
  console.log(foo("salom"));
}
{
  // 3masala
  const foo = (str) => {
    return str.split("").reverse().join("");
  };
  console.log(foo(1332 + ""));
}
{
  // 4masalaa
  function boolen(array) {
    let sum = [];
    for (let i = 0, len = array.length; len > i; i++) {
      if (array[i] === false) {
        sum.push(array[i]);
      }
    }
    return sum;
  }
  console.log(boolen([false, true, false, true]));
}
{
  function son(array) {
    let sum = 0;
    for (let i = 0, len = array.length; len > i; i++) {
      if (array[i] % 2 === 0) {
        sum += array[i];
      }
    }
    return sum;
  }
  console.log(son([1, 2, 3, 4, 5, 6]));
}
{
  // 6 masala
  function son(array) {
    let sum = [];
    for (let i = 0, len = array.length; len > i; i++) {
      sum.push(array[i] ** 2);
    }
    return sum;
  }
  console.log(son([4, 5, 6]));
}
{
  // 7 masala
  function son(a) {
    let sum = [];
    for (let i = 1; a >= i; i++) {
      sum.push(i);
    }
    return sum;
  }
  console.log(son(5));
}
{
  // 8 masala
  function son(a, b) {
    let sum = [];
    for (let i = a; b >= i; i++) {
      if (i % 2 === 0) {
        // console.log(i);
        sum.push(i);
      }
    }
    return sum;
  }
  console.log(son(5, 11));
}
{
  // 9 masala
  function toCapitalize(text) {
    // nuqtadan keyin harf katta bo'lishi kerak
    return (
      text.charAt(0).toUpperCase() +
      text
        .slice(1)
        .replace(/(\.\s*)([a-z])/g, function (match, separator, char) {
          return separator + char.toUpperCase();
        })
    );
  }
  console.log(toCapitalize("madina"));
}
{
  // 10 masala
  function hi(a, b) {
    for (let i = a; i <= b; i++) {}
  }
  console.log(hi("salom", 3));
}

{
  //  11 masala
  function foo(array) {
    array.reverse();
    console.log(array);
  }
  console.log(foo([1, 2, 3]));
}
{
  //  12 masala
  function son(array) {
    array.sort((a, b) => a - b);
    console.log(array);
  }
  console.log(son([2, 1, 13, 4]));
}
