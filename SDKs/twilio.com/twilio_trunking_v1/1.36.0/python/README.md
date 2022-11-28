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
    
req = operations.CreateCredentialListRequest(
    security=operations.CreateCredentialListSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateCredentialListPathParams(
        trunk_sid="adipisci",
    ),
    request=operations.CreateCredentialListCreateCredentialListRequest(
        credential_list_sid="consequatur",
    ),
)
    
res = s.create_credential_list(req)

if res.trunking_v1_trunk_credential_list is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateCredentialList`
* `CreateIpAccessControlList` - Associate an IP Access Control List with a Trunk
* `CreateOriginationUrl`
* `CreatePhoneNumber`
* `CreateTrunk`
* `DeleteCredentialList`
* `DeleteIpAccessControlList` - Remove an associated IP Access Control List from a Trunk
* `DeleteOriginationUrl`
* `DeletePhoneNumber`
* `DeleteTrunk`
* `FetchCredentialList`
* `FetchIpAccessControlList`
* `FetchOriginationUrl`
* `FetchPhoneNumber`
* `FetchRecording`
* `FetchTrunk`
* `ListCredentialList`
* `ListIpAccessControlList` - List all IP Access Control Lists for a Trunk
* `ListOriginationUrl`
* `ListPhoneNumber`
* `ListTrunk`
* `UpdateOriginationUrl`
* `UpdateRecording`
* `UpdateTrunk`

<!-- End SDK Available Operations -->