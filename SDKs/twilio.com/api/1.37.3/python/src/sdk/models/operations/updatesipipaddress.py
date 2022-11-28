from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipIPAddressPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = field(metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipIPAddressUpdateSipIPAddressRequest:
    cidr_prefix_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CidrPrefixLength' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    ip_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IpAddress' }})
    

@dataclass
class UpdateSipIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipIPAddressRequest:
    path_params: UpdateSipIPAddressPathParams = field()
    security: UpdateSipIPAddressSecurity = field()
    request: Optional[UpdateSipIPAddressUpdateSipIPAddressRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSipIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address: Optional[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress] = field(default=None)
    
