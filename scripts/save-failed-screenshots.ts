import * as fs from 'fs';
import * as path from 'path';

interface TestResult {
    fullName: string;
    status: string;
    error?: {
        message: string;
        stack: string;
    };
    screenshotPath?: string;
}

const resultsFile = process.argv[2];
const screenshotsDir = process.argv[3];

const results: TestResult[] = JSON.parse(fs.readFileSync(resultsFile, 'utf-8'));

results.forEach((result) => {
    if (result.status === 'failed' && result.error !== undefined) {
        const screenshotPath = result.screenshotPath;
        if (screenshotPath !== undefined) {
            const screenshotName = path.basename(screenshotPath);
            const destinationPath = path.join(screenshotsDir, screenshotName);
            fs.copyFileSync(screenshotPath, destinationPath);
            console.log(`Saved screenshot for ${result.fullName} to ${destinationPath}`);
        }
    }
});