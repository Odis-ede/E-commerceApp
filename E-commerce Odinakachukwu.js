("use strict");
const prompt = require("prompt-sync")({ sigint: true });

function finalBuy() {
  if (nextStep == 1) {
    console.log(
      "Send amount to the account details below\n Ede Odinakachukwu Opay 07065059057"
    );
  } else {
    return Odis;
  }
}

const Odis = prompt(
  "Welcome Odinakachukwu E-commerce store. Select from the list:\n1. Buy Roban Bread - N1100\n2. Buy Okpa - N300 \n3. Buy Ntachi Osa Rice - N2200\n4.Buy Shoprite Icecream - N4000\n5. Buy Abacha and Nkwobi - N3400"
);

const nextStep = prompt(
  "Here's your next step:\n1. Proceed to payment\n2. Back to homepage"
);

if (Odis == 1) {
  console.log("Roban Bread is sold for N1100");
  finalBuy(nextStep);
} else if (Odis == 2) {
  console.log("Okpa is sold for N300");
  finalBuy(nextStep);
} else if (Odis == 3) {
  console.log("Ntachi Osa Rice is sold for N2200");
  finalBuy(nextStep);
} else if (Odis == 4) {
  console.log("Shoprite Icecream is sold for N4000");
  finalBuy(nextStep);
} else if (Odis == 5) {
  console.log("Buy Abacha and Nkwobi is sold for N3400");
  finalBuy(nextStep);
} else {
  console.log("Enter a value from 1 to 5");
}
