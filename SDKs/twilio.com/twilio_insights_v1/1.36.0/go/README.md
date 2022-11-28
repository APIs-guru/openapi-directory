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
    
    req := operations.FetchAccountSettingsRequest{
        Security: operations.FetchAccountSettingsSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        QueryParams: operations.FetchAccountSettingsQueryParams{
            SubaccountSid: "totam",
        },
    }
    
    res, err := s.FetchAccountSettings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InsightsV1AccountSettings != nil {
        // handle response
    }
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