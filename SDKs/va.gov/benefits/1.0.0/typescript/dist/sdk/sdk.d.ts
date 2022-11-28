import { AxiosInstance } from "axios";
import { VbaDocuments } from "./vbadocuments";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://sandbox-api.va.gov/services/vba_documents/{version}", "https://api.va.gov/services/vba_documents/{version}"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    vbaDocuments: VbaDocuments;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
