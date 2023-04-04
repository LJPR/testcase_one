import puppeteer from 'puppeteer';


//add listeners for websocket onclose event

const meetingId = 

(async () => {
  const browser = await puppeteer.launch();
  const erniePage = await browser.newPage();
  await erniePage.goto('https://franchiseba.zoom.us/wc/join/'${meetingId});
  const [response] = await Promise.all([
    erniePage.waitForNavigation(waitOptions),
    erniePage.click(selector, clickOptions),
  ]);
})();

(async () => {
  const browser = await puppeteer.launch();
  const bartPage = await browser.newPage();
  await bartPage.goto('https://franchiseba.zoom.us/wc/join/'${meetingId});
  const [response] = await Promise.all([
    bartPage.waitForNavigation(waitOptions),
    bartPage.click(selector, clickOptions),
  ]);
})();

(async () => {
  const browser = await puppeteer.launch();
  const gonzoPage = await browser.newPage();
  await gonzoPage.goto('https://franchiseba.zoom.us/wc/join/'${meetingId});
  const [response] = await Promise.all([
    gonzoPage.waitForNavigation(waitOptions),
    gonzoPage.click(selector, clickOptions),
  ]);
})();

(async () => {
  const browser = await puppeteer.launch();
  const kermitPage = await browser.newPage();
  await kermitPage.goto('https://franchiseba.zoom.us/wc/join/'${meetingId});
  const [response] = await Promise.all([
    kermitPage.waitForNavigation(waitOptions),
    kermitPage.click(selector, clickOptions),
  ]);
})();