let quotes = [
  {
    name: "ဒေါ်အောင်ဆန်းစုကြည်",
    quote:
      "တစ်ခုတည်းသော အကျဥ်းထောင်စင်စစ်သည် အကြောက်တရားဖြစ်သည်။ \nတစ်ခုတည်းသောလွတ်လပ်မှုအစစ်အမှန်သည် အကြောက်တရားမှလွတ်မြောက်ခြင်းပင်ဖြစ်သည်",
  },
  {
    name: "မြိုင်သပိတ်",
    quote: "တောင်တန်းမြေပြန့် အတူချီတက် ဖက်ဆစ်ဝါဒ အမြစ်ဖြတ်",
  },
  {
    name: "a comrade from front line",
    quote:
      "နိုင်ငံရေးဆိုတာ နိုင်ငံသားတိုင်းရဲ့ အရေးပဲ နိုင်ငံရေးကို နိုင်ငံသားတွေ မလုပ်ရင် ခွေးသားတွေ လုပ်သွားလိမ့်မယ်",
  },
  {
    name: "ဒေါ်အောင်ဆန်းစုကြည်",
    quote: "သတ္တိရှိတယ်ဆိုတာ ကြောက်စိတ်ရှိလျက်နဲ့ မှန်တာကိုလုပ်ရဲတာပါပဲ",
  },
  {
    name: "မာတင်လူသာက",
    quote:
      "ဖိနှိပ်သူတို့သည် လွတ်လပ်မှုကို ဘယ်သောအခါမှ စေတနာအလျောက် ပေးအပ်ခြင်းမရှိ။ \nအဖိနှိပ်ခံများက တောင်းဆိုရမည်ဖြစ်သည်",
  },
  {
    name: "ညောင်စေ့",
    quote:
      "ပြည်သူ့ကျိန်စာနဲ့ စားရမယ့် ထမင်းတွေအတွက် \n မင်းတို့ သားစဉ်မြေးဆက် စားသုံးသည့်ထမင်းဟာ အဆိပ်ဖြစ်ပါစေ။",
  },
  {
    name: "ညောင်စေ့",
    quote:
      "ပြည်သူ့ကျိန်စာနဲ့ စားရမယ့် ထမင်းတွေအတွက် \n မင်းတို့ သားစဉ်မြေးဆက် စားသုံးသည့်ထမင်းဟာ အဆိပ်ဖြစ်ပါစေ။",
  },
  {
    name: "Che Guevara",
    quote:
      "မတရားမှုတိုင်းကို ဒေါသတကြီး တုန်လှုပ်နေတယ်ဆိုရင် မင်းက ငါ့ရဲ့ ရဲဘော်ပဲ",
  },
];

let quotesCollection = () => {
  let num1 = Math.floor(Math.random() * 256);
  let num2 = Math.floor(Math.random() * 256);
  let num3 = Math.floor(Math.random() * 256);

  let quote = document.getElementById("quotes");
  let name = document.getElementById("person");
  let randomQuote = Math.floor(Math.random() * quotes.length);
  quote.innerText = `“${quotes[randomQuote].quote}”`;
  name.innerText = `${quotes[randomQuote].name}`;
  document.body.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
  setTimeout(quotesCollection, 5000);
};

setTimeout(quotesCollection, 0);
