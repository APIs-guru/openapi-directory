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
    
req = operations.FetchMessagingCountryRequest(
    security=operations.FetchMessagingCountrySecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchMessagingCountryPathParams(
        iso_country="earum",
    ),
)
    
res = s.fetch_messaging_country(req)

if res.pricing_v1_messaging_messaging_country_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchMessagingCountry`
* `FetchPhoneNumberCountry`
* `FetchVoiceCountry`
* `FetchVoiceNumber`
* `ListMessagingCountry`
* `ListPhoneNumberCountry`
* `ListVoiceCountry`

<!-- End SDK Available Operations -->