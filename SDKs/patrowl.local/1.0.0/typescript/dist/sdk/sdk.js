import axios from "axios";
import * as utils from "../internal/utils";
import { PatrowlEngine } from "./patrowlengine";
export var ServerList = [
    "http://patrowl.local",
    "http://localhost:5001/engines/nmap/",
    "http://localhost:5004/engines/ssllabs/",
    "http://localhost:5005/engines/arachni/",
    "http://localhost:5006/engines/owl_dns/",
    "http://localhost:5007/engines/virustotal/",
    "http://localhost:5008/engines/urlvoid/",
    "http://localhost:5009/engines/cortex/",
    "http://localhost:5012/engines/owl_leaks/",
    "http://localhost:5013/engines/owl_code/",
    "http://localhost:5014/engines/sslscan/",
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
/* SDK Documentation: https://github.com/Patrowl/PatrowlDocs - Find out more about Patrowl*/
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
        this.patrowlEngine = new PatrowlEngine(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
