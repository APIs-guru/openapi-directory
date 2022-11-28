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
    
req = operations.CreateAssetRequest(
    security=operations.CreateAssetSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateAssetPathParams(
        service_sid="iste",
    ),
    request=operations.CreateAssetCreateAssetRequest(
        friendly_name="aut",
    ),
)
    
res = s.create_asset(req)

if res.serverless_v1_service_asset is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateAsset` - Create a new Asset resource.
* `CreateBuild` - Create a new Build resource. At least one function version or asset version is required.
* `CreateDeployment` - Create a new Deployment.
* `CreateEnvironment` - Create a new environment.
* `CreateFunction` - Create a new Function resource.
* `CreateService` - Create a new Service resource.
* `CreateVariable` - Create a new Variable.
* `DeleteAsset` - Delete an Asset resource.
* `DeleteBuild` - Delete a Build resource.
* `DeleteEnvironment` - Delete a specific environment.
* `DeleteFunction` - Delete a Function resource.
* `DeleteService` - Delete a Service resource.
* `DeleteVariable` - Delete a specific Variable.
* `FetchAsset` - Retrieve a specific Asset resource.
* `FetchAssetVersion` - Retrieve a specific Asset Version.
* `FetchBuild` - Retrieve a specific Build resource.
* `FetchBuildStatus` - Retrieve a specific Build resource.
* `FetchDeployment` - Retrieve a specific Deployment.
* `FetchEnvironment` - Retrieve a specific environment.
* `FetchFunction` - Retrieve a specific Function resource.
* `FetchFunctionVersion` - Retrieve a specific Function Version resource.
* `FetchFunctionVersionContent` - Retrieve a the content of a specific Function Version resource.
* `FetchLog` - Retrieve a specific log.
* `FetchService` - Retrieve a specific Service resource.
* `FetchVariable` - Retrieve a specific Variable.
* `ListAsset` - Retrieve a list of all Assets.
* `ListAssetVersion` - Retrieve a list of all Asset Versions.
* `ListBuild` - Retrieve a list of all Builds.
* `ListDeployment` - Retrieve a list of all Deployments.
* `ListEnvironment` - Retrieve a list of all environments.
* `ListFunction` - Retrieve a list of all Functions.
* `ListFunctionVersion` - Retrieve a list of all Function Version resources.
* `ListLog` - Retrieve a list of all logs.
* `ListService` - Retrieve a list of all Services.
* `ListVariable` - Retrieve a list of all Variables.
* `UpdateAsset` - Update a specific Asset resource.
* `UpdateFunction` - Update a specific Function resource.
* `UpdateService` - Update a specific Service resource.
* `UpdateVariable` - Update a specific Variable.

<!-- End SDK Available Operations -->