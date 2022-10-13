from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipIPAccessControlListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSipIPAccessControlListPathParams = field(default=None)
    security: FetchSipIPAccessControlListSecurity = field(default=None)
    

@dataclass
class FetchSipIPAccessControlListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_ip_access_control_list: Optional[shared.APIV2010AccountSipSipIPAccessControlList] = field(default=None)
    
