module.exports = function (config) {
    config.set({
        browsers: ["ChromeHeadlessNoSandbox"],
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: "ChromeHeadless",
                flags: ["--no-sandbox"]
            }
        },
        // The directory where the output file lives
        basePath: "out",
        // The file itself
        files: ["karma-test.js"],
        frameworks: ["cljs-test"],
        plugins: ["karma-cljs-test", "karma-chrome-launcher"],
        colors: true,
        logLevel: config.LOG_INFO,
        client: {
            args: ["shadow.test.karma.init"],
            singleRun: true
        }
    });
};
