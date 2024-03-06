// EXAMPLE 1 - Get the Time Zone Name using JavaScript

// 👇️ "Europe/Sofia"
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);

// 👇️ Eastern European Standard Time (en-US locale)
console.log(
  new Date()
    .toLocaleDateString('en-US', {
      day: '2-digit',
      timeZoneName: 'long',
    })
    .slice(4),
);

// 👇️ Osteuropaeische Normalzeit (de-DE locale)
console.log(
  new Date()
    .toLocaleDateString('de-DE', {
      day: '2-digit',
      timeZoneName: 'long',
    })
    .slice(4),
);

// 👇️ get time zone offset -120 means timezone offset is UTC+02
const offset = new Date().getTimezoneOffset();
console.log(offset); // 👉️ -120

// ------------------------------------------------------------------

// // EXAMPLE 2 - Getting the time zone name in a long, localized form

// // 👇️ Eastern European Standard Time (en-US locale)
// console.log(
//   new Date()
//     .toLocaleDateString('en-US', {
//       day: '2-digit',
//       timeZoneName: 'long',
//     })
//     .slice(4),
// );

// // 👇️ Osteuropaeische Normalzeit (de-DE locale)
// console.log(
//   new Date()
//     .toLocaleDateString('de-DE', {
//       day: '2-digit',
//       timeZoneName: 'long',
//     })
//     .slice(4),
// );

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Time Zone Abbreviation using JavaScript

// // 👇️ GMT+3
// console.log(
//   new Date()
//     .toLocaleDateString('en-US', {
//       day: '2-digit',
//       timeZoneName: 'short',
//     })
//     .slice(4),
// );

// // 👇️ OEZ
// console.log(
//   new Date()
//     .toLocaleDateString('de-DE', {
//       day: '2-digit',
//       timeZoneName: 'short',
//     })
//     .slice(4),
// );
