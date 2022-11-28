import axios from "axios";
import * as utils from "../internal/utils";
import { TwoForMobileAppOptional } from "./twoformobileappoptional";
import { Two1UserStatisticsOptional } from "./two1userstatisticsoptional";
import { Two2UserTripsOptional } from "./two2usertripsoptional";
import { Two4UserSafeScoringOptional } from "./two4usersafescoringoptional";
import { ThreeForBackEndOptional } from "./threeforbackendoptional";
import { ConsolidatedSafeScoring } from "./consolidatedsafescoring";
import { ConsolidatedStatistics } from "./consolidatedstatistics";
export var ServerList = [
    "https://api.telematicssdk.com",
    "https://mobilesdk.telematicssdk.com",
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
        this.twoForMobileAppOptional = new TwoForMobileAppOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.two1UserStatisticsOptional = new Two1UserStatisticsOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.two2UserTripsOptional = new Two2UserTripsOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.two4UserSafeScoringOptional = new Two4UserSafeScoringOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.threeForBackEndOptional = new ThreeForBackEndOptional(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.consolidatedSafeScoring = new ConsolidatedSafeScoring(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.consolidatedStatistics = new ConsolidatedStatistics(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
