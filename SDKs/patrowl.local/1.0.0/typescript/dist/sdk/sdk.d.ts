import { AxiosInstance } from "axios";
import { PatrowlEngine } from "./patrowlengine";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://patrowl.local", "http://localhost:5001/engines/nmap/", "http://localhost:5004/engines/ssllabs/", "http://localhost:5005/engines/arachni/", "http://localhost:5006/engines/owl_dns/", "http://localhost:5007/engines/virustotal/", "http://localhost:5008/engines/urlvoid/", "http://localhost:5009/engines/cortex/", "http://localhost:5012/engines/owl_leaks/", "http://localhost:5013/engines/owl_code/", "http://localhost:5014/engines/sslscan/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    patrowlEngine: PatrowlEngine;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
