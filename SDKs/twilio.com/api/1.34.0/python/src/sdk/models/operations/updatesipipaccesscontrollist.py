from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipIPAccessControlListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipIPAccessControlListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSipIPAccessControlListPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSipIPAccessControlListSecurity = field(default=None)
    

@dataclass
class UpdateSipIPAccessControlListResponses:
    api_v2010_account_sip_sip_ip_access_control_list: Optional[shared.APIV2010AccountSipSipIPAccessControlList] = field(default=None)
    

@dataclass
class UpdateSipIPAccessControlListResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateSipIPAccessControlListResponses]] = field(default=None)
    status_code: int = field(default=None)
    
