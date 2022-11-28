import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://studio.twilio.com"];
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
     * createEngagement - Triggers a new Engagement for the Flow
    **/
    createEngagement(req: operations.CreateEngagementRequest, config?: AxiosRequestConfig): Promise<operations.CreateEngagementResponse>;
    /**
     * createExecution - Triggers a new Execution for the Flow
    **/
    createExecution(req: operations.CreateExecutionRequest, config?: AxiosRequestConfig): Promise<operations.CreateExecutionResponse>;
    /**
     * deleteEngagement - Delete this Engagement and all Steps relating to it.
    **/
    deleteEngagement(req: operations.DeleteEngagementRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEngagementResponse>;
    /**
     * deleteExecution - Delete the Execution and all Steps relating to it.
    **/
    deleteExecution(req: operations.DeleteExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExecutionResponse>;
    /**
     * deleteFlow - Delete a specific Flow.
    **/
    deleteFlow(req: operations.DeleteFlowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlowResponse>;
    /**
     * fetchEngagement - Retrieve an Engagement
    **/
    fetchEngagement(req: operations.FetchEngagementRequest, config?: AxiosRequestConfig): Promise<operations.FetchEngagementResponse>;
    /**
     * fetchEngagementContext - Retrieve the most recent context for an Engagement.
    **/
    fetchEngagementContext(req: operations.FetchEngagementContextRequest, config?: AxiosRequestConfig): Promise<operations.FetchEngagementContextResponse>;
    /**
     * fetchExecution - Retrieve an Execution
    **/
    fetchExecution(req: operations.FetchExecutionRequest, config?: AxiosRequestConfig): Promise<operations.FetchExecutionResponse>;
    /**
     * fetchExecutionContext - Retrieve the most recent context for an Execution.
    **/
    fetchExecutionContext(req: operations.FetchExecutionContextRequest, config?: AxiosRequestConfig): Promise<operations.FetchExecutionContextResponse>;
    /**
     * fetchExecutionStep - Retrieve a Step.
    **/
    fetchExecutionStep(req: operations.FetchExecutionStepRequest, config?: AxiosRequestConfig): Promise<operations.FetchExecutionStepResponse>;
    /**
     * fetchExecutionStepContext - Retrieve the context for an Execution Step.
    **/
    fetchExecutionStepContext(req: operations.FetchExecutionStepContextRequest, config?: AxiosRequestConfig): Promise<operations.FetchExecutionStepContextResponse>;
    /**
     * fetchFlow - Retrieve a specific Flow.
    **/
    fetchFlow(req: operations.FetchFlowRequest, config?: AxiosRequestConfig): Promise<operations.FetchFlowResponse>;
    /**
     * fetchStep - Retrieve a Step.
    **/
    fetchStep(req: operations.FetchStepRequest, config?: AxiosRequestConfig): Promise<operations.FetchStepResponse>;
    /**
     * fetchStepContext - Retrieve the context for an Engagement Step.
    **/
    fetchStepContext(req: operations.FetchStepContextRequest, config?: AxiosRequestConfig): Promise<operations.FetchStepContextResponse>;
    /**
     * listEngagement - Retrieve a list of all Engagements for the Flow.
    **/
    listEngagement(req: operations.ListEngagementRequest, config?: AxiosRequestConfig): Promise<operations.ListEngagementResponse>;
    /**
     * listExecution - Retrieve a list of all Executions for the Flow.
    **/
    listExecution(req: operations.ListExecutionRequest, config?: AxiosRequestConfig): Promise<operations.ListExecutionResponse>;
    /**
     * listExecutionStep - Retrieve a list of all Steps for an Execution.
    **/
    listExecutionStep(req: operations.ListExecutionStepRequest, config?: AxiosRequestConfig): Promise<operations.ListExecutionStepResponse>;
    /**
     * listFlow - Retrieve a list of all Flows.
    **/
    listFlow(req: operations.ListFlowRequest, config?: AxiosRequestConfig): Promise<operations.ListFlowResponse>;
    /**
     * listStep - Retrieve a list of all Steps for an Engagement.
    **/
    listStep(req: operations.ListStepRequest, config?: AxiosRequestConfig): Promise<operations.ListStepResponse>;
    /**
     * updateExecution - Update the status of an Execution to `ended`.
    **/
    updateExecution(req: operations.UpdateExecutionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExecutionResponse>;
}
export {};
