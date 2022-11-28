from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_TRANSCRIPTION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteTranscriptionPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTranscriptionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTranscriptionRequest:
    path_params: DeleteTranscriptionPathParams = field()
    security: DeleteTranscriptionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteTranscriptionResponse:
    content_type: str = field()
    status_code: int = field()
    
