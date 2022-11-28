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
    
    req := operations.CreateCompositionRequest{
        Security: operations.CreateCompositionSecurity{
            AccountSidAuthToken: shared.SchemeAccountSidAuthToken{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        },
        Request: &operations.CreateCompositionCreateCompositionRequest{
            AudioSources: []string{
                "molestiae",
            },
            AudioSourcesExcluded: []string{
                "vitae",
                "tempora",
            },
            Format: "webm",
            Resolution: "cumque",
            RoomSid: "facere",
            StatusCallback: "totam",
            StatusCallbackMethod: "HEAD",
            Trim: true,
            VideoLayout: "quis",
        },
    }
    
    res, err := s.CreateComposition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoV1Composition != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateComposition`
* `CreateCompositionHook`
* `CreateCompositionSettings`
* `CreateRecordingSettings`
* `CreateRoom`
* `DeleteComposition` - Delete a Recording Composition resource identified by a Composition SID.
* `DeleteCompositionHook` - Delete a Recording CompositionHook resource identified by a `CompositionHook SID`.
* `DeleteRecording` - Delete a Recording resource identified by a Recording SID.
* `DeleteRoomRecording`
* `FetchComposition` - Returns a single Composition resource identified by a Composition SID.
* `FetchCompositionHook` - Returns a single CompositionHook resource identified by a CompositionHook SID.
* `FetchCompositionSettings`
* `FetchRecording` - Returns a single Recording resource identified by a Recording SID.
* `FetchRecordingSettings`
* `FetchRoom`
* `FetchRoomParticipant`
* `FetchRoomParticipantPublishedTrack` - Returns a single Track resource represented by TrackName or SID.
* `FetchRoomParticipantSubscribeRule` - Returns a list of Subscribe Rules for the Participant.
* `FetchRoomParticipantSubscribedTrack` - Returns a single Track resource represented by `track_sid`.  Note: This is one resource with the Video API that requires a SID, be Track Name on the subscriber side is not guaranteed to be unique.
* `FetchRoomRecording`
* `FetchRoomRecordingRule` - Returns a list of Recording Rules for the Room.
* `ListComposition` - List of all Recording compositions.
* `ListCompositionHook` - List of all Recording CompositionHook resources.
* `ListRecording` - List of all Track recordings.
* `ListRoom`
* `ListRoomParticipant`
* `ListRoomParticipantPublishedTrack` - Returns a list of tracks associated with a given Participant. Only `currently` Published Tracks are in the list resource.
* `ListRoomParticipantSubscribedTrack` - Returns a list of tracks that are subscribed for the participant.
* `ListRoomRecording`
* `UpdateCompositionHook`
* `UpdateRoom`
* `UpdateRoomParticipant`
* `UpdateRoomParticipantAnonymize`
* `UpdateRoomParticipantSubscribeRule` - Update the Subscribe Rules for the Participant
* `UpdateRoomRecordingRule` - Update the Recording Rules for the Room

<!-- End SDK Available Operations -->