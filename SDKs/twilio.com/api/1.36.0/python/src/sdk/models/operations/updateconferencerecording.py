from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CONFERENCE_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConferenceRecordingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConferenceRecordingRequestBodyUpdateConferenceRecordingRequest:
    pause_behavior: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PauseBehavior' }})
    status: shared.ConferenceRecordingEnumStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateConferenceRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConferenceRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConferenceRecordingPathParams = field(default=None)
    request: Optional[UpdateConferenceRecordingRequestBodyUpdateConferenceRecordingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConferenceRecordingSecurity = field(default=None)
    

@dataclass
class UpdateConferenceRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_conference_conference_recording: Optional[shared.APIV2010AccountConferenceConferenceRecording] = field(default=None)
    
