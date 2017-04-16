process.env['AZURE_STORAGE_ACCOUNT'] = 'your_azure_storage_account';
process.env['AZURE_STORAGE_KEY'] = 'your_azure_storage_account_key'
process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'your_azure_storage_account_connection_string';
var azure = require('azure-storage');
var blobService = azure.createBlobService();
var images = 'images';

function saveToBlob(name, stream, cb) {
    stream.pipe(blobService.createWriteStreamToBlockBlob(images, name, cb));
}

function getUrl(name) {
    return blobService.getUrl(images,name);
}
module.exports = {
    saveToBlob: saveToBlob,
    getUrl: getUrl
}