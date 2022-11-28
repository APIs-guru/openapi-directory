import { AxiosInstance } from "axios";
import { Actions } from "./actions";
import { Applications } from "./applications";
import { Devices } from "./devices";
import { Groups } from "./groups";
import { HistoricalData } from "./historicaldata";
import { Services } from "./services";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://truesight.local", "https://truesight.local/tsws/10.0/api/", "https://{hostname}:{port}/tsws/10.0/api/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    actions: Actions;
    applications: Applications;
    devices: Devices;
    groups: Groups;
    historicalData: HistoricalData;
    services: Services;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
