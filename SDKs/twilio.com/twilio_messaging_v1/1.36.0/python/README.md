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
    
req = operations.CreateAlphaSenderRequest(
    security=operations.CreateAlphaSenderSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateAlphaSenderPathParams(
        service_sid="delectus",
    ),
    request=operations.CreateAlphaSenderCreateAlphaSenderRequest(
        alpha_sender="sunt",
    ),
)
    
res = s.create_alpha_sender(req)

if res.messaging_v1_service_alpha_sender is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateAlphaSender`
* `CreateBrandRegistrations`
* `CreateBrandVetting`
* `CreateExternalCampaign`
* `CreatePhoneNumber`
* `CreateService`
* `CreateShortCode`
* `CreateTollfreeVerification`
* `CreateUsAppToPerson`
* `DeleteAlphaSender`
* `DeletePhoneNumber`
* `DeleteService`
* `DeleteShortCode`
* `DeleteUsAppToPerson`
* `FetchAlphaSender`
* `FetchBrandRegistrations`
* `FetchBrandVetting`
* `FetchDeactivation` - Fetch a list of all United States numbers that have been deactivated on a specific date.
* `FetchPhoneNumber`
* `FetchService`
* `FetchShortCode`
* `FetchTollfreeVerification`
* `FetchUsAppToPerson`
* `FetchUsAppToPersonUsecase`
* `FetchUsecase`
* `ListAlphaSender`
* `ListBrandRegistrations`
* `ListBrandVetting`
* `ListPhoneNumber`
* `ListService`
* `ListShortCode`
* `ListTollfreeVerification`
* `ListUsAppToPerson`
* `UpdateBrandRegistrations`
* `UpdateService`

<!-- End SDK Available Operations -->