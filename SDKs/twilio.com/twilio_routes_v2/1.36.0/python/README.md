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
    
req = operations.FetchPhoneNumberRequest(
    security=operations.FetchPhoneNumberSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchPhoneNumberPathParams(
        phone_number="adipisci",
    ),
)
    
res = s.fetch_phone_number(req)

if res.routes_v2_phone_number is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchPhoneNumber` - Fetch the Inbound Processing Region assigned to a phone number.
* `FetchSipDomain`
* `FetchTrunks` - Fetch the Inbound Processing Region assigned to a SIP Trunk.
* `UpdatePhoneNumber` - Assign an Inbound Processing Region to a phone number.
* `UpdateSipDomain`
* `UpdateTrunks` - Assign an Inbound Processing Region to a SIP Trunk

<!-- End SDK Available Operations -->