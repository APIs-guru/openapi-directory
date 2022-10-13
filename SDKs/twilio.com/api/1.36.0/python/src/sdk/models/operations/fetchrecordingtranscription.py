from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_RECORDING_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchRecordingTranscriptionPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    recording_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'RecordingSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRecordingTranscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRecordingTranscriptionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRecordingTranscriptionPathParams = field(default=None)
    security: FetchRecordingTranscriptionSecurity = field(default=None)
    

@dataclass
class FetchRecordingTranscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_recording_recording_transcription: Optional[shared.APIV2010AccountRecordingRecordingTranscription] = field(default=None)
    
