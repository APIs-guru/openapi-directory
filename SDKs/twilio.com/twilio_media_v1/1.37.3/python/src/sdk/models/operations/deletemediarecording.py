from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_MEDIA_RECORDING_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class DeleteMediaRecordingPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMediaRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMediaRecordingRequest:
    path_params: DeleteMediaRecordingPathParams = field()
    security: DeleteMediaRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteMediaRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    
