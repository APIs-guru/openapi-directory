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
    
req = operations.CreateMessageInteractionRequest(
    security=operations.CreateMessageInteractionSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateMessageInteractionPathParams(
        participant_sid="illo",
        service_sid="laborum",
        session_sid="suscipit",
    ),
    request=operations.CreateMessageInteractionCreateMessageInteractionRequest(
        body="non",
        media_url=[
            "dicta",
            "fuga",
        ],
    ),
)
    
res = s.create_message_interaction(req)

if res.proxy_v1_service_session_participant_message_interaction is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateMessageInteraction` - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
* `CreateParticipant` - Add a new Participant to the Session
* `CreatePhoneNumber` - Add a Phone Number to a Service's Proxy Number Pool.
* `CreateService` - Create a new Service for Twilio Proxy
* `CreateSession` - Create a new Session
* `CreateShortCode` - Add a Short Code to the Proxy Number Pool for the Service.
* `DeleteInteraction` - Delete a specific Interaction.
* `DeleteParticipant` - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
* `DeletePhoneNumber` - Delete a specific Phone Number from a Service.
* `DeleteService` - Delete a specific Service.
* `DeleteSession` - Delete a specific Session.
* `DeleteShortCode` - Delete a specific Short Code from a Service.
* `FetchInteraction` - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
* `FetchMessageInteraction`
* `FetchParticipant` - Fetch a specific Participant.
* `FetchPhoneNumber` - Fetch a specific Phone Number.
* `FetchService` - Fetch a specific Service.
* `FetchSession` - Fetch a specific Session.
* `FetchShortCode` - Fetch a specific Short Code.
* `ListInteraction` - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
* `ListMessageInteraction`
* `ListParticipant` - Retrieve a list of all Participants in a Session.
* `ListPhoneNumber` - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
* `ListService` - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
* `ListSession` - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
* `ListShortCode` - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
* `UpdatePhoneNumber` - Update a specific Proxy Number.
* `UpdateService` - Update a specific Service.
* `UpdateSession` - Update a specific Session.
* `UpdateShortCode` - Update a specific Short Code.

<!-- End SDK Available Operations -->