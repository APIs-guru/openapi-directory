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
    
    req := operations.CreateAlphaSenderRequest{
        Security: operations.CreateAlphaSenderSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateAlphaSenderPathParams{
            ServiceSid: "delectus",
        },
        Request: &operations.CreateAlphaSenderCreateAlphaSenderRequest{
            AlphaSender: "sunt",
        },
    }
    
    res, err := s.CreateAlphaSender(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MessagingV1ServiceAlphaSender != nil {
        // handle response
    }
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