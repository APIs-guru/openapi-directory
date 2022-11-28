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
    
req = operations.CreateMediaProcessorRequest(
    security=operations.CreateMediaProcessorSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateMediaProcessorCreateMediaProcessorRequest(
        extension="animi",
        extension_context="ut",
        extension_environment="ad",
        max_duration=1820943278312777402,
        status_callback="aut",
        status_callback_method="HEAD",
    ),
)
    
res = s.create_media_processor(req)

if res.media_v1_media_processor is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations
* `CreateMediaProcessor`
* `CreatePlayerStreamer`
* `CreatePlayerStreamerPlaybackGrant`
* `DeleteMediaRecording` - Deletes a MediaRecording resource identified by a SID.
* `FetchMediaProcessor` - Returns a single MediaProcessor resource identified by a SID.
* `FetchMediaRecording` - Returns a single MediaRecording resource identified by a SID.
* `FetchPlayerStreamer` - Returns a single PlayerStreamer resource identified by a SID.
* `FetchPlayerStreamerPlaybackGrant` - **This method is not enabled.** Returns a single PlaybackGrant resource identified by a SID.
* `ListMediaProcessor` - Returns a list of MediaProcessors.
* `ListMediaRecording` - Returns a list of MediaRecordings.
* `ListPlayerStreamer` - Returns a list of PlayerStreamers.
* `UpdateMediaProcessor` - Updates a MediaProcessor resource identified by a SID.
* `UpdatePlayerStreamer` - Updates a PlayerStreamer resource identified by a SID.

<!-- End SDK Available Operations -->