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
    
req = operations.CreateActivityRequest(
    security=operations.CreateActivitySecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateActivityPathParams(
        workspace_sid="consectetur",
    ),
    request=operations.CreateActivityCreateActivityRequest(
        available=False,
        friendly_name="porro",
    ),
)
    
res = s.create_activity(req)

if res.taskrouter_v1_workspace_activity is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateActivity`
* `CreateTask`
* `CreateTaskChannel`
* `CreateTaskQueue`
* `CreateWorker`
* `CreateWorkflow`
* `CreateWorkspace`
* `DeleteActivity`
* `DeleteTask`
* `DeleteTaskChannel`
* `DeleteTaskQueue`
* `DeleteWorker`
* `DeleteWorkflow`
* `DeleteWorkspace`
* `FetchActivity`
* `FetchEvent`
* `FetchTask`
* `FetchTaskChannel`
* `FetchTaskQueue`
* `FetchTaskQueueCumulativeStatistics`
* `FetchTaskQueueRealTimeStatistics`
* `FetchTaskQueueStatistics`
* `FetchTaskReservation`
* `FetchWorker`
* `FetchWorkerChannel`
* `FetchWorkerInstanceStatistics`
* `FetchWorkerReservation`
* `FetchWorkerStatistics`
* `FetchWorkersCumulativeStatistics`
* `FetchWorkersRealTimeStatistics`
* `FetchWorkflow`
* `FetchWorkflowCumulativeStatistics`
* `FetchWorkflowRealTimeStatistics`
* `FetchWorkflowStatistics`
* `FetchWorkspace`
* `FetchWorkspaceCumulativeStatistics`
* `FetchWorkspaceRealTimeStatistics`
* `FetchWorkspaceStatistics`
* `ListActivity`
* `ListEvent`
* `ListTask`
* `ListTaskChannel`
* `ListTaskQueue`
* `ListTaskQueuesStatistics`
* `ListTaskReservation`
* `ListWorker`
* `ListWorkerChannel`
* `ListWorkerReservation`
* `ListWorkflow`
* `ListWorkspace`
* `UpdateActivity`
* `UpdateTask`
* `UpdateTaskChannel`
* `UpdateTaskQueue`
* `UpdateTaskReservation`
* `UpdateWorker`
* `UpdateWorkerChannel`
* `UpdateWorkerReservation`
* `UpdateWorkflow`
* `UpdateWorkspace`

<!-- End SDK Available Operations -->