import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://autopilot.twilio.com"];
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
    createAssistant(req: operations.CreateAssistantRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssistantResponse>;
    createField(req: operations.CreateFieldRequest, config?: AxiosRequestConfig): Promise<operations.CreateFieldResponse>;
    createFieldType(req: operations.CreateFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.CreateFieldTypeResponse>;
    createFieldValue(req: operations.CreateFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.CreateFieldValueResponse>;
    createModelBuild(req: operations.CreateModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.CreateModelBuildResponse>;
    createQuery(req: operations.CreateQueryRequest, config?: AxiosRequestConfig): Promise<operations.CreateQueryResponse>;
    createSample(req: operations.CreateSampleRequest, config?: AxiosRequestConfig): Promise<operations.CreateSampleResponse>;
    createTask(req: operations.CreateTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    createWebhook(req: operations.CreateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    deleteAssistant(req: operations.DeleteAssistantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssistantResponse>;
    deleteField(req: operations.DeleteFieldRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFieldResponse>;
    deleteFieldType(req: operations.DeleteFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFieldTypeResponse>;
    deleteFieldValue(req: operations.DeleteFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFieldValueResponse>;
    deleteModelBuild(req: operations.DeleteModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.DeleteModelBuildResponse>;
    deleteQuery(req: operations.DeleteQueryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteQueryResponse>;
    deleteSample(req: operations.DeleteSampleRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSampleResponse>;
    deleteTask(req: operations.DeleteTaskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTaskResponse>;
    deleteWebhook(req: operations.DeleteWebhookRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    fetchAssistant(req: operations.FetchAssistantRequest, config?: AxiosRequestConfig): Promise<operations.FetchAssistantResponse>;
    fetchDefaults(req: operations.FetchDefaultsRequest, config?: AxiosRequestConfig): Promise<operations.FetchDefaultsResponse>;
    fetchDialogue(req: operations.FetchDialogueRequest, config?: AxiosRequestConfig): Promise<operations.FetchDialogueResponse>;
    fetchField(req: operations.FetchFieldRequest, config?: AxiosRequestConfig): Promise<operations.FetchFieldResponse>;
    fetchFieldType(req: operations.FetchFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.FetchFieldTypeResponse>;
    fetchFieldValue(req: operations.FetchFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.FetchFieldValueResponse>;
    fetchModelBuild(req: operations.FetchModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.FetchModelBuildResponse>;
    fetchQuery(req: operations.FetchQueryRequest, config?: AxiosRequestConfig): Promise<operations.FetchQueryResponse>;
    fetchSample(req: operations.FetchSampleRequest, config?: AxiosRequestConfig): Promise<operations.FetchSampleResponse>;
    /**
     * fetchStyleSheet - Returns Style sheet JSON object for the Assistant
    **/
    fetchStyleSheet(req: operations.FetchStyleSheetRequest, config?: AxiosRequestConfig): Promise<operations.FetchStyleSheetResponse>;
    fetchTask(req: operations.FetchTaskRequest, config?: AxiosRequestConfig): Promise<operations.FetchTaskResponse>;
    /**
     * fetchTaskActions - Returns JSON actions for the Task.
    **/
    fetchTaskActions(req: operations.FetchTaskActionsRequest, config?: AxiosRequestConfig): Promise<operations.FetchTaskActionsResponse>;
    fetchTaskStatistics(req: operations.FetchTaskStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.FetchTaskStatisticsResponse>;
    fetchWebhook(req: operations.FetchWebhookRequest, config?: AxiosRequestConfig): Promise<operations.FetchWebhookResponse>;
    listAssistant(req: operations.ListAssistantRequest, config?: AxiosRequestConfig): Promise<operations.ListAssistantResponse>;
    listField(req: operations.ListFieldRequest, config?: AxiosRequestConfig): Promise<operations.ListFieldResponse>;
    listFieldType(req: operations.ListFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.ListFieldTypeResponse>;
    listFieldValue(req: operations.ListFieldValueRequest, config?: AxiosRequestConfig): Promise<operations.ListFieldValueResponse>;
    listModelBuild(req: operations.ListModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.ListModelBuildResponse>;
    listQuery(req: operations.ListQueryRequest, config?: AxiosRequestConfig): Promise<operations.ListQueryResponse>;
    listSample(req: operations.ListSampleRequest, config?: AxiosRequestConfig): Promise<operations.ListSampleResponse>;
    listTask(req: operations.ListTaskRequest, config?: AxiosRequestConfig): Promise<operations.ListTaskResponse>;
    listWebhook(req: operations.ListWebhookRequest, config?: AxiosRequestConfig): Promise<operations.ListWebhookResponse>;
    updateAssistant(req: operations.UpdateAssistantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssistantResponse>;
    updateDefaults(req: operations.UpdateDefaultsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDefaultsResponse>;
    updateFieldType(req: operations.UpdateFieldTypeRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFieldTypeResponse>;
    updateModelBuild(req: operations.UpdateModelBuildRequest, config?: AxiosRequestConfig): Promise<operations.UpdateModelBuildResponse>;
    updateQuery(req: operations.UpdateQueryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateQueryResponse>;
    updateRestoreAssistant(req: operations.UpdateRestoreAssistantRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRestoreAssistantResponse>;
    updateSample(req: operations.UpdateSampleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSampleResponse>;
    /**
     * updateStyleSheet - Updates the style sheet for an Assistant identified by `assistant_sid`.
    **/
    updateStyleSheet(req: operations.UpdateStyleSheetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateStyleSheetResponse>;
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    /**
     * updateTaskActions - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
    **/
    updateTaskActions(req: operations.UpdateTaskActionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskActionsResponse>;
    updateWebhook(req: operations.UpdateWebhookRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
export {};
