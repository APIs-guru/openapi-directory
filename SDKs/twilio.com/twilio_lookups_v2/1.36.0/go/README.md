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
            PhoneNumber: "laboriosam",
        },
        QueryParams: operations.FetchPhoneNumberQueryParams{
            CountryCode: "voluptates",
            Fields: "qui",
        },
    }
    
    res, err := s.FetchPhoneNumber(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupsV2PhoneNumber != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchPhoneNumber`

<!-- End SDK Available Operations -->