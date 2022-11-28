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
    
req = operations.CreateChannelRequest(
    security=operations.CreateChannelSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateChannelPathParams(
        service_sid="quae",
    ),
    headers=operations.CreateChannelHeaders(
        x_twilio_webhook_enabled="true",
    ),
    request=operations.CreateChannelCreateChannelRequest(
        attributes="voluptas",
        created_by="quia",
        date_created="1972-10-29T22:54:32Z",
        date_updated="2021-09-22T02:18:46Z",
        friendly_name="temporibus",
        type="public",
        unique_name="autem",
    ),
)
    
res = s.create_channel(req)

if res.ip_messaging_v2_service_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateChannel`
* `CreateChannelWebhook`
* `CreateCredential`
* `CreateInvite`
* `CreateMember`
* `CreateMessage`
* `CreateRole`
* `CreateService`
* `CreateUser`
* `DeleteBinding`
* `DeleteChannel`
* `DeleteChannelWebhook`
* `DeleteCredential`
* `DeleteInvite`
* `DeleteMember`
* `DeleteMessage`
* `DeleteRole`
* `DeleteService`
* `DeleteUser`
* `DeleteUserBinding`
* `DeleteUserChannel`
* `FetchBinding`
* `FetchChannel`
* `FetchChannelWebhook`
* `FetchCredential`
* `FetchInvite`
* `FetchMember`
* `FetchMessage`
* `FetchRole`
* `FetchService`
* `FetchUser`
* `FetchUserBinding`
* `FetchUserChannel`
* `ListBinding`
* `ListChannel`
* `ListChannelWebhook`
* `ListCredential`
* `ListInvite`
* `ListMember`
* `ListMessage`
* `ListRole`
* `ListService`
* `ListUser`
* `ListUserBinding`
* `ListUserChannel`
* `UpdateChannel`
* `UpdateChannelWebhook`
* `UpdateCredential`
* `UpdateMember`
* `UpdateMessage`
* `UpdateRole`
* `UpdateService`
* `UpdateUser`
* `UpdateUserChannel`

<!-- End SDK Available Operations -->