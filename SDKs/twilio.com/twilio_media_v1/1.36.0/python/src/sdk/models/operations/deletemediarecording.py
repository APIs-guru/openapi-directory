from dataclasses import dataclass, field
from typing import Optional
DELETE_MEDIA_RECORDING_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class DeleteMediaRecordingPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMediaRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMediaRecordingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteMediaRecordingPathParams = field(default=None)
    security: DeleteMediaRecordingSecurity = field(default=None)
    

@dataclass
class DeleteMediaRecordingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
