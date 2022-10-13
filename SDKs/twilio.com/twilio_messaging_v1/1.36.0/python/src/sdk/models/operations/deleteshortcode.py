from dataclasses import dataclass, field
from typing import Optional
DELETE_SHORT_CODE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class DeleteShortCodePathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteShortCodeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteShortCodePathParams = field(default=None)
    security: DeleteShortCodeSecurity = field(default=None)
    

@dataclass
class DeleteShortCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
