from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class DeleteAlphaSenderPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlphaSenderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAlphaSenderRequest:
    path_params: DeleteAlphaSenderPathParams = field()
    security: DeleteAlphaSenderSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteAlphaSenderResponse:
    content_type: str = field()
    status_code: int = field()
    
