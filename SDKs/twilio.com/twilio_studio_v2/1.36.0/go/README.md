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
    
    req := operations.CreateExecutionRequest{
        Security: operations.CreateExecutionSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateExecutionPathParams{
            FlowSid: "tenetur",
        },
        Request: &operations.CreateExecutionCreateExecutionRequest{
            From: "voluptate",
            Parameters: "iure",
            To: "ab",
        },
    }
    
    res, err := s.CreateExecution(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StudioV2FlowExecution != nil {
        // handle response
    }
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