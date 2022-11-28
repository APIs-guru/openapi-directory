import axios from "axios";
import * as utils from "../internal/utils";
import { ApplicationCharge } from "./applicationcharge";
import { InlineScript } from "./inlinescript";
import { Script } from "./script";
import { ScriptDeprecated } from "./scriptdeprecated";
import { Uninstallation } from "./uninstallation";
export var ServerList = [
    "https://api.shop-pro.jp",
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
        this.applicationCharge = new ApplicationCharge(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.inlineScript = new InlineScript(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.script = new Script(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.scriptDeprecated = new ScriptDeprecated(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.uninstallation = new Uninstallation(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
