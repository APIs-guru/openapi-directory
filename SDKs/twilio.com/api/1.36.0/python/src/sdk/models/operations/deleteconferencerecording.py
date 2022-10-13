from dataclasses import dataclass, field
from typing import Optional
DELETE_CONFERENCE_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteConferenceRecordingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteConferenceRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteConferenceRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteConferenceRecordingPathParams = field(default=None)
    security: DeleteConferenceRecordingSecurity = field(default=None)
    

@dataclass
class DeleteConferenceRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
