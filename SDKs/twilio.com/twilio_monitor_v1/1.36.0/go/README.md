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
    
    req := operations.FetchAlertRequest{
        Security: operations.FetchAlertSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.FetchAlertPathParams{
            Sid: "ut",
        },
    }
    
    res, err := s.FetchAlert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.MonitorV1AlertInstance != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchAlert`
* `FetchEvent`
* `ListAlert`
* `ListEvent` - Returns a list of events in the account, sorted by event-date.

<!-- End SDK Available Operations -->