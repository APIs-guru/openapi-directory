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
    
req = operations.CreateAssistantRequest(
    security=operations.CreateAssistantSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateAssistantCreateAssistantRequest(
        callback_events="impedit",
        callback_url="ut",
        defaults="rem",
        friendly_name="et",
        log_queries=False,
        style_sheet="odit",
        unique_name="aut",
    ),
)
    
res = s.create_assistant(req)

if res.autopilot_v1_assistant is not None:
    # handle response
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