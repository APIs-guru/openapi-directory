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
    
    req := operations.CreateChannelRequest{
        Security: operations.CreateChannelSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        PathParams: operations.CreateChannelPathParams{
            ServiceSid: "quae",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "true",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "voluptas",
            CreatedBy: "quia",
            DateCreated: "1972-10-29T22:43:28Z",
            DateUpdated: "2021-09-22T02:07:42Z",
            FriendlyName: "temporibus",
            Type: "public",
            UniqueName: "autem",
        },
    }
    
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.IPMessagingV2ServiceChannel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateChannel`
* `CreateChannelWebhook`
* `CreateCredential`
* `CreateInvite`
* `CreateMember`
* `CreateMessage`
* `CreateRole`
* `CreateService`
* `CreateUser`
* `DeleteBinding`
* `DeleteChannel`
* `DeleteChannelWebhook`
* `DeleteCredential`
* `DeleteInvite`
* `DeleteMember`
* `DeleteMessage`
* `DeleteRole`
* `DeleteService`
* `DeleteUser`
* `DeleteUserBinding`
* `DeleteUserChannel`
* `FetchBinding`
* `FetchChannel`
* `FetchChannelWebhook`
* `FetchCredential`
* `FetchInvite`
* `FetchMember`
* `FetchMessage`
* `FetchRole`
* `FetchService`
* `FetchUser`
* `FetchUserBinding`
* `FetchUserChannel`
* `ListBinding`
* `ListChannel`
* `ListChannelWebhook`
* `ListCredential`
* `ListInvite`
* `ListMember`
* `ListMessage`
* `ListRole`
* `ListService`
* `ListUser`
* `ListUserBinding`
* `ListUserChannel`
* `UpdateChannel`
* `UpdateChannelWebhook`
* `UpdateCredential`
* `UpdateMember`
* `UpdateMessage`
* `UpdateRole`
* `UpdateService`
* `UpdateUser`
* `UpdateUserChannel`

<!-- End SDK Available Operations -->