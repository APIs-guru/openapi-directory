import { AxiosInstance } from "axios";
import { ApplicationCharge } from "./applicationcharge";
import { InlineScript } from "./inlinescript";
import { Script } from "./script";
import { ScriptDeprecated } from "./scriptdeprecated";
import { Uninstallation } from "./uninstallation";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.shop-pro.jp"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    applicationCharge: ApplicationCharge;
    inlineScript: InlineScript;
    script: Script;
    scriptDeprecated: ScriptDeprecated;
    uninstallation: Uninstallation;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
