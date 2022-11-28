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
    
    req := operations.CreateExportCustomJobRequest{
        Security: operations.CreateExportCustomJobSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateExportCustomJobPathParams{
            ResourceType: "quo",
        },
        Request: &operations.CreateExportCustomJobCreateExportCustomJobRequest{
            Email: "cupiditate",
            EndDay: "quo",
            FriendlyName: "nemo",
            StartDay: "recusandae",
            WebhookMethod: "qui",
            WebhookURL: "et",
        },
    }
    
    res, err := s.CreateExportCustomJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BulkexportsV1ExportExportCustomJob != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateExportCustomJob`
* `DeleteJob`
* `FetchDay` - Fetch a specific Day.
* `FetchExport` - Fetch a specific Export.
* `FetchExportConfiguration` - Fetch a specific Export Configuration.
* `FetchJob`
* `ListDay` - Retrieve a list of all Days for a resource.
* `ListExportCustomJob`
* `UpdateExportConfiguration` - Update a specific Export Configuration.

<!-- End SDK Available Operations -->