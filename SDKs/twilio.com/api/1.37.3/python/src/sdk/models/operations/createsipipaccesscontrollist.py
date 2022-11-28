from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipIPAccessControlListPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipIPAccessControlListCreateSipIPAccessControlListRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateSipIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipIPAccessControlListRequest:
    path_params: CreateSipIPAccessControlListPathParams = field()
    security: CreateSipIPAccessControlListSecurity = field()
    request: Optional[CreateSipIPAccessControlListCreateSipIPAccessControlListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSipIPAccessControlListResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_ip_access_control_list: Optional[shared.APIV2010AccountSipSipIPAccessControlList] = field(default=None)
    
