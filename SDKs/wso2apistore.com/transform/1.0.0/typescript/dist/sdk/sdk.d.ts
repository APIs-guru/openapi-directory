import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://gateway.wso2apistore.com/transform/1.0.0", "http://gateway.wso2apistore.com/transform/1.0.0"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    postJsontoxml(req: operations.PostJsontoxmlRequest, config?: AxiosRequestConfig): Promise<operations.PostJsontoxmlResponse>;
    postXmltojson(req: operations.PostXmltojsonRequest, config?: AxiosRequestConfig): Promise<operations.PostXmltojsonResponse>;
}
export {};
