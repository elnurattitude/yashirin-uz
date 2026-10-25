/**
 * YASHIRIN.UZ — hidden-place suggestion receiver
 * Attach this script to a Google Sheet (Extensions > Apps Script).
 * Deploy as a Web app: Execute as me; access: Anyone.
 */
function doPost(e) {
  try {
    var data = JSON.parse((e && e.postData && e.postData.contents) || "{}");
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Place Suggestions") || ss.insertSheet("Place Suggestions");

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted at", "Place name", "Region / district", "Map link or location",
        "Why it is special", "Best time to visit", "Photo link", "Language", "Source"
      ]);
      sheet.setFrozenRows(1);
    }

    var placeName = String(data.placeName || "").trim();
    var region = String(data.region || "").trim();
    var mapLink = String(data.mapLink || "").trim();
    var whyVisit = String(data.whyVisit || "").trim();

    if (!placeName || !region || !mapLink || !whyVisit) {
      return jsonResponse({ ok: false, message: "Required fields are missing." });
    }

    sheet.appendRow([
      new Date(),
      safeCell(placeName),
      safeCell(region),
      safeCell(mapLink),
      safeCell(whyVisit),
      safeCell(data.bestTime || ""),
      safeCell(data.photoLink || ""),
      safeCell(data.language || ""),
      safeCell(data.page || "YASHIRIN.UZ")
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, message: String(err) });
  }
}

function safeCell(value) {
  var text = String(value == null ? "" : value).trim();
  // Avoid spreadsheet formula injection from submitted text.
  return /^[=+\-@]/.test(text) ? "'" + text : text;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
