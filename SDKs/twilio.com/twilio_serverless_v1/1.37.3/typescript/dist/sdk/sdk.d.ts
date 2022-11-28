import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://serverless.twilio.com"];
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
     * createAsset - Create a new Asset resource.
    **/
    createAsset(req: operations.CreateAssetRequest, config?: AxiosRequestConfig): Promise<operations.CreateAssetResponse>;
    /**
     * createBuild - Create a new Build resource. At least one function version or asset version is required.
    **/
    createBuild(req: operations.CreateBuildRequest, config?: AxiosRequestConfig): Promise<operations.CreateBuildResponse>;
    /**
     * createDeployment - Create a new Deployment.
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * createEnvironment - Create a new environment.
    **/
    createEnvironment(req: operations.CreateEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.CreateEnvironmentResponse>;
    /**
     * createFunction - Create a new Function resource.
    **/
    createFunction(req: operations.CreateFunctionRequest, config?: AxiosRequestConfig): Promise<operations.CreateFunctionResponse>;
    /**
     * createService - Create a new Service resource.
    **/
    createService(req: operations.CreateServiceRequest, config?: AxiosRequestConfig): Promise<operations.CreateServiceResponse>;
    /**
     * createVariable - Create a new Variable.
    **/
    createVariable(req: operations.CreateVariableRequest, config?: AxiosRequestConfig): Promise<operations.CreateVariableResponse>;
    /**
     * deleteAsset - Delete an Asset resource.
    **/
    deleteAsset(req: operations.DeleteAssetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAssetResponse>;
    /**
     * deleteBuild - Delete a Build resource.
    **/
    deleteBuild(req: operations.DeleteBuildRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBuildResponse>;
    /**
     * deleteEnvironment - Delete a specific environment.
    **/
    deleteEnvironment(req: operations.DeleteEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEnvironmentResponse>;
    /**
     * deleteFunction - Delete a Function resource.
    **/
    deleteFunction(req: operations.DeleteFunctionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionResponse>;
    /**
     * deleteService - Delete a Service resource.
    **/
    deleteService(req: operations.DeleteServiceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteServiceResponse>;
    /**
     * deleteVariable - Delete a specific Variable.
    **/
    deleteVariable(req: operations.DeleteVariableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVariableResponse>;
    /**
     * fetchAsset - Retrieve a specific Asset resource.
    **/
    fetchAsset(req: operations.FetchAssetRequest, config?: AxiosRequestConfig): Promise<operations.FetchAssetResponse>;
    /**
     * fetchAssetVersion - Retrieve a specific Asset Version.
    **/
    fetchAssetVersion(req: operations.FetchAssetVersionRequest, config?: AxiosRequestConfig): Promise<operations.FetchAssetVersionResponse>;
    /**
     * fetchBuild - Retrieve a specific Build resource.
    **/
    fetchBuild(req: operations.FetchBuildRequest, config?: AxiosRequestConfig): Promise<operations.FetchBuildResponse>;
    /**
     * fetchBuildStatus - Retrieve a specific Build resource.
    **/
    fetchBuildStatus(req: operations.FetchBuildStatusRequest, config?: AxiosRequestConfig): Promise<operations.FetchBuildStatusResponse>;
    /**
     * fetchDeployment - Retrieve a specific Deployment.
    **/
    fetchDeployment(req: operations.FetchDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.FetchDeploymentResponse>;
    /**
     * fetchEnvironment - Retrieve a specific environment.
    **/
    fetchEnvironment(req: operations.FetchEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.FetchEnvironmentResponse>;
    /**
     * fetchFunction - Retrieve a specific Function resource.
    **/
    fetchFunction(req: operations.FetchFunctionRequest, config?: AxiosRequestConfig): Promise<operations.FetchFunctionResponse>;
    /**
     * fetchFunctionVersion - Retrieve a specific Function Version resource.
    **/
    fetchFunctionVersion(req: operations.FetchFunctionVersionRequest, config?: AxiosRequestConfig): Promise<operations.FetchFunctionVersionResponse>;
    /**
     * fetchFunctionVersionContent - Retrieve a the content of a specific Function Version resource.
    **/
    fetchFunctionVersionContent(req: operations.FetchFunctionVersionContentRequest, config?: AxiosRequestConfig): Promise<operations.FetchFunctionVersionContentResponse>;
    /**
     * fetchLog - Retrieve a specific log.
    **/
    fetchLog(req: operations.FetchLogRequest, config?: AxiosRequestConfig): Promise<operations.FetchLogResponse>;
    /**
     * fetchService - Retrieve a specific Service resource.
    **/
    fetchService(req: operations.FetchServiceRequest, config?: AxiosRequestConfig): Promise<operations.FetchServiceResponse>;
    /**
     * fetchVariable - Retrieve a specific Variable.
    **/
    fetchVariable(req: operations.FetchVariableRequest, config?: AxiosRequestConfig): Promise<operations.FetchVariableResponse>;
    /**
     * listAsset - Retrieve a list of all Assets.
    **/
    listAsset(req: operations.ListAssetRequest, config?: AxiosRequestConfig): Promise<operations.ListAssetResponse>;
    /**
     * listAssetVersion - Retrieve a list of all Asset Versions.
    **/
    listAssetVersion(req: operations.ListAssetVersionRequest, config?: AxiosRequestConfig): Promise<operations.ListAssetVersionResponse>;
    /**
     * listBuild - Retrieve a list of all Builds.
    **/
    listBuild(req: operations.ListBuildRequest, config?: AxiosRequestConfig): Promise<operations.ListBuildResponse>;
    /**
     * listDeployment - Retrieve a list of all Deployments.
    **/
    listDeployment(req: operations.ListDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentResponse>;
    /**
     * listEnvironment - Retrieve a list of all environments.
    **/
    listEnvironment(req: operations.ListEnvironmentRequest, config?: AxiosRequestConfig): Promise<operations.ListEnvironmentResponse>;
    /**
     * listFunction - Retrieve a list of all Functions.
    **/
    listFunction(req: operations.ListFunctionRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionResponse>;
    /**
     * listFunctionVersion - Retrieve a list of all Function Version resources.
    **/
    listFunctionVersion(req: operations.ListFunctionVersionRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionVersionResponse>;
    /**
     * listLog - Retrieve a list of all logs.
    **/
    listLog(req: operations.ListLogRequest, config?: AxiosRequestConfig): Promise<operations.ListLogResponse>;
    /**
     * listService - Retrieve a list of all Services.
    **/
    listService(req: operations.ListServiceRequest, config?: AxiosRequestConfig): Promise<operations.ListServiceResponse>;
    /**
     * listVariable - Retrieve a list of all Variables.
    **/
    listVariable(req: operations.ListVariableRequest, config?: AxiosRequestConfig): Promise<operations.ListVariableResponse>;
    /**
     * updateAsset - Update a specific Asset resource.
    **/
    updateAsset(req: operations.UpdateAssetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAssetResponse>;
    /**
     * updateFunction - Update a specific Function resource.
    **/
    updateFunction(req: operations.UpdateFunctionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionResponse>;
    /**
     * updateService - Update a specific Service resource.
    **/
    updateService(req: operations.UpdateServiceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateServiceResponse>;
    /**
     * updateVariable - Update a specific Variable.
    **/
    updateVariable(req: operations.UpdateVariableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVariableResponse>;
}
export {};
