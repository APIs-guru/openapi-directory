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
    
    req := operations.CreateCommandRequest{
        Security: operations.CreateCommandSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateCommandCreateCommandRequest{
            CallbackMethod: "DELETE",
            CallbackURL: "est",
            Command: "ab",
            CommandMode: "binary",
            DeliveryReceiptRequested: false,
            IncludeSid: "a",
            Sim: "placeat",
        },
    }
    
    res, err := s.CreateCommand(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.WirelessV1Command != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateCommand` - Send a Command to a Sim.
* `CreateRatePlan`
* `DeleteCommand` - Delete a Command instance from your account.
* `DeleteRatePlan`
* `DeleteSim` - Delete a Sim resource on your Account.
* `FetchCommand` - Fetch a Command instance from your account.
* `FetchRatePlan`
* `FetchSim` - Fetch a Sim resource on your Account.
* `ListAccountUsageRecord`
* `ListCommand` - Retrieve a list of Commands from your account.
* `ListDataSession`
* `ListRatePlan`
* `ListSim` - Retrieve a list of Sim resources on your Account.
* `ListUsageRecord`
* `UpdateRatePlan`
* `UpdateSim` - Updates the given properties of a Sim resource on your Account.

<!-- End SDK Available Operations -->