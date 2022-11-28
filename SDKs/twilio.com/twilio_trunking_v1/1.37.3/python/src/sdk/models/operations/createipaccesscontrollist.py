from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreateIPAccessControlListPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateIPAccessControlListCreateIPAccessControlListRequest:
    ip_access_control_list_sid: str = field(metadata={'form': { 'field_name': 'IpAccessControlListSid' }})
    

@dataclass
class CreateIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIPAccessControlListRequest:
    path_params: CreateIPAccessControlListPathParams = field()
    security: CreateIPAccessControlListSecurity = field()
    request: Optional[CreateIPAccessControlListCreateIPAccessControlListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateIPAccessControlListResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk_ip_access_control_list: Optional[shared.TrunkingV1TrunkIPAccessControlList] = field(default=None)
    
