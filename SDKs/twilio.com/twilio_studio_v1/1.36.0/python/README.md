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
    
req = operations.CreateEngagementRequest(
    security=operations.CreateEngagementSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateEngagementPathParams(
        flow_sid="qui",
    ),
    request=operations.CreateEngagementCreateEngagementRequest(
        from_="vel",
        parameters="id",
        to="rerum",
    ),
)
    
res = s.create_engagement(req)

if res.studio_v1_flow_engagement is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateEngagement` - Triggers a new Engagement for the Flow
* `CreateExecution` - Triggers a new Execution for the Flow
* `DeleteEngagement` - Delete this Engagement and all Steps relating to it.
* `DeleteExecution` - Delete the Execution and all Steps relating to it.
* `DeleteFlow` - Delete a specific Flow.
* `FetchEngagement` - Retrieve an Engagement
* `FetchEngagementContext` - Retrieve the most recent context for an Engagement.
* `FetchExecution` - Retrieve an Execution
* `FetchExecutionContext` - Retrieve the most recent context for an Execution.
* `FetchExecutionStep` - Retrieve a Step.
* `FetchExecutionStepContext` - Retrieve the context for an Execution Step.
* `FetchFlow` - Retrieve a specific Flow.
* `FetchStep` - Retrieve a Step.
* `FetchStepContext` - Retrieve the context for an Engagement Step.
* `ListEngagement` - Retrieve a list of all Engagements for the Flow.
* `ListExecution` - Retrieve a list of all Executions for the Flow.
* `ListExecutionStep` - Retrieve a list of all Steps for an Execution.
* `ListFlow` - Retrieve a list of all Flows.
* `ListStep` - Retrieve a list of all Steps for an Engagement.
* `UpdateExecution` - Update the status of an Execution to `ended`.

<!-- End SDK Available Operations -->