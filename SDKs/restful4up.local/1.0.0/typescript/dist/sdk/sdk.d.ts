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
    ApplyYaraRules(req: operations.ApplyYaraRulesRequest, config?: AxiosRequestConfig): Promise<operations.ApplyYaraRulesResponse>;
    Clean(config?: AxiosRequestConfig): Promise<operations.CleanResponse>;
    EmulationOutput(req: operations.EmulationOutputRequest, config?: AxiosRequestConfig): Promise<operations.EmulationOutputResponse>;
    GeneratePartialYaraRule(req: operations.GeneratePartialYaraRuleRequest, config?: AxiosRequestConfig): Promise<operations.GeneratePartialYaraRuleResponse>;
    Unpack(req: operations.UnpackRequest, config?: AxiosRequestConfig): Promise<operations.UnpackResponse>;
}
export {};
