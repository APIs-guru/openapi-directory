# openapi

<!-- Start SDK Installation -->
## SDK Installation
```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateEsimProfileRequest(
    security=operations.CreateEsimProfileSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateEsimProfileCreateEsimProfileRequest(
        callback_method="PATCH",
        callback_url="iusto",
        eid="tenetur",
    ),
)
    
res = s.create_esim_profile(req)

if res.supersim_v1_esim_profile is not None:
    # handle response
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