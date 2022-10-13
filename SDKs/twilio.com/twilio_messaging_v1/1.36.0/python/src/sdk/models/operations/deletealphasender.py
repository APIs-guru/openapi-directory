from dataclasses import dataclass, field
from typing import Optional
DELETE_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class DeleteAlphaSenderPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteAlphaSenderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteAlphaSenderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteAlphaSenderPathParams = field(default=None)
    security: DeleteAlphaSenderSecurity = field(default=None)
    

@dataclass
class DeleteAlphaSenderResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
