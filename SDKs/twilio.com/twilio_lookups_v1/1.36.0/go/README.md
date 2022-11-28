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
            PhoneNumber: "culpa",
        },
        QueryParams: operations.FetchPhoneNumberQueryParams{
            AddOns: []string{
                "sint",
                "tempora",
            },
            AddOnsData: map[string]interface{}{
                "voluptas": "voluptas",
                "est": "pariatur",
            },
            CountryCode: "quia",
            Type: []string{
                "est",
                "nisi",
            },
        },
    }
    
    res, err := s.FetchPhoneNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV1PhoneNumber != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchPhoneNumber`

<!-- End SDK Available Operations -->