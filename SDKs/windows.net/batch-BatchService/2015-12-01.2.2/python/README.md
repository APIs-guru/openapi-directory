# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ApplicationGetRequest(
    path_params=operations.ApplicationGetPathParams(
        application_id="velit",
    ),
    query_params=operations.ApplicationGetQueryParams(
        api_version="qui",
        timeout=512565698074373009,
    ),
    headers=operations.ApplicationGetHeaders(
        client_request_id="est",
        ocp_date="mollitia",
        return_client_request_id=False,
    ),
)
    
res = s.sdk.application_get(req)

if res.application_summary is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `application_get` - Gets information about the specified application.
* `application_list` - Lists all of the applications available in the specified account.
* `certificate_add` - Adds a certificate to the specified account.
* `certificate_cancel_deletion` - Cancels a failed deletion of a certificate from the specified account.
* `certificate_delete` - Deletes a certificate from the specified account.
* `certificate_get` - Gets information about the specified certificate.
* `certificate_list` - Lists all of the certificates that have been added to the specified account.
* `compute_node_add_user` - Adds a user account to the specified compute node.
* `compute_node_delete_user` - Deletes a user account from the specified compute node.
* `compute_node_disable_scheduling` - Disable task scheduling of the specified compute node.
* `compute_node_enable_scheduling` - Enable task scheduling of the specified compute node.
* `compute_node_get` - Gets information about the specified compute node.
* `compute_node_get_remote_desktop` - Gets the Remote Desktop Protocol file for the specified compute node.
* `compute_node_list` - Lists the compute nodes in the specified pool.
* `compute_node_reboot` - Restarts the specified compute node.
* `compute_node_reimage` - Reinstalls the operating system on the specified compute node.
* `compute_node_update_user` - Updates the password or expiration time of a user account on the specified compute node.
* `file_delete_from_compute_node` - Deletes the specified task file from the compute node.
* `file_delete_from_task` - Deletes the specified task file from the compute node where the task ran.
* `file_get_from_compute_node` - Gets the content of the specified task file.
* `file_get_from_task` - Gets the content of the specified task file.
* `file_get_node_file_properties_from_compute_node` - Gets the properties of the specified compute node file.
* `file_get_node_file_properties_from_task` - Gets the properties of the specified task file.
* `file_list_from_compute_node` - Lists all of the files in task directories on the specified compute node.
* `file_list_from_task` - Lists the files in a task's directory on its compute node.
* `job_schedule_add` - Adds a job schedule to the specified account.
* `job_schedule_delete` - Deletes a job schedule from the specified account.
* `job_schedule_disable` - Disables a job schedule.
* `job_schedule_enable` - Enables a job schedule.
* `job_schedule_exists` - Checks the specified job schedule exists.
* `job_schedule_get` - Gets information about the specified job schedule.
* `job_schedule_list` - Lists all of the job schedules in the specified account.
* `job_schedule_patch` - Updates the properties of the specified job schedule.
* `job_schedule_terminate` - Terminates a job schedule.
* `job_schedule_update` - Updates the properties of the specified job schedule.
* `job_add` - Adds a job to the specified account.
* `job_delete` - Deletes a job.
* `job_disable` - Disables the specified job, preventing new tasks from running.
* `job_enable` - Enables the specified job, allowing new tasks to run.
* `job_get` - Gets information about the specified job.
* `job_get_all_jobs_lifetime_statistics` - Gets lifetime summary statistics for all of the jobs in the specified account. Statistics are aggregated across all jobs that have ever existed in the account, from account creation to the last update time of the statistics.
* `job_list` - Lists all of the jobs in the specified account.
* `job_list_from_job_schedule` - Lists the jobs that have been created under the specified job schedule.
* `job_list_preparation_and_release_task_status` - Lists the execution status of the Job Preparation and Job Release task for the specified job across the compute nodes where the job has run.
* `job_patch` - Updates the properties of a job.
* `job_terminate` - Terminates the specified job, marking it as completed.
* `job_update` - Updates the properties of a job.
* `pool_add` - Adds a pool to the specified account.
* `pool_delete` - Deletes a pool from the specified account.
* `pool_disable_auto_scale` - Disables automatic scaling for a pool.
* `pool_enable_auto_scale` - Enables automatic scaling for a pool.
* `pool_evaluate_auto_scale` - Gets the result of evaluating an automatic scaling formula on the pool.
* `pool_exists` - Gets basic properties of a pool.
* `pool_get` - Gets information about the specified pool.
* `pool_get_all_pools_lifetime_statistics` - Gets lifetime summary statistics for all of the pools in the specified account. Statistics are aggregated across all pools that have ever existed in the account, from account creation to the last update time of the statistics.
* `pool_list` - Lists all of the pools in the specified account.
* `pool_list_pool_usage_metrics` - Lists the usage metrics, aggregated by pool across individual time intervals, for the specified account.
* `pool_patch` - Updates the properties of a pool.
* `pool_remove_nodes` - Removes compute nodes from the specified pool.
* `pool_resize` - Changes the number of compute nodes that are assigned to a pool.
* `pool_stop_resize` - Stops an ongoing resize operation on the pool. This does not restore the pool to its previous state before the resize operation: it only stops any further changes being made, and the pool maintains its current state.
* `pool_update_properties` - Updates the properties of a pool.
* `pool_upgrade_os` - Upgrades the operating system of the specified pool.
* `task_add` - Adds a task to the specified job.
* `task_delete` - Deletes a task from the specified job.
* `task_get` - Gets information about the specified task.
* `task_list` - Lists all of the tasks that are associated with the specified job.
* `task_list_subtasks` - Lists all of the subtasks that are associated with the specified multi-instance task.
* `task_terminate` - Terminates the specified task.
* `task_update` - Updates the properties of the specified task.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
