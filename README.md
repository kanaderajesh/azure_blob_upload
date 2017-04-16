**Description**
Uploading images to azure blob and after that running functions to get cognitive information. 

This small web app will be used to upload images to azure blob. 

**Tooling**

> Node
> Visual studio code
> Gulp ( task runner )
> Express js

**Prerequisite**

> Azure storage account
> Azure storage account name and key will be passed from environment
> Goto services/blobstorage.js and configure your storage account credentails.

    process.env['AZURE_STORAGE_ACCOUNT'] = 'your_azure_storage_account';
    process.env['AZURE_STORAGE_KEY'] = 'your_azure_storage_account_key'
    process.env['AZURE_STORAGE_CONNECTION_STRING'] = 'your_azure_storage_account_connection_string';
> Replace the above variables with correct credenatils.

**Steps to run**

    git clone git@github.com:kanaderajesh/azure_blob_upload.git
    cd azure_blob_upload
    npm i
    npm install -g gulp
    gulp
    go to browser and open http://localhost:3000/
