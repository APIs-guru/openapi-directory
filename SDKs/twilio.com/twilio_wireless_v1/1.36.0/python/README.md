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
    
req = operations.CreateCommandRequest(
    security=operations.CreateCommandSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateCommandCreateCommandRequest(
        callback_method="DELETE",
        callback_url="est",
        command="ab",
        command_mode="binary",
        delivery_receipt_requested=False,
        include_sid="a",
        sim="placeat",
    ),
)
    
res = s.create_command(req)

if res.wireless_v1_command is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateCommand` - Send a Command to a Sim.
* `CreateRatePlan`
* `DeleteCommand` - Delete a Command instance from your account.
* `DeleteRatePlan`
* `DeleteSim` - Delete a Sim resource on your Account.
* `FetchCommand` - Fetch a Command instance from your account.
* `FetchRatePlan`
* `FetchSim` - Fetch a Sim resource on your Account.
* `ListAccountUsageRecord`
* `ListCommand` - Retrieve a list of Commands from your account.
* `ListDataSession`
* `ListRatePlan`
* `ListSim` - Retrieve a list of Sim resources on your Account.
* `ListUsageRecord`
* `UpdateRatePlan`
* `UpdateSim` - Updates the given properties of a Sim resource on your Account.

<!-- End SDK Available Operations -->