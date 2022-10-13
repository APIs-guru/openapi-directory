from dataclasses import dataclass, field
from typing import List,Optional
DELETE_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class DeleteIPAccessControlListPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteIPAccessControlListPathParams = field(default=None)
    security: DeleteIPAccessControlListSecurity = field(default=None)
    

@dataclass
class DeleteIPAccessControlListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
