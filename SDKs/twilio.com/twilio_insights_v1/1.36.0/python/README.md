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
    
req = operations.FetchAccountSettingsRequest(
    security=operations.FetchAccountSettingsSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    query_params=operations.FetchAccountSettingsQueryParams(
        subaccount_sid="totam",
    ),
)
    
res = s.fetch_account_settings(req)

if res.insights_v1_account_settings is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `FetchAccountSettings`
* `FetchAnnotation` - Fetch a specific Annotation.
* `FetchCall`
* `FetchConference` - Fetch a specific Conference.
* `FetchConferenceParticipant` - Fetch a specific Conference Participant Summary.
* `FetchSummary`
* `FetchVideoParticipantSummary` - Get Video Log Analyzer data for a Room Participant.
* `FetchVideoRoomSummary` - Get Video Log Analyzer data for a Room.
* `ListCallSummaries`
* `ListConference` - Retrieve a list of Conferences.
* `ListConferenceParticipant` - List Conference Participants.
* `ListEvent`
* `ListMetric`
* `ListVideoParticipantSummary` - Get a list of room participants.
* `ListVideoRoomSummary` - Get a list of Programmable Video Rooms.
* `UpdateAccountSettings`
* `UpdateAnnotation` - Create/Update the annotation for the call

<!-- End SDK Available Operations -->