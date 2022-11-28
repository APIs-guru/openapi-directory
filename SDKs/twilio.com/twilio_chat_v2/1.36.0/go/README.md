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
            ServiceSid: "unde",
        },
        Headers: operations.CreateChannelHeaders{
            XTwilioWebhookEnabled: "false",
        },
        Request: &operations.CreateChannelCreateChannelRequest{
            Attributes: "et",
            CreatedBy: "commodi",
            DateCreated: "1992-06-11T00:49:50Z",
            DateUpdated: "1989-04-15T09:04:13Z",
            FriendlyName: "labore",
            Type: "private",
            UniqueName: "soluta",
        },
    }
    
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ChatV2ServiceChannel != nil {
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
* `DeleteUserChannel` - Removes User from selected Channel.
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
* `ListUserChannel` - List all Channels for a given User.
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