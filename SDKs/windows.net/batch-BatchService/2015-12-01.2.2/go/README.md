# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ApplicationGetRequest{
        PathParams: operations.ApplicationGetPathParams{
            ApplicationID: "velit",
        },
        QueryParams: operations.ApplicationGetQueryParams{
            APIVersion: "qui",
            Timeout: 512565698074373009,
        },
        Headers: operations.ApplicationGetHeaders{
            ClientRequestID: "est",
            OcpDate: "mollitia",
            ReturnClientRequestID: false,
        },
    }
    
    res, err := s.Sdk.ApplicationGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplicationSummary != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `ApplicationGet` - Gets information about the specified application.
* `ApplicationList` - Lists all of the applications available in the specified account.
* `CertificateAdd` - Adds a certificate to the specified account.
* `CertificateCancelDeletion` - Cancels a failed deletion of a certificate from the specified account.
* `CertificateDelete` - Deletes a certificate from the specified account.
* `CertificateGet` - Gets information about the specified certificate.
* `CertificateList` - Lists all of the certificates that have been added to the specified account.
* `ComputeNodeAddUser` - Adds a user account to the specified compute node.
* `ComputeNodeDeleteUser` - Deletes a user account from the specified compute node.
* `ComputeNodeDisableScheduling` - Disable task scheduling of the specified compute node.
* `ComputeNodeEnableScheduling` - Enable task scheduling of the specified compute node.
* `ComputeNodeGet` - Gets information about the specified compute node.
* `ComputeNodeGetRemoteDesktop` - Gets the Remote Desktop Protocol file for the specified compute node.
* `ComputeNodeList` - Lists the compute nodes in the specified pool.
* `ComputeNodeReboot` - Restarts the specified compute node.
* `ComputeNodeReimage` - Reinstalls the operating system on the specified compute node.
* `ComputeNodeUpdateUser` - Updates the password or expiration time of a user account on the specified compute node.
* `FileDeleteFromComputeNode` - Deletes the specified task file from the compute node.
* `FileDeleteFromTask` - Deletes the specified task file from the compute node where the task ran.
* `FileGetFromComputeNode` - Gets the content of the specified task file.
* `FileGetFromTask` - Gets the content of the specified task file.
* `FileGetNodeFilePropertiesFromComputeNode` - Gets the properties of the specified compute node file.
* `FileGetNodeFilePropertiesFromTask` - Gets the properties of the specified task file.
* `FileListFromComputeNode` - Lists all of the files in task directories on the specified compute node.
* `FileListFromTask` - Lists the files in a task's directory on its compute node.
* `JobScheduleAdd` - Adds a job schedule to the specified account.
* `JobScheduleDelete` - Deletes a job schedule from the specified account.
* `JobScheduleDisable` - Disables a job schedule.
* `JobScheduleEnable` - Enables a job schedule.
* `JobScheduleExists` - Checks the specified job schedule exists.
* `JobScheduleGet` - Gets information about the specified job schedule.
* `JobScheduleList` - Lists all of the job schedules in the specified account.
* `JobSchedulePatch` - Updates the properties of the specified job schedule.
* `JobScheduleTerminate` - Terminates a job schedule.
* `JobScheduleUpdate` - Updates the properties of the specified job schedule.
* `JobAdd` - Adds a job to the specified account.
* `JobDelete` - Deletes a job.
* `JobDisable` - Disables the specified job, preventing new tasks from running.
* `JobEnable` - Enables the specified job, allowing new tasks to run.
* `JobGet` - Gets information about the specified job.
* `JobGetAllJobsLifetimeStatistics` - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
* `JobList` - Lists all of the jobs in the specified account.
* `JobListFromJobSchedule` - Lists the jobs that have been created under the specified job schedule.
* `JobListPreparationAndReleaseTaskStatus` - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
* `JobPatch` - Updates the properties of a job.
* `JobTerminate` - Terminates the specified job, marking it as completed.
* `JobUpdate` - Updates the properties of a job.
* `PoolAdd` - Adds a pool to the specified account.
* `PoolDelete` - Deletes a pool from the specified account.
* `PoolDisableAutoScale` - Disables automatic scaling for a pool.
* `PoolEnableAutoScale` - Enables automatic scaling for a pool.
* `PoolEvaluateAutoScale` - Gets the result of evaluating an automatic scaling formula on the pool.
* `PoolExists` - Gets basic properties of a pool.
* `PoolGet` - Gets information about the specified pool.
* `PoolGetAllPoolsLifetimeStatistics` - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* `PoolList` - Lists all of the pools in the specified account.
* `PoolListPoolUsageMetrics` - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* `PoolPatch` - Updates the properties of a pool.
* `PoolRemoveNodes` - Removes compute nodes from the specified pool.
* `PoolResize` - Changes the number of compute nodes that are assigned to a pool.
* `PoolStopResize` - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* `PoolUpdateProperties` - Updates the properties of a pool.
* `PoolUpgradeOs` - Upgrades the operating system of the specified pool.
* `TaskAdd` - Adds a task to the specified job.
* `TaskDelete` - Deletes a task from the specified job.
* `TaskGet` - Gets information about the specified task.
* `TaskList` - Lists all of the tasks that are associated with the specified job.
* `TaskListSubtasks` - Lists all of the subtasks that are associated with the specified multi-instance task.
* `TaskTerminate` - Terminates the specified task.
* `TaskUpdate` - Updates the properties of the specified task.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
