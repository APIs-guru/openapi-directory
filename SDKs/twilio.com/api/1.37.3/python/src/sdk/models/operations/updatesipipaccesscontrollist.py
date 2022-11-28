from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipIPAccessControlListPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipIPAccessControlListUpdateSipIPAccessControlListRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateSipIPAccessControlListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipIPAccessControlListRequest:
    path_params: UpdateSipIPAccessControlListPathParams = field()
    security: UpdateSipIPAccessControlListSecurity = field()
    request: Optional[UpdateSipIPAccessControlListUpdateSipIPAccessControlListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSipIPAccessControlListResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_ip_access_control_list: Optional[shared.APIV2010AccountSipSipIPAccessControlList] = field(default=None)
    
