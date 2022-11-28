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
    
req = operations.UpdateChannelRequest(
    security=operations.UpdateChannelSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.UpdateChannelPathParams(
        service_sid="explicabo",
        sid="in",
    ),
    headers=operations.UpdateChannelHeaders(
        x_twilio_webhook_enabled="true",
    ),
    request=operations.UpdateChannelUpdateChannelRequest(
        messaging_service_sid="accusamus",
        type="private",
    ),
)
    
res = s.update_channel(req)

if res.chat_v3_channel is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `UpdateChannel` - Update a specific Channel.

<!-- End SDK Available Operations -->