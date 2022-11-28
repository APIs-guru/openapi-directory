import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://seldon.local", "http://{host}:{port}", "http://localhost:8002"];
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
    aggregate2(req: operations.Aggregate2Request, config?: AxiosRequestConfig): Promise<operations.Aggregate2Response>;
    route(req: operations.RouteRequest, config?: AxiosRequestConfig): Promise<operations.RouteResponse>;
    sendFeedback(req: operations.SendFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.SendFeedbackResponse>;
    transformInput(req: operations.TransformInputRequest, config?: AxiosRequestConfig): Promise<operations.TransformInputResponse>;
    transformInput3(req: operations.TransformInput3Request, config?: AxiosRequestConfig): Promise<operations.TransformInput3Response>;
    transformOutput(req: operations.TransformOutputRequest, config?: AxiosRequestConfig): Promise<operations.TransformOutputResponse>;
}
export {};
