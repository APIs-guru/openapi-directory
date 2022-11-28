import axios from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";
import { Accounts } from "./accounts";
import { Categories } from "./categories";
import { Tags } from "./tags";
import { Transactions } from "./transactions";
import { UtilityEndpoints } from "./utilityendpoints";
import { Webhooks } from "./webhooks";
export var ServerList = [
    "https://api.up.com.au/api/v1",
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
        this.accounts = new Accounts(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.categories = new Categories(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.tags = new Tags(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.transactions = new Transactions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.utilityEndpoints = new UtilityEndpoints(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.webhooks = new Webhooks(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
