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
    
req = operations.CreateExportCustomJobRequest(
    security=operations.CreateExportCustomJobSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateExportCustomJobPathParams(
        resource_type="quo",
    ),
    request=operations.CreateExportCustomJobCreateExportCustomJobRequest(
        email="cupiditate",
        end_day="quo",
        friendly_name="nemo",
        start_day="recusandae",
        webhook_method="qui",
        webhook_url="et",
    ),
)
    
res = s.create_export_custom_job(req)

if res.bulkexports_v1_export_export_custom_job is not None:
    # handle response
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