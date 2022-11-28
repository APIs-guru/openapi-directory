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
    
req = operations.DeleteAppRequest(
    security=operations.DeleteAppSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.DeleteAppPathParams(
        sid="quibusdam",
    ),
)
    
res = s.delete_app(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `DeleteApp` - Delete a specific App.
* `FetchApp` - Fetch a specific App.
* `FetchDevice` - Fetch a specific Device.
* `ListApp` - Retrieve a list of all Apps for an Account.
* `ListDevice` - Retrieve a list of all Devices registered with the Account.
* `UpdateDevice` - Update a specific Device.

<!-- End SDK Available Operations -->