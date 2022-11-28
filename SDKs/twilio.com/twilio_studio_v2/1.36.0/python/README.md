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
    
req = operations.CreateExecutionRequest(
    security=operations.CreateExecutionSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateExecutionPathParams(
        flow_sid="tenetur",
    ),
    request=operations.CreateExecutionCreateExecutionRequest(
        from_="voluptate",
        parameters="iure",
        to="ab",
    ),
)
    
res = s.create_execution(req)

if res.studio_v2_flow_execution is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateExecution` - Triggers a new Execution for the Flow
* `CreateFlow` - Create a Flow.
* `DeleteExecution` - Delete the Execution and all Steps relating to it.
* `DeleteFlow` - Delete a specific Flow.
* `FetchExecution` - Retrieve an Execution
* `FetchExecutionContext` - Retrieve the most recent context for an Execution.
* `FetchExecutionStep` - Retrieve a Step.
* `FetchExecutionStepContext` - Retrieve the context for an Execution Step.
* `FetchFlow` - Retrieve a specific Flow.
* `FetchFlowRevision` - Retrieve a specific Flow revision.
* `FetchTestUser` - Fetch flow test users
* `ListExecution` - Retrieve a list of all Executions for the Flow.
* `ListExecutionStep` - Retrieve a list of all Steps for an Execution.
* `ListFlow` - Retrieve a list of all Flows.
* `ListFlowRevision` - Retrieve a list of all Flows revisions.
* `UpdateExecution` - Update the status of an Execution to `ended`.
* `UpdateFlow` - Update a Flow.
* `UpdateFlowValidate` - Validate flow JSON definition
* `UpdateTestUser` - Update flow test users

<!-- End SDK Available Operations -->