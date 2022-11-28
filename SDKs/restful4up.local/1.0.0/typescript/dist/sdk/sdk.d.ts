import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://restful4up.local", "https://restful4up.local/v1"];
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
     * applyYaraRules - apply given YARA rules to the given executable. (upto 10 rules)
    **/
    applyYaraRules(req: operations.ApplyYaraRulesRequest, config?: AxiosRequestConfig): Promise<operations.ApplyYaraRulesResponse>;
    /**
     * clean - clean up the uploaded files
    **/
    clean(config?: AxiosRequestConfig): Promise<operations.CleanResponse>;
    /**
     * emulationOutput - try to get the emulation output after unpacking the file
    **/
    emulationOutput(req: operations.EmulationOutputRequest, config?: AxiosRequestConfig): Promise<operations.EmulationOutputResponse>;
    /**
     * generatePartialYaraRule - generate partial YARA rules for give executable. (Rule without the condition section)
    **/
    generatePartialYaraRule(req: operations.GeneratePartialYaraRuleRequest, config?: AxiosRequestConfig): Promise<operations.GeneratePartialYaraRuleResponse>;
    /**
     * unpack - try to unpack the given file
    **/
    unpack(req: operations.UnpackRequest, config?: AxiosRequestConfig): Promise<operations.UnpackResponse>;
}
export {};
