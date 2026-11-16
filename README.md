# WantGame official website — GitHub Pages

## Included
- `index.html` — branded homepage, real Woofdoku game and Google Play link
- `privacy.html` — redirect/fallback page to the official Blogger privacy policy
- `terms.html` — draft terms page requiring review
- `support.html` — support page
- `app-ads.txt` — AdMob authorized seller line copied from the provided verification screenshot
- `assets/wantgame-logo.png` — custom WantGame logo
- `assets/style.css`, `assets/main.js` — mobile responsive styling and menu

## Game
Name: Woofdoku: Panda Logic Puzzle
Package: com.yw.woofdokugame
Google Play: https://play.google.com/store/apps/details?id=com.yw.woofdokugame
Support email: wanghejie887@gmail.com (from Google Play listing)

## Images
Game icon and screenshots are displayed from image URLs on Google Play image hosting. For permanent independence, download your original artwork from Play Console and host files in `assets/`, then replace image URLs in index.html. These images are not bundled locally. The brand logo IS bundled.

## AdMob verification — IMPORTANT
- `app-ads.txt` must live at the root of the *published site*, e.g. `https://YOUR-GITHUB-USERNAME.github.io/app-ads.txt` (not under `/assets/`).
- The publisher ID was transcribed from the screenshot. Confirm it exactly matches your AdMob account before publishing; if it differs, replace it with the snippet copied directly from AdMob.
- Make sure the website domain listed in Google Play Console is exactly the domain hosting app-ads.txt. Update the Developer website link in Play Console if necessary.
- For most reliable Google Play + AdMob checks, use a GitHub Pages user website (`username.github.io`) or a custom domain. A project subpath (`username.github.io/repo/`) is **not** the root domain URL.
- Wait for Google to recrawl and click Check for updates in AdMob.

## Deploy
1. Create GitHub repository `YOUR_GITHUB_USERNAME.github.io` (public).
2. Upload ALL files inside this folder to repository root (index.html and app-ads.txt both at root).
3. Settings → Pages → Deploy from a branch → main → /(root) → Save.
4. Verify `https://YOUR_GITHUB_USERNAME.github.io/` and `https://YOUR_GITHUB_USERNAME.github.io/app-ads.txt`.
5. Set that website as Developer website for the app in Google Play Console.

## Publish checklist
- Confirm AdMob publisher ID.
- Privacy Policy links to https://wantgame66.blogspot.com/2026/11/privacy-policy.html (provided by the site owner). Verify the Blogger article is publicly accessible and contains your current policy.
- Review terms page and all branding details.
- Replace remotely linked game screenshots with your own local files for robust permanent availability.

## Official privacy policy
Homepage footer PRIVACY links directly to https://wantgame66.blogspot.com/2026/11/privacy-policy.html; privacy.html redirects to the same external page. The external page could not be fetched during packaging, so verify it in a private browser window before publishing.
