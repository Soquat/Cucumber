const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "reports",
    reportPath: "./",
    reportName: "Playwright Automation Report",
    pageTitle: "Playwright Automation Report",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "112",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "App1" },
            { label: "Release", value: "1.0.0" },
            { label: "Cycle", value: "..." }
        ],
    },
});