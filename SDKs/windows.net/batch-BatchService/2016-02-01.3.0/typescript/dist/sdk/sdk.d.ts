import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://batch.core.windows.net"];
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
     * accountListNodeAgentSkus - Lists all node agent SKUs supported by the Azure Batch service.
    **/
    accountListNodeAgentSkus(req: operations.AccountListNodeAgentSkusRequest, config?: AxiosRequestConfig): Promise<operations.AccountListNodeAgentSkusResponse>;
    /**
     * applicationGet - Gets information about the specified application.
    **/
    applicationGet(req: operations.ApplicationGetRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationGetResponse>;
    /**
     * applicationList - Lists all of the applications available in the specified account.
    **/
    applicationList(req: operations.ApplicationListRequest, config?: AxiosRequestConfig): Promise<operations.ApplicationListResponse>;
    /**
     * certificateAdd - Adds a certificate to the specified account.
    **/
    certificateAdd(req: operations.CertificateAddRequest, config?: AxiosRequestConfig): Promise<operations.CertificateAddResponse>;
    /**
     * certificateCancelDeletion - Cancels a failed deletion of a certificate from the specified account.
    **/
    certificateCancelDeletion(req: operations.CertificateCancelDeletionRequest, config?: AxiosRequestConfig): Promise<operations.CertificateCancelDeletionResponse>;
    /**
     * certificateDelete - Deletes a certificate from the specified account.
    **/
    certificateDelete(req: operations.CertificateDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CertificateDeleteResponse>;
    /**
     * certificateGet - Gets information about the specified certificate.
    **/
    certificateGet(req: operations.CertificateGetRequest, config?: AxiosRequestConfig): Promise<operations.CertificateGetResponse>;
    /**
     * certificateList - Lists all of the certificates that have been added to the specified account.
    **/
    certificateList(req: operations.CertificateListRequest, config?: AxiosRequestConfig): Promise<operations.CertificateListResponse>;
    /**
     * computeNodeAddUser - Adds a user account to the specified compute node.
    **/
    computeNodeAddUser(req: operations.ComputeNodeAddUserRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeAddUserResponse>;
    /**
     * computeNodeDeleteUser - Deletes a user account from the specified compute node.
    **/
    computeNodeDeleteUser(req: operations.ComputeNodeDeleteUserRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeDeleteUserResponse>;
    /**
     * computeNodeDisableScheduling - Disable task scheduling of the specified compute node.
    **/
    computeNodeDisableScheduling(req: operations.ComputeNodeDisableSchedulingRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeDisableSchedulingResponse>;
    /**
     * computeNodeEnableScheduling - Enable task scheduling of the specified compute node.
    **/
    computeNodeEnableScheduling(req: operations.ComputeNodeEnableSchedulingRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeEnableSchedulingResponse>;
    /**
     * computeNodeGet - Gets information about the specified compute node.
    **/
    computeNodeGet(req: operations.ComputeNodeGetRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGetResponse>;
    /**
     * computeNodeGetRemoteDesktop - Gets the Remote Desktop Protocol file for the specified compute node.
    **/
    computeNodeGetRemoteDesktop(req: operations.ComputeNodeGetRemoteDesktopRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGetRemoteDesktopResponse>;
    /**
     * computeNodeGetRemoteLoginSettings - Gets the settings required for remote login to a compute node.
    **/
    computeNodeGetRemoteLoginSettings(req: operations.ComputeNodeGetRemoteLoginSettingsRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeGetRemoteLoginSettingsResponse>;
    /**
     * computeNodeList - Lists the compute nodes in the specified pool.
    **/
    computeNodeList(req: operations.ComputeNodeListRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeListResponse>;
    /**
     * computeNodeReboot - Restarts the specified compute node.
    **/
    computeNodeReboot(req: operations.ComputeNodeRebootRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeRebootResponse>;
    /**
     * computeNodeReimage - Reinstalls the operating system on the specified compute node.
    **/
    computeNodeReimage(req: operations.ComputeNodeReimageRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeReimageResponse>;
    /**
     * computeNodeUpdateUser - Updates the password or expiration time of a user account on the specified compute node.
    **/
    computeNodeUpdateUser(req: operations.ComputeNodeUpdateUserRequest, config?: AxiosRequestConfig): Promise<operations.ComputeNodeUpdateUserResponse>;
    /**
     * fileDeleteFromComputeNode - Deletes the specified task file from the compute node.
    **/
    fileDeleteFromComputeNode(req: operations.FileDeleteFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileDeleteFromComputeNodeResponse>;
    /**
     * fileDeleteFromTask - Deletes the specified task file from the compute node where the task ran.
    **/
    fileDeleteFromTask(req: operations.FileDeleteFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileDeleteFromTaskResponse>;
    /**
     * fileGetFromComputeNode - Returns the content of the specified task file.
    **/
    fileGetFromComputeNode(req: operations.FileGetFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileGetFromComputeNodeResponse>;
    /**
     * fileGetFromTask - Returns the content of the specified task file.
    **/
    fileGetFromTask(req: operations.FileGetFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileGetFromTaskResponse>;
    /**
     * fileGetNodeFilePropertiesFromComputeNode - Gets the properties of the specified compute node file.
    **/
    fileGetNodeFilePropertiesFromComputeNode(req: operations.FileGetNodeFilePropertiesFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileGetNodeFilePropertiesFromComputeNodeResponse>;
    /**
     * fileGetNodeFilePropertiesFromTask - Gets the properties of the specified task file.
    **/
    fileGetNodeFilePropertiesFromTask(req: operations.FileGetNodeFilePropertiesFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileGetNodeFilePropertiesFromTaskResponse>;
    /**
     * fileListFromComputeNode - Lists all of the files in task directories on the specified compute node.
    **/
    fileListFromComputeNode(req: operations.FileListFromComputeNodeRequest, config?: AxiosRequestConfig): Promise<operations.FileListFromComputeNodeResponse>;
    /**
     * fileListFromTask - Lists the files in a task's directory on its compute node.
    **/
    fileListFromTask(req: operations.FileListFromTaskRequest, config?: AxiosRequestConfig): Promise<operations.FileListFromTaskResponse>;
    /**
     * jobScheduleAdd - Adds a job schedule to the specified account.
    **/
    jobScheduleAdd(req: operations.JobScheduleAddRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleAddResponse>;
    /**
     * jobScheduleDelete - Deletes a job schedule from the specified account.
    **/
    jobScheduleDelete(req: operations.JobScheduleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleDeleteResponse>;
    /**
     * jobScheduleDisable - Disables a job schedule.
    **/
    jobScheduleDisable(req: operations.JobScheduleDisableRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleDisableResponse>;
    /**
     * jobScheduleEnable - Enables a job schedule.
    **/
    jobScheduleEnable(req: operations.JobScheduleEnableRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleEnableResponse>;
    /**
     * jobScheduleExists - Checks the specified job schedule exists.
    **/
    jobScheduleExists(req: operations.JobScheduleExistsRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleExistsResponse>;
    /**
     * jobScheduleGet - Gets information about the specified job schedule.
    **/
    jobScheduleGet(req: operations.JobScheduleGetRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleGetResponse>;
    /**
     * jobScheduleList - Lists all of the job schedules in the specified account.
    **/
    jobScheduleList(req: operations.JobScheduleListRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleListResponse>;
    /**
     * jobSchedulePatch - Updates the properties of the specified job schedule.
    **/
    jobSchedulePatch(req: operations.JobSchedulePatchRequest, config?: AxiosRequestConfig): Promise<operations.JobSchedulePatchResponse>;
    /**
     * jobScheduleTerminate - Terminates a job schedule.
    **/
    jobScheduleTerminate(req: operations.JobScheduleTerminateRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleTerminateResponse>;
    /**
     * jobScheduleUpdate - Updates the properties of the specified job schedule.
    **/
    jobScheduleUpdate(req: operations.JobScheduleUpdateRequest, config?: AxiosRequestConfig): Promise<operations.JobScheduleUpdateResponse>;
    /**
     * jobAdd - Adds a job to the specified account.
    **/
    jobAdd(req: operations.JobAddRequest, config?: AxiosRequestConfig): Promise<operations.JobAddResponse>;
    /**
     * jobDelete - Deletes a job.
    **/
    jobDelete(req: operations.JobDeleteRequest, config?: AxiosRequestConfig): Promise<operations.JobDeleteResponse>;
    /**
     * jobDisable - Disables the specified job, preventing new tasks from running.
    **/
    jobDisable(req: operations.JobDisableRequest, config?: AxiosRequestConfig): Promise<operations.JobDisableResponse>;
    /**
     * jobEnable - Enables the specified job, allowing new tasks to run.
    **/
    jobEnable(req: operations.JobEnableRequest, config?: AxiosRequestConfig): Promise<operations.JobEnableResponse>;
    /**
     * jobGet - Gets information about the specified job.
    **/
    jobGet(req: operations.JobGetRequest, config?: AxiosRequestConfig): Promise<operations.JobGetResponse>;
    /**
     * jobGetAllJobsLifetimeStatistics - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
    **/
    jobGetAllJobsLifetimeStatistics(req: operations.JobGetAllJobsLifetimeStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.JobGetAllJobsLifetimeStatisticsResponse>;
    /**
     * jobList - Lists all of the jobs in the specified account.
    **/
    jobList(req: operations.JobListRequest, config?: AxiosRequestConfig): Promise<operations.JobListResponse>;
    /**
     * jobListFromJobSchedule - Lists the jobs that have been created under the specified job schedule.
    **/
    jobListFromJobSchedule(req: operations.JobListFromJobScheduleRequest, config?: AxiosRequestConfig): Promise<operations.JobListFromJobScheduleResponse>;
    /**
     * jobListPreparationAndReleaseTaskStatus - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
    **/
    jobListPreparationAndReleaseTaskStatus(req: operations.JobListPreparationAndReleaseTaskStatusRequest, config?: AxiosRequestConfig): Promise<operations.JobListPreparationAndReleaseTaskStatusResponse>;
    /**
     * jobPatch - Updates the properties of a job.
    **/
    jobPatch(req: operations.JobPatchRequest, config?: AxiosRequestConfig): Promise<operations.JobPatchResponse>;
    /**
     * jobTerminate - Terminates the specified job, marking it as completed.
    **/
    jobTerminate(req: operations.JobTerminateRequest, config?: AxiosRequestConfig): Promise<operations.JobTerminateResponse>;
    /**
     * jobUpdate - Updates the properties of a job.
    **/
    jobUpdate(req: operations.JobUpdateRequest, config?: AxiosRequestConfig): Promise<operations.JobUpdateResponse>;
    /**
     * poolAdd - Adds a pool to the specified account.
    **/
    poolAdd(req: operations.PoolAddRequest, config?: AxiosRequestConfig): Promise<operations.PoolAddResponse>;
    /**
     * poolDelete - Deletes a pool from the specified account.
    **/
    poolDelete(req: operations.PoolDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PoolDeleteResponse>;
    /**
     * poolDisableAutoScale - Disables automatic scaling for a pool.
    **/
    poolDisableAutoScale(req: operations.PoolDisableAutoScaleRequest, config?: AxiosRequestConfig): Promise<operations.PoolDisableAutoScaleResponse>;
    /**
     * poolEnableAutoScale - Enables automatic scaling for a pool.
    **/
    poolEnableAutoScale(req: operations.PoolEnableAutoScaleRequest, config?: AxiosRequestConfig): Promise<operations.PoolEnableAutoScaleResponse>;
    /**
     * poolEvaluateAutoScale - Gets the result of evaluating an automatic scaling formula on the pool.
    **/
    poolEvaluateAutoScale(req: operations.PoolEvaluateAutoScaleRequest, config?: AxiosRequestConfig): Promise<operations.PoolEvaluateAutoScaleResponse>;
    /**
     * poolExists - Gets basic properties of a pool.
    **/
    poolExists(req: operations.PoolExistsRequest, config?: AxiosRequestConfig): Promise<operations.PoolExistsResponse>;
    /**
     * poolGet - Gets information about the specified pool.
    **/
    poolGet(req: operations.PoolGetRequest, config?: AxiosRequestConfig): Promise<operations.PoolGetResponse>;
    /**
     * poolGetAllPoolsLifetimeStatistics - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
    **/
    poolGetAllPoolsLifetimeStatistics(req: operations.PoolGetAllPoolsLifetimeStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.PoolGetAllPoolsLifetimeStatisticsResponse>;
    /**
     * poolList - Lists all of the pools in the specified account.
    **/
    poolList(req: operations.PoolListRequest, config?: AxiosRequestConfig): Promise<operations.PoolListResponse>;
    /**
     * poolListPoolUsageMetrics - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
    **/
    poolListPoolUsageMetrics(req: operations.PoolListPoolUsageMetricsRequest, config?: AxiosRequestConfig): Promise<operations.PoolListPoolUsageMetricsResponse>;
    /**
     * poolPatch - Updates the properties of a pool.
    **/
    poolPatch(req: operations.PoolPatchRequest, config?: AxiosRequestConfig): Promise<operations.PoolPatchResponse>;
    /**
     * poolRemoveNodes - Removes compute nodes from the specified pool.
    **/
    poolRemoveNodes(req: operations.PoolRemoveNodesRequest, config?: AxiosRequestConfig): Promise<operations.PoolRemoveNodesResponse>;
    /**
     * poolResize - Changes the number of compute nodes that are assigned to a pool.
    **/
    poolResize(req: operations.PoolResizeRequest, config?: AxiosRequestConfig): Promise<operations.PoolResizeResponse>;
    /**
     * poolStopResize - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
    **/
    poolStopResize(req: operations.PoolStopResizeRequest, config?: AxiosRequestConfig): Promise<operations.PoolStopResizeResponse>;
    /**
     * poolUpdateProperties - Updates the properties of a pool.
    **/
    poolUpdateProperties(req: operations.PoolUpdatePropertiesRequest, config?: AxiosRequestConfig): Promise<operations.PoolUpdatePropertiesResponse>;
    /**
     * poolUpgradeOs - Upgrades the operating system of the specified pool.
    **/
    poolUpgradeOs(req: operations.PoolUpgradeOsRequest, config?: AxiosRequestConfig): Promise<operations.PoolUpgradeOsResponse>;
    /**
     * taskAdd - Adds a task to the specified job.
    **/
    taskAdd(req: operations.TaskAddRequest, config?: AxiosRequestConfig): Promise<operations.TaskAddResponse>;
    /**
     * taskAddCollection - Adds a collection of tasks to the specified job.
    **/
    taskAddCollection(req: operations.TaskAddCollectionRequest, config?: AxiosRequestConfig): Promise<operations.TaskAddCollectionResponse>;
    /**
     * taskDelete - Deletes a task from the specified job.
    **/
    taskDelete(req: operations.TaskDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TaskDeleteResponse>;
    /**
     * taskGet - Gets information about the specified task.
    **/
    taskGet(req: operations.TaskGetRequest, config?: AxiosRequestConfig): Promise<operations.TaskGetResponse>;
    /**
     * taskList - Lists all of the tasks that are associated with the specified job.
    **/
    taskList(req: operations.TaskListRequest, config?: AxiosRequestConfig): Promise<operations.TaskListResponse>;
    /**
     * taskListSubtasks - Lists all of the subtasks that are associated with the specified multi-instance task.
    **/
    taskListSubtasks(req: operations.TaskListSubtasksRequest, config?: AxiosRequestConfig): Promise<operations.TaskListSubtasksResponse>;
    /**
     * taskTerminate - Terminates the specified task.
    **/
    taskTerminate(req: operations.TaskTerminateRequest, config?: AxiosRequestConfig): Promise<operations.TaskTerminateResponse>;
    /**
     * taskUpdate - Updates the properties of the specified task.
    **/
    taskUpdate(req: operations.TaskUpdateRequest, config?: AxiosRequestConfig): Promise<operations.TaskUpdateResponse>;
}
export {};
