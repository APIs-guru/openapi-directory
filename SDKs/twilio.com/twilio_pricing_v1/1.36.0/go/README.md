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
    
    req := operations.FetchMessagingCountryRequest{
        Security: operations.FetchMessagingCountrySecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchMessagingCountryPathParams{
            IsoCountry: "earum",
        },
    }
    
    res, err := s.FetchMessagingCountry(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.PricingV1MessagingMessagingCountryInstance != nil {
        // handle response
    }
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