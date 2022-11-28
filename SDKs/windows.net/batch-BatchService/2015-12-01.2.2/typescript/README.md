# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { ApplicationGetRequest, ApplicationGetResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: ApplicationGetRequest = {
  pathParams: {
    applicationId: "velit",
  },
  queryParams: {
    apiVersion: "qui",
    timeout: 512565698074373009,
  },
  headers: {
    clientRequestId: "est",
    ocpDate: "mollitia",
    returnClientRequestId: false,
  },
};

sdk.sdk.applicationGet(req).then((res: ApplicationGetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `applicationGet` - Gets information about the specified application.
* `applicationList` - Lists all of the applications available in the specified account.
* `certificateAdd` - Adds a certificate to the specified account.
* `certificateCancelDeletion` - Cancels a failed deletion of a certificate from the specified account.
* `certificateDelete` - Deletes a certificate from the specified account.
* `certificateGet` - Gets information about the specified certificate.
* `certificateList` - Lists all of the certificates that have been added to the specified account.
* `computeNodeAddUser` - Adds a user account to the specified compute node.
* `computeNodeDeleteUser` - Deletes a user account from the specified compute node.
* `computeNodeDisableScheduling` - Disable task scheduling of the specified compute node.
* `computeNodeEnableScheduling` - Enable task scheduling of the specified compute node.
* `computeNodeGet` - Gets information about the specified compute node.
* `computeNodeGetRemoteDesktop` - Gets the Remote Desktop Protocol file for the specified compute node.
* `computeNodeList` - Lists the compute nodes in the specified pool.
* `computeNodeReboot` - Restarts the specified compute node.
* `computeNodeReimage` - Reinstalls the operating system on the specified compute node.
* `computeNodeUpdateUser` - Updates the password or expiration time of a user account on the specified compute node.
* `fileDeleteFromComputeNode` - Deletes the specified task file from the compute node.
* `fileDeleteFromTask` - Deletes the specified task file from the compute node where the task ran.
* `fileGetFromComputeNode` - Gets the content of the specified task file.
* `fileGetFromTask` - Gets the content of the specified task file.
* `fileGetNodeFilePropertiesFromComputeNode` - Gets the properties of the specified compute node file.
* `fileGetNodeFilePropertiesFromTask` - Gets the properties of the specified task file.
* `fileListFromComputeNode` - Lists all of the files in task directories on the specified compute node.
* `fileListFromTask` - Lists the files in a task's directory on its compute node.
* `jobScheduleAdd` - Adds a job schedule to the specified account.
* `jobScheduleDelete` - Deletes a job schedule from the specified account.
* `jobScheduleDisable` - Disables a job schedule.
* `jobScheduleEnable` - Enables a job schedule.
* `jobScheduleExists` - Checks the specified job schedule exists.
* `jobScheduleGet` - Gets information about the specified job schedule.
* `jobScheduleList` - Lists all of the job schedules in the specified account.
* `jobSchedulePatch` - Updates the properties of the specified job schedule.
* `jobScheduleTerminate` - Terminates a job schedule.
* `jobScheduleUpdate` - Updates the properties of the specified job schedule.
* `jobAdd` - Adds a job to the specified account.
* `jobDelete` - Deletes a job.
* `jobDisable` - Disables the specified job, preventing new tasks from running.
* `jobEnable` - Enables the specified job, allowing new tasks to run.
* `jobGet` - Gets information about the specified job.
* `jobGetAllJobsLifetimeStatistics` - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
* `jobList` - Lists all of the jobs in the specified account.
* `jobListFromJobSchedule` - Lists the jobs that have been created under the specified job schedule.
* `jobListPreparationAndReleaseTaskStatus` - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
* `jobPatch` - Updates the properties of a job.
* `jobTerminate` - Terminates the specified job, marking it as completed.
* `jobUpdate` - Updates the properties of a job.
* `poolAdd` - Adds a pool to the specified account.
* `poolDelete` - Deletes a pool from the specified account.
* `poolDisableAutoScale` - Disables automatic scaling for a pool.
* `poolEnableAutoScale` - Enables automatic scaling for a pool.
* `poolEvaluateAutoScale` - Gets the result of evaluating an automatic scaling formula on the pool.
* `poolExists` - Gets basic properties of a pool.
* `poolGet` - Gets information about the specified pool.
* `poolGetAllPoolsLifetimeStatistics` - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* `poolList` - Lists all of the pools in the specified account.
* `poolListPoolUsageMetrics` - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* `poolPatch` - Updates the properties of a pool.
* `poolRemoveNodes` - Removes compute nodes from the specified pool.
* `poolResize` - Changes the number of compute nodes that are assigned to a pool.
* `poolStopResize` - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* `poolUpdateProperties` - Updates the properties of a pool.
* `poolUpgradeOs` - Upgrades the operating system of the specified pool.
* `taskAdd` - Adds a task to the specified job.
* `taskDelete` - Deletes a task from the specified job.
* `taskGet` - Gets information about the specified task.
* `taskList` - Lists all of the tasks that are associated with the specified job.
* `taskListSubtasks` - Lists all of the subtasks that are associated with the specified multi-instance task.
* `taskTerminate` - Terminates the specified task.
* `taskUpdate` - Updates the properties of the specified task.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
