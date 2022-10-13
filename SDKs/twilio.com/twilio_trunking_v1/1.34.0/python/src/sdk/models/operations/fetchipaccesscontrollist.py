from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchIPAccessControlListPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchIPAccessControlListPathParams = field(default=None)
    security: FetchIPAccessControlListSecurity = field(default=None)
    

@dataclass
class FetchIPAccessControlListResponses:
    trunking_v1_trunk_ip_access_control_list: Optional[shared.TrunkingV1TrunkIPAccessControlList] = field(default=None)
    

@dataclass
class FetchIPAccessControlListResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchIPAccessControlListResponses]] = field(default=None)
    status_code: int = field(default=None)
    
