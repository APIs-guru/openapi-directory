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
    
    req := operations.CreateAccessTokenRequest{
        Security: operations.CreateAccessTokenSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateAccessTokenPathParams{
            ServiceSid: "repudiandae",
        },
        Request: &operations.CreateAccessTokenCreateAccessTokenRequest{
            FactorFriendlyName: "id",
            FactorType: "push",
            Identity: "rerum",
            TTL: 2124318611030317575,
        },
    }
    
    res, err := s.CreateAccessToken(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VerifyV2ServiceAccessToken != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateAccessToken` - Create a new enrollment Access Token for the Entity
* `CreateBucket` - Create a new Bucket for a Rate Limit
* `CreateChallenge` - Create a new Challenge for the Factor
* `CreateEntity` - Create a new Entity for the Service
* `CreateMessagingConfiguration` - Create a new MessagingConfiguration for a service.
* `CreateNewFactor` - Create a new Factor for the Entity
* `CreateNotification` - Create a new Notification for the corresponding Challenge
* `CreateRateLimit` - Create a new Rate Limit for a Service
* `CreateSafelist` - Add a new phone number to SafeList.
* `CreateService` - Create a new Verification Service.
* `CreateVerification` - Create a new Verification using a Service
* `CreateVerificationCheck` - challenge a specific Verification Check.
* `CreateWebhook` - Create a new Webhook for the Service
* `DeleteBucket` - Delete a specific Bucket.
* `DeleteEntity` - Delete a specific Entity.
* `DeleteFactor` - Delete a specific Factor.
* `DeleteMessagingConfiguration` - Delete a specific MessagingConfiguration.
* `DeleteRateLimit` - Delete a specific Rate Limit.
* `DeleteSafelist` - Remove a phone number from SafeList.
* `DeleteService` - Delete a specific Verification Service Instance.
* `DeleteWebhook` - Delete a specific Webhook.
* `FetchAccessToken` - Fetch an Access Token for the Entity
* `FetchBucket` - Fetch a specific Bucket.
* `FetchChallenge` - Fetch a specific Challenge.
* `FetchEntity` - Fetch a specific Entity.
* `FetchFactor` - Fetch a specific Factor.
* `FetchForm` - Fetch the forms for a specific Form Type.
* `FetchMessagingConfiguration` - Fetch a specific MessagingConfiguration.
* `FetchRateLimit` - Fetch a specific Rate Limit.
* `FetchSafelist` - Check if a phone number exists in SafeList.
* `FetchService` - Fetch specific Verification Service Instance.
* `FetchVerification` - Fetch a specific Verification
* `FetchVerificationAttempt` - Fetch a specific verification attempt.
* `FetchVerificationAttemptsSummary` - Get a summary of how many attempts were made and how many were converted.
* `FetchWebhook` - Fetch a specific Webhook.
* `ListBucket` - Retrieve a list of all Buckets for a Rate Limit.
* `ListChallenge` - Retrieve a list of all Challenges for a Factor.
* `ListEntity` - Retrieve a list of all Entities for a Service.
* `ListFactor` - Retrieve a list of all Factors for an Entity.
* `ListMessagingConfiguration` - Retrieve a list of all Messaging Configurations for a Service.
* `ListRateLimit` - Retrieve a list of all Rate Limits for a service.
* `ListService` - Retrieve a list of all Verification Services for an account.
* `ListVerificationAttempt` - List all the verification attempts for a given Account.
* `ListVerificationTemplate` - List all the available templates for a given Account.
* `ListWebhook` - Retrieve a list of all Webhooks for a Service.
* `UpdateBucket` - Update a specific Bucket.
* `UpdateChallenge` - Verify a specific Challenge.
* `UpdateFactor` - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
* `UpdateMessagingConfiguration` - Update a specific MessagingConfiguration
* `UpdateRateLimit` - Update a specific Rate Limit.
* `UpdateService` - Update a specific Verification Service.
* `UpdateVerification` - Update a Verification status
* `UpdateWebhook`

<!-- End SDK Available Operations -->