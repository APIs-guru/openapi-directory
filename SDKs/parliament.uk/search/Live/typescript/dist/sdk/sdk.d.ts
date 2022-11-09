import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-description-document - OpenSearch github repository
    **/
    GetDescription(config?: AxiosRequestConfig): Promise<operations.GetDescriptionResponse>;
    /**
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
    **/
    GetQuery(req: operations.GetQueryRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryResponse>;
    /**
     * https://github.com/dewitt/opensearch/blob/master/opensearch-1-1-draft-6.md#opensearch-response-elements - OpenSearch github repository
    **/
    GetQueryExtension(req: operations.GetQueryExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetQueryExtensionResponse>;
}
export {};
