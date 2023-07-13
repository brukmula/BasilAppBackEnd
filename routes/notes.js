// Import the Firebase Storage module
const { Storage } = require('@google-cloud/storage');

// Initialize Firebase Storage
const storage = new Storage({
    // Firebase project configuration
    projectId: 'basil-backend-47d01',
    keyFilename: 'path/to/serviceAccountKey.json',
});

// Define the Firebase Storage bucket
const bucket = storage.bucket('your-bucket-name');

// Function to upload a file to Firebase Storage
function uploadFile(localFilePath, destinationFileName) {
    return new Promise((resolve, reject) => {
        // Create a reference to the destination file in the Firebase Storage bucket
        const file = bucket.file(destinationFileName);

        // Start the upload
        file.createWriteStream()
            .on('error', (error) => {
                console.error('Error uploading file:', error);
                reject(error);
            })
            .on('finish', () => {
                console.log('File uploaded successfully.');
                resolve();
            })
            .end(fs.readFileSync(localFilePath)); // Read the local file and upload it
    });
}

// Function to download a file from Firebase Storage
function downloadFile(destinationFilePath, sourceFileName) {
    return new Promise((resolve, reject) => {
        // Create a reference to the source file in the Firebase Storage bucket
        const file = bucket.file(sourceFileName);

        // Start the download
        file.createReadStream()
            .on('error', (error) => {
                console.error('Error downloading file:', error);
                reject(error);
            })
            .on('end', () => {
                console.log('File downloaded successfully.');
                resolve();
            })
            .pipe(fs.createWriteStream(destinationFilePath)); // Write the downloaded file to the destination path
    });
}

// Example usage:
uploadFile('path/to/local/file.txt', 'destination/file.txt')
    .then(() => {
        // File uploaded successfully, do something
    })
    .catch((error) => {
        // Error occurred during file upload, handle it
    });

downloadFile('destination/file.txt', 'source/file.txt')
    .then(() => {
        // File downloaded successfully, do something
    })
    .catch((error) => {
        // Error occurred during file download, handle it
    });
