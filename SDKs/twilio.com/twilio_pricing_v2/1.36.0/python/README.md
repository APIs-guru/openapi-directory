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
    
req = operations.FetchTrunkingCountryRequest(
    security=operations.FetchTrunkingCountrySecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.FetchTrunkingCountryPathParams(
        iso_country="ducimus",
    ),
)
    
res = s.fetch_trunking_country(req)

if res.pricing_v2_trunking_country_instance is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchTrunkingCountry` - Fetch a specific Country.
* `FetchTrunkingNumber` - Fetch pricing information for a specific destination and, optionally, origination phone number.
* `FetchVoiceCountry` - Fetch a specific Country.
* `FetchVoiceNumber` - Fetch pricing information for a specific destination and, optionally, origination phone number.
* `ListTrunkingCountry`
* `ListVoiceCountry`

<!-- End SDK Available Operations -->