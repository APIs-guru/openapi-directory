from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipIPAccessControlListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipIPAccessControlListPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipIPAccessControlListSecurity = field(default=None)
    

@dataclass
class CreateSipIPAccessControlListResponses:
    api_v2010_account_sip_sip_ip_access_control_list: Optional[shared.APIV2010AccountSipSipIPAccessControlList] = field(default=None)
    

@dataclass
class CreateSipIPAccessControlListResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSipIPAccessControlListResponses]] = field(default=None)
    status_code: int = field(default=None)
    
