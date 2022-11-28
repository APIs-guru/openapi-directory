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
     * createExecution - Triggers a new Execution for the Flow
    **/
    createExecution(req: operations.CreateExecutionRequest, config?: AxiosRequestConfig): Promise<operations.CreateExecutionResponse>;
    /**
     * createFlow - Create a Flow.
    **/
    createFlow(req: operations.CreateFlowRequest, config?: AxiosRequestConfig): Promise<operations.CreateFlowResponse>;
    /**
     * deleteExecution - Delete the Execution and all Steps relating to it.
    **/
    deleteExecution(req: operations.DeleteExecutionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteExecutionResponse>;
    /**
     * deleteFlow - Delete a specific Flow.
    **/
    deleteFlow(req: operations.DeleteFlowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFlowResponse>;
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
     * fetchFlowRevision - Retrieve a specific Flow revision.
    **/
    fetchFlowRevision(req: operations.FetchFlowRevisionRequest, config?: AxiosRequestConfig): Promise<operations.FetchFlowRevisionResponse>;
    /**
     * fetchTestUser - Fetch flow test users
    **/
    fetchTestUser(req: operations.FetchTestUserRequest, config?: AxiosRequestConfig): Promise<operations.FetchTestUserResponse>;
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
     * listFlowRevision - Retrieve a list of all Flows revisions.
    **/
    listFlowRevision(req: operations.ListFlowRevisionRequest, config?: AxiosRequestConfig): Promise<operations.ListFlowRevisionResponse>;
    /**
     * updateExecution - Update the status of an Execution to `ended`.
    **/
    updateExecution(req: operations.UpdateExecutionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateExecutionResponse>;
    /**
     * updateFlow - Update a Flow.
    **/
    updateFlow(req: operations.UpdateFlowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFlowResponse>;
    /**
     * updateFlowValidate - Validate flow JSON definition
    **/
    updateFlowValidate(req: operations.UpdateFlowValidateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFlowValidateResponse>;
    /**
     * updateTestUser - Update flow test users
    **/
    updateTestUser(req: operations.UpdateTestUserRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTestUserResponse>;
}
export {};
