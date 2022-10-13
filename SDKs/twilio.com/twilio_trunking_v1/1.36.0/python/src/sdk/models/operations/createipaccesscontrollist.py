from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreateIPAccessControlListPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIPAccessControlListRequestBodyCreateIPAccessControlListRequest:
    ip_access_control_list_sid: str = field(default=None, metadata={'form': { 'field_name': 'IpAccessControlListSid' }})
    

@dataclass
class CreateIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateIPAccessControlListPathParams = field(default=None)
    request: Optional[CreateIPAccessControlListRequestBodyCreateIPAccessControlListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIPAccessControlListSecurity = field(default=None)
    

@dataclass
class CreateIPAccessControlListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk_ip_access_control_list: Optional[shared.TrunkingV1TrunkIPAccessControlList] = field(default=None)
    
