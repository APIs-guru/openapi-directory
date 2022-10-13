from dataclasses import dataclass, field
from typing import Optional
DELETE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class DeleteOriginationURLPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOriginationURLSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteOriginationURLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteOriginationURLPathParams = field(default=None)
    security: DeleteOriginationURLSecurity = field(default=None)
    

@dataclass
class DeleteOriginationURLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
