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
    
req = operations.CreateByocTrunkRequest(
    security=operations.CreateByocTrunkSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateByocTrunkCreateByocTrunkRequest(
        cnam_lookup_enabled=False,
        connection_policy_sid="odio",
        friendly_name="nesciunt",
        from_domain_sid="quae",
        status_callback_method="POST",
        status_callback_url="consectetur",
        voice_fallback_method="GET",
        voice_fallback_url="non",
        voice_method="PUT",
        voice_url="voluptatibus",
    ),
)
    
res = s.create_byoc_trunk(req)

if res.voice_v1_byoc_trunk is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateByocTrunk`
* `CreateConnectionPolicy`
* `CreateConnectionPolicyTarget`
* `CreateDialingPermissionsCountryBulkUpdate` - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `CreateIpRecord`
* `CreateSourceIpMapping`
* `DeleteArchivedCall` - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* `DeleteByocTrunk`
* `DeleteConnectionPolicy`
* `DeleteConnectionPolicyTarget`
* `DeleteIpRecord`
* `DeleteSourceIpMapping`
* `FetchByocTrunk`
* `FetchConnectionPolicy`
* `FetchConnectionPolicyTarget`
* `FetchDialingPermissionsCountry` - Retrieve voice dialing country permissions identified by the given ISO country code
* `FetchDialingPermissionsSettings` - Retrieve voice dialing permissions inheritance for the sub-account
* `FetchIpRecord`
* `FetchSourceIpMapping`
* `ListByocTrunk`
* `ListConnectionPolicy`
* `ListConnectionPolicyTarget`
* `ListDialingPermissionsCountry` - Retrieve all voice dialing country permissions for this account
* `ListDialingPermissionsHrsPrefixes` - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `ListIpRecord`
* `ListSourceIpMapping`
* `UpdateByocTrunk`
* `UpdateConnectionPolicy`
* `UpdateConnectionPolicyTarget`
* `UpdateDialingPermissionsSettings` - Update voice dialing permissions inheritance for the sub-account
* `UpdateIpRecord`
* `UpdateSourceIpMapping`

<!-- End SDK Available Operations -->