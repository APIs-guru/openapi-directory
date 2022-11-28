from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_RECORDING_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteRecordingPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRecordingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteRecordingRequest:
    path_params: DeleteRecordingPathParams = field()
    security: DeleteRecordingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteRecordingResponse:
    content_type: str = field()
    status_code: int = field()
    
