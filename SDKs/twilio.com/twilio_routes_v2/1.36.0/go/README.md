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
    
    req := operations.FetchPhoneNumberRequest{
        Security: operations.FetchPhoneNumberSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchPhoneNumberPathParams{
            PhoneNumber: "adipisci",
        },
    }
    
    res, err := s.FetchPhoneNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.RoutesV2PhoneNumber != nil {
        // handle response
    }
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