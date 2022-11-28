from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONFERENCE_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchConferenceRecordingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchConferenceRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchConferenceRecordingRequest:
    path_params: FetchConferenceRecordingPathParams = field()
    security: FetchConferenceRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchConferenceRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_conference_conference_recording: Optional[shared.APIV2010AccountConferenceConferenceRecording] = field(default=None)
    
