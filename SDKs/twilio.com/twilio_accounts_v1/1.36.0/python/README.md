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
    
req = operations.CreateCredentialAwsRequest(
    security=operations.CreateCredentialAwsSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateCredentialAwsCreateCredentialAwsRequest(
        account_sid="minima",
        credentials="et",
        friendly_name="voluptatem",
    ),
)
    
res = s.create_credential_aws(req)

if res.accounts_v1_credential_credential_aws is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateCredentialAws` - Create a new AWS Credential
* `CreateCredentialPublicKey` - Create a new Public Key Credential
* `CreateSecondaryAuthToken` - Create a new secondary Auth Token
* `DeleteCredentialAws` - Delete a Credential from your account
* `DeleteCredentialPublicKey` - Delete a Credential from your account
* `DeleteSecondaryAuthToken` - Delete the secondary Auth Token from your account
* `FetchCredentialAws` - Fetch the AWS credentials specified by the provided Credential Sid
* `FetchCredentialPublicKey` - Fetch the public key specified by the provided Credential Sid
* `ListCredentialAws` - Retrieves a collection of AWS Credentials belonging to the account used to make the request
* `ListCredentialPublicKey` - Retrieves a collection of Public Key Credentials belonging to the account used to make the request
* `UpdateAuthTokenPromotion` - Promote the secondary Auth Token to primary. After promoting the new token, all requests to Twilio using your old primary Auth Token will result in an error.
* `UpdateCredentialAws` - Modify the properties of a given Account
* `UpdateCredentialPublicKey` - Modify the properties of a given Account

<!-- End SDK Available Operations -->