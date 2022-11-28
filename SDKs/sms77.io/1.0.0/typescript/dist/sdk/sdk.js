import axios from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";
import { Analytics } from "./analytics";
import { Balance } from "./balance";
import { Contacts } from "./contacts";
import { Hooks } from "./hooks";
import { Lookup } from "./lookup";
import { Pricing } from "./pricing";
import { Sms } from "./sms";
import { Status } from "./status";
import { ValidateForVoice } from "./validateforvoice";
import { Voice } from "./voice";
export var ServerList = [
    "https://gateway.sms77.io/api",
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
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk._security = security;
    };
}
/* SDK Documentation: https://sms77.io/en/docs/gateway/http-api - Find out more about the Sms77.io SMS gateway.*/
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
            if (this._security) {
                this._securityClient = utils.CreateSecurityClient(this._defaultClient, this._security);
            }
            else {
                this._securityClient = this._defaultClient;
            }
        }
        this.analytics = new Analytics(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.balance = new Balance(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.contacts = new Contacts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.hooks = new Hooks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.lookup = new Lookup(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.pricing = new Pricing(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.sms = new Sms(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.status = new Status(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.validateForVoice = new ValidateForVoice(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.voice = new Voice(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
