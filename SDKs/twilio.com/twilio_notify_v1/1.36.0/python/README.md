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
    
req = operations.CreateBindingRequest(
    security=operations.CreateBindingSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateBindingPathParams(
        service_sid="sint",
    ),
    request=operations.CreateBindingCreateBindingRequest(
        address="laborum",
        binding_type="sms",
        credential_sid="et",
        endpoint="et",
        identity="magni",
        notification_protocol_version="fuga",
        tag=[
            "autem",
            "dolorum",
            "deserunt",
        ],
    ),
)
    
res = s.create_binding(req)

if res.notify_v1_service_binding is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateBinding`
* `CreateCredential`
* `CreateNotification`
* `CreateService`
* `DeleteBinding`
* `DeleteCredential`
* `DeleteService`
* `FetchBinding`
* `FetchCredential`
* `FetchService`
* `ListBinding`
* `ListCredential`
* `ListService`
* `UpdateCredential`
* `UpdateService`

<!-- End SDK Available Operations -->