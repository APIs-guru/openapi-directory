from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchIPAccessControlListPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIPAccessControlListRequest:
    path_params: FetchIPAccessControlListPathParams = field()
    security: FetchIPAccessControlListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchIPAccessControlListResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk_ip_access_control_list: Optional[shared.TrunkingV1TrunkIPAccessControlList] = field(default=None)
    
