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
        phone_number="culpa",
    ),
    query_params=operations.FetchPhoneNumberQueryParams(
        add_ons=[
            "sint",
            "tempora",
        ],
        add_ons_data={
            "voluptas": "voluptas",
            "est": "pariatur",
        },
        country_code="quia",
        type=[
            "est",
            "nisi",
        ],
    ),
)
    
res = s.fetch_phone_number(req)

if res.lookups_v1_phone_number is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchPhoneNumber`

<!-- End SDK Available Operations -->