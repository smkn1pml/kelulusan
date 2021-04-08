var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function initialSetup() {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doGet(e) {
    try {
        var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
        var sheet = doc.getSheetByName(sheetName)

        var headers = [
            "un",
            "nama",
            "ttl",
            "ortu",
            "nisn",
            "status",
            "pk",
            "skl"
        ]
        var allData = sheet.getDataRange()
            .getValues()

        var results = []
        if (allData.length > 1) {

            var records = sheet.getRange(2, 1, (sheet.getLastRow() - 1), sheet.getLastColumn())
                .getValues()

            for (r in records) {
                var record = records[r]
                var oneData = {}

                for (i in record) {
                    oneData[headers[i]] = record[i]
                }

                results.push(oneData)
            }

        }

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'data': results }))
            .setMimeType(ContentService.MimeType.JSON)
    }

    catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
            .setMimeType(ContentService.MimeType.JSON)
    }
}