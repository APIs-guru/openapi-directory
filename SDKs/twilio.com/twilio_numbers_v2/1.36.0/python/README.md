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
    
req = operations.CreateBundleRequest(
    security=operations.CreateBundleSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateBundleCreateBundleRequest(
        email="rerum",
        end_user_type="business",
        friendly_name="est",
        iso_country="et",
        number_type="repudiandae",
        regulation_sid="quam",
        status_callback="doloribus",
    ),
)
    
res = s.create_bundle(req)

if res.numbers_v2_regulatory_compliance_bundle is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateBundle` - Create a new Bundle.
* `CreateBundleCopy` - Creates a new copy of a Bundle. It will internally create copies of all the bundle items (identities and documents) of the original bundle
* `CreateEndUser` - Create a new End User.
* `CreateEvaluation` - Creates an evaluation for a bundle
* `CreateItemAssignment` - Create a new Assigned Item.
* `CreateReplaceItems` - Replaces all bundle items in the target bundle (specified in the path) with all the bundle items of the source bundle (specified by the from_bundle_sid body param)
* `CreateSupportingDocument` - Create a new Supporting Document.
* `DeleteBundle` - Delete a specific Bundle.
* `DeleteEndUser` - Delete a specific End User.
* `DeleteItemAssignment` - Remove an Assignment Item Instance.
* `DeleteSupportingDocument` - Delete a specific Supporting Document.
* `FetchBundle` - Fetch a specific Bundle instance.
* `FetchEndUser` - Fetch specific End User Instance.
* `FetchEndUserType` - Fetch a specific End-User Type Instance.
* `FetchEvaluation` - Fetch specific Evaluation Instance.
* `FetchItemAssignment` - Fetch specific Assigned Item Instance.
* `FetchRegulation` - Fetch specific Regulation Instance.
* `FetchSupportingDocument` - Fetch specific Supporting Document Instance.
* `FetchSupportingDocumentType` - Fetch a specific Supporting Document Type Instance.
* `ListBundle` - Retrieve a list of all Bundles for an account.
* `ListBundleCopy` - Retrieve a list of all Bundles Copies for a Bundle.
* `ListEndUser` - Retrieve a list of all End User for an account.
* `ListEndUserType` - Retrieve a list of all End-User Types.
* `ListEvaluation` - Retrieve a list of Evaluations associated to the Bundle resource.
* `ListItemAssignment` - Retrieve a list of all Assigned Items for an account.
* `ListRegulation` - Retrieve a list of all Regulations.
* `ListSupportingDocument` - Retrieve a list of all Supporting Document for an account.
* `ListSupportingDocumentType` - Retrieve a list of all Supporting Document Types.
* `UpdateBundle` - Updates a Bundle in an account.
* `UpdateEndUser` - Update an existing End User.
* `UpdateSupportingDocument` - Update an existing Supporting Document.

<!-- End SDK Available Operations -->