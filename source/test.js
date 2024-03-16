import { PluraJS } from "./dist/PluraJS.cjs.js";
const browserName = PluraJS.Browser.getBrowserName();

if (browserName === "Chrome") {
    PluraJS.WBFunctions.newLog(`Browser Name: ${browserName}`, "color: blue;", true); // Browser Name: Chrome
} else {
    PluraJS.WBFunctions.closePage();
}