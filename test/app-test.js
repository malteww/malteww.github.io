// To Check If all links have target _blank
document
  .querySelectorAll('a:not([target="_blank"])')
  .forEach((a) => (a.style.border = "2px solid green"));

// // To Check If all img has a alt
// document
//   .querySelectorAll("img:not([alt])")
//   .forEach((a) => (a.style.border = "200px solid green"));

// // To Check If all img has a non empty alt
// document
//   .querySelectorAll('img[alt=""]')
//   .forEach((a) => (a.style.border = "200px solid green"));
