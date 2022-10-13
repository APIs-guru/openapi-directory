from dataclasses import dataclass, field
from typing import Optional
DELETE_RECORDING_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteRecordingTranscriptionPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    recording_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RecordingSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingTranscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRecordingTranscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteRecordingTranscriptionPathParams = field(default=None)
    security: DeleteRecordingTranscriptionSecurity = field(default=None)
    

@dataclass
class DeleteRecordingTranscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
