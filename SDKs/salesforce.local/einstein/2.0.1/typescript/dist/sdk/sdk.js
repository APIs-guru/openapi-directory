import axios from "axios";
import * as utils from "../internal/utils";
import { Authorization } from "./authorization";
import { CheckApiUsage } from "./checkapiusage";
import { LanguageDatasets } from "./languagedatasets";
import { LanguageExamples } from "./languageexamples";
import { LanguageModels } from "./languagemodels";
import { LanguagePrediction } from "./languageprediction";
import { LanguageTraining } from "./languagetraining";
import { VisionDatasets } from "./visiondatasets";
import { VisionExamples } from "./visionexamples";
import { VisionModels } from "./visionmodels";
import { VisionPrediction } from "./visionprediction";
import { VisionTraining } from "./visiontraining";
export var ServerList = [
    "http://salesforce.local",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk._serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk._defaultClient = client;
    };
}
/* SDK Documentation: https://metamind.readme.io - For more information, see the Einstein Platform Services Developer Guide*/
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        this._language = "typescript";
        this._sdkVersion = "0.0.1";
        this._genVersion = "internal";
        opts.forEach(function (o) { return o(_this); });
        if (this._serverURL == "") {
            this._serverURL = ServerList[0];
        }
        if (!this._defaultClient) {
            this._defaultClient = axios.create({ baseURL: this._serverURL });
        }
        if (!this._securityClient) {
            this._securityClient = this._defaultClient;
        }
        this.authorization = new Authorization(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.checkApiUsage = new CheckApiUsage(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.languageDatasets = new LanguageDatasets(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.languageExamples = new LanguageExamples(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.languageModels = new LanguageModels(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.languagePrediction = new LanguagePrediction(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.languageTraining = new LanguageTraining(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.visionDatasets = new VisionDatasets(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.visionExamples = new VisionExamples(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.visionModels = new VisionModels(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.visionPrediction = new VisionPrediction(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.visionTraining = new VisionTraining(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
