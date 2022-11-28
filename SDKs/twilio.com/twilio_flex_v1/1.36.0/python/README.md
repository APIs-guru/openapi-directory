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
    
req = operations.CreateChannelRequest(
    security=operations.CreateChannelSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateChannelCreateChannelRequest(
        chat_friendly_name="inventore",
        chat_unique_name="ab",
        chat_user_friendly_name="exercitationem",
        flex_flow_sid="voluptates",
        identity="similique",
        long_lived=True,
        pre_engagement_data="aspernatur",
        target="repellendus",
        task_attributes="et",
        task_sid="amet",
    ),
)
    
res = s.create_channel(req)

if res.flex_v1_channel is not None:
    # handle response
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