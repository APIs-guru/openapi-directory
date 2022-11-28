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
        Request: &operations.CreateChannelCreateChannelRequest{
            ChatFriendlyName: "inventore",
            ChatUniqueName: "ab",
            ChatUserFriendlyName: "exercitationem",
            FlexFlowSid: "voluptates",
            Identity: "similique",
            LongLived: true,
            PreEngagementData: "aspernatur",
            Target: "repellendus",
            TaskAttributes: "et",
            TaskSid: "amet",
        },
    }
    
    res, err := s.CreateChannel(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.FlexV1Channel != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateChannel`
* `CreateFlexFlow`
* `CreateInteraction` - Create a new Interaction.
* `CreateInteractionChannelInvite` - Invite an Agent or a TaskQueue to a Channel.
* `CreateInteractionChannelParticipant` - Add a Participant to a Channel.
* `CreateWebChannel`
* `DeleteChannel`
* `DeleteFlexFlow`
* `DeleteWebChannel`
* `FetchChannel`
* `FetchConfiguration`
* `FetchFlexFlow`
* `FetchInteraction`
* `FetchInteractionChannel` - Fetch a Channel for an Interaction.
* `FetchWebChannel`
* `ListChannel`
* `ListFlexFlow`
* `ListInteractionChannel` - List all Channels for an Interaction.
* `ListInteractionChannelInvite` - List all Invites for a Channel.
* `ListInteractionChannelParticipant` - List all Participants for a Channel.
* `ListWebChannel`
* `UpdateFlexFlow`
* `UpdateInteractionChannel` - Update an existing Interaction Channel.
* `UpdateInteractionChannelParticipant` - Update an existing Channel Participant.
* `UpdateWebChannel`

<!-- End SDK Available Operations -->