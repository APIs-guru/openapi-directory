from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class DeleteOriginationURLPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteOriginationURLSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteOriginationURLRequest:
    path_params: DeleteOriginationURLPathParams = field()
    security: DeleteOriginationURLSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteOriginationURLResponse:
    content_type: str = field()
    status_code: int = field()
    
