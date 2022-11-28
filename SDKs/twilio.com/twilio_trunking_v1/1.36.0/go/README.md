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
    
    req := operations.CreateCredentialListRequest{
        Security: operations.CreateCredentialListSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateCredentialListPathParams{
            TrunkSid: "adipisci",
        },
        Request: &operations.CreateCredentialListCreateCredentialListRequest{
            CredentialListSid: "consequatur",
        },
    }
    
    res, err := s.CreateCredentialList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.TrunkingV1TrunkCredentialList != nil {
        // handle response
    }
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