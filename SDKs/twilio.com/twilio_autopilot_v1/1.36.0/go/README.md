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
    
    req := operations.CreateAssistantRequest{
        Security: operations.CreateAssistantSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateAssistantCreateAssistantRequest{
            CallbackEvents: "impedit",
            CallbackURL: "ut",
            Defaults: "rem",
            FriendlyName: "et",
            LogQueries: false,
            StyleSheet: "odit",
            UniqueName: "aut",
        },
    }
    
    res, err := s.CreateAssistant(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AutopilotV1Assistant != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateAssistant`
* `CreateField`
* `CreateFieldType`
* `CreateFieldValue`
* `CreateModelBuild`
* `CreateQuery`
* `CreateSample`
* `CreateTask`
* `CreateWebhook`
* `DeleteAssistant`
* `DeleteField`
* `DeleteFieldType`
* `DeleteFieldValue`
* `DeleteModelBuild`
* `DeleteQuery`
* `DeleteSample`
* `DeleteTask`
* `DeleteWebhook`
* `FetchAssistant`
* `FetchDefaults`
* `FetchDialogue`
* `FetchField`
* `FetchFieldType`
* `FetchFieldValue`
* `FetchModelBuild`
* `FetchQuery`
* `FetchSample`
* `FetchStyleSheet` - Returns Style sheet JSON object for the Assistant
* `FetchTask`
* `FetchTaskActions` - Returns JSON actions for the Task.
* `FetchTaskStatistics`
* `FetchWebhook`
* `ListAssistant`
* `ListField`
* `ListFieldType`
* `ListFieldValue`
* `ListModelBuild`
* `ListQuery`
* `ListSample`
* `ListTask`
* `ListWebhook`
* `UpdateAssistant`
* `UpdateDefaults`
* `UpdateFieldType`
* `UpdateModelBuild`
* `UpdateQuery`
* `UpdateRestoreAssistant`
* `UpdateSample`
* `UpdateStyleSheet` - Updates the style sheet for an Assistant identified by `assistant_sid`.
* `UpdateTask`
* `UpdateTaskActions` - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* `UpdateWebhook`

<!-- End SDK Available Operations -->