from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_MEDIA_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteMediaPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMediaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMediaRequest:
    path_params: DeleteMediaPathParams = field()
    security: DeleteMediaSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteMediaResponse:
    content_type: str = field()
    status_code: int = field()
    
