import axios from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";
import { Attributes } from "./attributes";
import { Calendars } from "./calendars";
import { Commands } from "./commands";
import { Devices } from "./devices";
import { Drivers } from "./drivers";
import { Events } from "./events";
import { Geofences } from "./geofences";
import { Groups } from "./groups";
import { Maintenance } from "./maintenance";
import { Notifications } from "./notifications";
import { Permissions } from "./permissions";
import { Positions } from "./positions";
import { Reports } from "./reports";
import { Server } from "./server";
import { Session } from "./session";
import { Statistics } from "./statistics";
import { Users } from "./users";
export var ServerList = [
    "https://demo.traccar.org/api",
    "https://demo2.traccar.org/api",
    "https://demo3.traccar.org/api",
    "https://server.traccar.org/api",
    "http://{host}:{port}/api",
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
        this.attributes = new Attributes(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.calendars = new Calendars(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.commands = new Commands(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.devices = new Devices(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.drivers = new Drivers(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.events = new Events(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.geofences = new Geofences(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.groups = new Groups(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.maintenance = new Maintenance(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.notifications = new Notifications(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.permissions = new Permissions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.positions = new Positions(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.reports = new Reports(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.server = new Server(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.session = new Session(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.statistics = new Statistics(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
        this.users = new Users(this._defaultClient, this._securityClient, this._serverURL, this._language, this._sdkVersion, this._genVersion);
    }
    return SDK;
}());
export { SDK };
