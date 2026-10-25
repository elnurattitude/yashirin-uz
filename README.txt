YASHIRIN.UZ — AESTHETIC HIDDEN-PLACE SUGGESTION FORM
=====================================================

WHAT'S INCLUDED
- index.html: upgraded website with a custom, responsive form matching the dark green / gold YASHIRIN.UZ design.
- Code.gs: free Google Apps Script receiver that stores suggestions in Google Sheets.
- Your existing logo.png is intentionally NOT included. Keep the logo.png already in your GitHub repository.

IMPORTANT
The form design is ready, but it will not collect submissions until you complete the one-time free setup below and paste the web app URL into index.html. Do not publish it as a working submission form before connecting it.

SET UP THE FREE SUBMISSION BACKEND
1. Create a new Google Sheet while signed in to the Google account where you want to receive suggestions.
2. In that Sheet, open Extensions > Apps Script.
3. Delete the starter code and paste the complete contents of Code.gs from this ZIP.
4. Click Save and give the project a name, e.g. "YASHIRIN Place Suggestions".
5. Click Deploy > New deployment.
6. Click the gear / Select type and choose "Web app".
7. Set "Execute as" to "Me".
8. Set access to "Anyone" if that option is available for your account. This lets website visitors submit without signing into Google. Do not use this if your organization/account policy does not allow public access.
9. Click Deploy, authorize the script when prompted, and copy the Web app URL. It should end in /exec.
10. Open index.html and find this line near the end:
    const APPS_SCRIPT_URL="PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";
11. Replace only the placeholder text between the quotation marks with your deployed URL, keeping the quotation marks.
12. Save index.html.

PUBLISH ON GITHUB PAGES
1. Open https://github.com/elnurattitude/yashirin-uz
2. Replace the repository's index.html with this updated index.html.
3. Do NOT delete, rename, or replace your existing logo.png.
4. Commit the changes to the main branch.
5. Wait a few minutes, then open https://elnurattitude.github.io/yashirin-uz/ and test the form.

TEST
- Submit a test place with a name, region, map/location and description.
- Open your Google Sheet and check the "Place Suggestions" tab.
- If the row does not appear, check that the Apps Script deployment is a Web app, access is set to Anyone, and the correct /exec URL was pasted into index.html.
- When you edit Code.gs later, you may need to create a new deployment version via Deploy > Manage deployments > Edit > New version > Deploy.

PRIVACY / MODERATION
- Anyone with the form link can submit. Do not collect sensitive personal information.
- Review all suggestions before publishing. The site does not publish submissions automatically.
- Apps Script and Google Sheets are third-party Google services; their availability and account restrictions are controlled by Google.
- This simple public form does not include CAPTCHA or sophisticated spam prevention. Check the sheet periodically and avoid publishing unverified or unsafe locations.

LANGUAGE
The page has Uzbek and English interface labels. The best-time selector uses bilingual option text for simplicity.
