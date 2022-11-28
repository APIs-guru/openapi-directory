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
        service_sid="unde",
    ),
    headers=operations.CreateChannelHeaders(
        x_twilio_webhook_enabled="false",
    ),
    request=operations.CreateChannelCreateChannelRequest(
        attributes="et",
        created_by="commodi",
        date_created="1992-06-11T01:00:56Z",
        date_updated="1989-04-15T09:15:19Z",
        friendly_name="labore",
        type="private",
        unique_name="soluta",
    ),
)
    
res = s.create_channel(req)

if res.chat_v2_service_channel is not None:
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
* `DeleteUserChannel` - Removes User from selected Channel.
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
* `ListUserChannel` - List all Channels for a given User.
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