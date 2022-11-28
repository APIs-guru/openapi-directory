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
    
    req := operations.CreateEsimProfileRequest{
        Security: operations.CreateEsimProfileSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateEsimProfileCreateEsimProfileRequest{
            CallbackMethod: "PATCH",
            CallbackURL: "iusto",
            Eid: "tenetur",
        },
    }
    
    res, err := s.CreateEsimProfile(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.SupersimV1EsimProfile != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateEsimProfile` - Order an eSIM Profile.
* `CreateFleet` - Create a Fleet
* `CreateIpCommand` - Send an IP Command to a Super SIM.
* `CreateNetworkAccessProfile` - Create a new Network Access Profile
* `CreateNetworkAccessProfileNetwork` - Add a Network resource to the Network Access Profile resource.
* `CreateSim` - Register a Super SIM to your Account
* `CreateSmsCommand` - Send SMS Command to a Sim.
* `DeleteNetworkAccessProfileNetwork` - Remove a Network resource from the Network Access Profile resource's.
* `FetchEsimProfile` - Fetch an eSIM Profile.
* `FetchFleet` - Fetch a Fleet instance from your account.
* `FetchIpCommand` - Fetch IP Command instance from your account.
* `FetchNetwork` - Fetch a Network resource.
* `FetchNetworkAccessProfile` - Fetch a Network Access Profile instance from your account.
* `FetchNetworkAccessProfileNetwork` - Fetch a Network Access Profile resource's Network resource.
* `FetchSim` - Fetch a Super SIM instance from your account.
* `FetchSmsCommand` - Fetch SMS Command instance from your account.
* `ListBillingPeriod` - Retrieve a list of Billing Periods for a Super SIM.
* `ListEsimProfile` - Retrieve a list of eSIM Profiles.
* `ListFleet` - Retrieve a list of Fleets from your account.
* `ListIpCommand` - Retrieve a list of IP Commands from your account.
* `ListNetwork` - Retrieve a list of Network resources.
* `ListNetworkAccessProfile` - Retrieve a list of Network Access Profiles from your account.
* `ListNetworkAccessProfileNetwork` - Retrieve a list of Network Access Profile resource's Network resource.
* `ListSim` - Retrieve a list of Super SIMs from your account.
* `ListSimIpAddress` - Retrieve a list of IP Addresses for the given Super SIM.
* `ListSmsCommand` - Retrieve a list of SMS Commands from your account.
* `ListUsageRecord` - List UsageRecords
* `UpdateFleet` - Updates the given properties of a Super SIM Fleet instance from your account.
* `UpdateNetworkAccessProfile` - Updates the given properties of a Network Access Profile in your account.
* `UpdateSim` - Updates the given properties of a Super SIM instance from your account.

<!-- End SDK Available Operations -->