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
    
    req := operations.DeleteAppRequest{
        Security: operations.DeleteAppSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.DeleteAppPathParams{
            Sid: "quibusdam",
        },
    }
    
    res, err := s.DeleteApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `DeleteApp` - Delete a specific App.
* `FetchApp` - Fetch a specific App.
* `FetchDevice` - Fetch a specific Device.
* `ListApp` - Retrieve a list of all Apps for an Account.
* `ListDevice` - Retrieve a list of all Devices registered with the Account.
* `UpdateDevice` - Update a specific Device.

<!-- End SDK Available Operations -->