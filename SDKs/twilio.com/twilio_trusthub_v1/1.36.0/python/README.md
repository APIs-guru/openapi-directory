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
    
req = operations.CreateCustomerProfileRequest(
    security=operations.CreateCustomerProfileSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateCustomerProfileCreateCustomerProfileRequest(
        email="sunt",
        friendly_name="ea",
        policy_sid="eius",
        status_callback="consequatur",
    ),
)
    
res = s.create_customer_profile(req)

if res.trusthub_v1_customer_profile is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateCustomerProfile` - Create a new Customer-Profile.
* `CreateCustomerProfileChannelEndpointAssignment` - Create a new Assigned Item.
* `CreateCustomerProfileEntityAssignment` - Create a new Assigned Item.
* `CreateCustomerProfileEvaluation` - Create a new Evaluation
* `CreateEndUser` - Create a new End User.
* `CreateSupportingDocument` - Create a new Supporting Document.
* `CreateTrustProduct` - Create a new Customer-Profile.
* `CreateTrustProductChannelEndpointAssignment` - Create a new Assigned Item.
* `CreateTrustProductEntityAssignment` - Create a new Assigned Item.
* `CreateTrustProductEvaluation` - Create a new Evaluation
* `DeleteCustomerProfile` - Delete a specific Customer-Profile.
* `DeleteCustomerProfileChannelEndpointAssignment` - Remove an Assignment Item Instance.
* `DeleteCustomerProfileEntityAssignment` - Remove an Assignment Item Instance.
* `DeleteEndUser` - Delete a specific End User.
* `DeleteSupportingDocument` - Delete a specific Supporting Document.
* `DeleteTrustProduct` - Delete a specific Customer-Profile.
* `DeleteTrustProductChannelEndpointAssignment` - Remove an Assignment Item Instance.
* `DeleteTrustProductEntityAssignment` - Remove an Assignment Item Instance.
* `FetchCustomerProfile` - Fetch a specific Customer-Profile instance.
* `FetchCustomerProfileChannelEndpointAssignment` - Fetch specific Assigned Item Instance.
* `FetchCustomerProfileEntityAssignment` - Fetch specific Assigned Item Instance.
* `FetchCustomerProfileEvaluation` - Fetch specific Evaluation Instance.
* `FetchEndUser` - Fetch specific End User Instance.
* `FetchEndUserType` - Fetch a specific End-User Type Instance.
* `FetchPolicies` - Fetch specific Policy Instance.
* `FetchSupportingDocument` - Fetch specific Supporting Document Instance.
* `FetchSupportingDocumentType` - Fetch a specific Supporting Document Type Instance.
* `FetchTrustProduct` - Fetch a specific Customer-Profile instance.
* `FetchTrustProductChannelEndpointAssignment` - Fetch specific Assigned Item Instance.
* `FetchTrustProductEntityAssignment` - Fetch specific Assigned Item Instance.
* `FetchTrustProductEvaluation` - Fetch specific Evaluation Instance.
* `ListCustomerProfile` - Retrieve a list of all Customer-Profiles for an account.
* `ListCustomerProfileChannelEndpointAssignment` - Retrieve a list of all Assigned Items for an account.
* `ListCustomerProfileEntityAssignment` - Retrieve a list of all Assigned Items for an account.
* `ListCustomerProfileEvaluation` - Retrieve a list of Evaluations associated to the customer_profile resource.
* `ListEndUser` - Retrieve a list of all End User for an account.
* `ListEndUserType` - Retrieve a list of all End-User Types.
* `ListPolicies` - Retrieve a list of all Policys.
* `ListSupportingDocument` - Retrieve a list of all Supporting Document for an account.
* `ListSupportingDocumentType` - Retrieve a list of all Supporting Document Types.
* `ListTrustProduct` - Retrieve a list of all Customer-Profiles for an account.
* `ListTrustProductChannelEndpointAssignment` - Retrieve a list of all Assigned Items for an account.
* `ListTrustProductEntityAssignment` - Retrieve a list of all Assigned Items for an account.
* `ListTrustProductEvaluation` - Retrieve a list of Evaluations associated to the trust_product resource.
* `UpdateCustomerProfile` - Updates a Customer-Profile in an account.
* `UpdateEndUser` - Update an existing End User.
* `UpdateSupportingDocument` - Update an existing Supporting Document.
* `UpdateTrustProduct` - Updates a Customer-Profile in an account.

<!-- End SDK Available Operations -->