import { AxiosInstance } from "axios";
import { PayrollAu } from "./payrollau";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.xero.com/payroll.xro/1.0"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    payrollAu: PayrollAu;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
