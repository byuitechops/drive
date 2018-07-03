/**
 * Copy an existing file.
 *
 * 
 * 
 */
function copyFile() {
    var body = {
        'title': 'My copy'
    };
    var request = gapi.client.drive.files.copy({
        'fileId': '1B41vSP4ggurSr-FWFGfTXSmYTyD9cLUoBNYGCZ_t0v8',
        'resource': body
    });
    request.execute(function (resp) {
        console.log('Copy ID: ' + resp.id);
    });
}



function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
        'apiKey': 'AIzaSyDntdASMt5ae_R4EMLCujPtkNr7390G_Pw',
        // Your API key will be automatically added to the Discovery Document URLs.
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        // clientId and scope are optional if auth is not required.
        'clientId': '275383619900-apkhdnsrg0okh8d5oq7uf8hjgd6mtdhj.apps.googleusercontent.com',
        'scope': 'profile',
    }).then(function () {
        // 3. Initialize and make the API request.
        return gapi.client.people.people.get({
            'resourceName': 'people/me',
            'requestMask.includeField': 'person.names'
        });
    }).then(function (response) {
        console.log(response.result);
    }, function (reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}
// 1. Load the JavaScript client library.
gapi.load('client', start);