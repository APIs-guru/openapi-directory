import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://api.parliament.uk/search"];
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
    /**
     * getDescription - OpenSearch description document
     *
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-description-document - OpenSearch github repository
    **/
    getDescription(config?: AxiosRequestConfig): Promise<operations.GetDescriptionResponse>;
    /**
     * getQuery - Search results
     *
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
    **/
    getQuery(req: operations.GetQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponse>;
    /**
     * getQueryExtension - Search results
     *
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
    **/
    getQueryExtension(req: operations.GetQueryExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryExtensionResponse>;
}
export {};
