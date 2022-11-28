# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```go
package main

import (
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
	s := sdk.New()
    
    req := operations.CreateByocTrunkRequest{
        Security: operations.CreateByocTrunkSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateByocTrunkCreateByocTrunkRequest{
            CnamLookupEnabled: false,
            ConnectionPolicySid: "odio",
            FriendlyName: "nesciunt",
            FromDomainSid: "quae",
            StatusCallbackMethod: "POST",
            StatusCallbackURL: "consectetur",
            VoiceFallbackMethod: "GET",
            VoiceFallbackURL: "non",
            VoiceMethod: "PUT",
            VoiceURL: "voluptatibus",
        },
    }
    
    res, err := s.CreateByocTrunk(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VoiceV1ByocTrunk != nil {
        // handle response
    }
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