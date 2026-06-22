const https = require('https');
https.get('https://www.trustpilot.com/review/bamboomelodyweavers.com', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const ratingMatch = data.match(/ratingValue"\s*:\s*"([\d.]+)"/);
    const countMatch = data.match(/reviewCount"\s*:\s*"(\d+)"/);
    console.log('Rating:', ratingMatch ? ratingMatch[1] : null);
    console.log('Count:', countMatch ? countMatch[1] : null);
  });
}).on('error', err => console.error(err));
