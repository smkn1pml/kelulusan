var homeUrl = 'https://kelulusan.smkn1pml.sch.id'
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function initialSetup() {
    var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
    scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doGet(e) {
    return HtmlService.createHtmlOutput(
        "<script>window.top.location.href=\"" + homeUrl + "\";</script>"
    )
}

function doPost(e) {
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
            "skl"
        ]
        var allData = sheet.getDataRange()
            .getValues()

        var data = []
        if (allData.length > 1) {

            var records = sheet.getRange(2, 1, (sheet.getLastRow() - 1), sheet.getLastColumn())
                .getValues()

            for (r in records) {
                var record = records[r]
                var oneData = {}

                for (i in record) {
                    oneData[headers[i]] = record[i]
                }

                data.push(oneData)
            }

        }

        let param = e.parameter
        let results = []

        if (param && Object.keys(param).length > 0 && param.constructor === Object) {
            results = data.filter(function (item) {
                for (p in param) {
                    if (item[p] === undefined || item[p] != param[p]) {
                        return false
                    }
                    return true
                }
            })
        } else {
            results = data
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