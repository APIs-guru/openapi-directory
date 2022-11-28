from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipIPAddressPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = field(metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipIPAddressCreateSipIPAddressRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    ip_address: str = field(metadata={'form': { 'field_name': 'IpAddress' }})
    cidr_prefix_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CidrPrefixLength' }})
    

@dataclass
class CreateSipIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipIPAddressRequest:
    path_params: CreateSipIPAddressPathParams = field()
    security: CreateSipIPAddressSecurity = field()
    request: Optional[CreateSipIPAddressCreateSipIPAddressRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSipIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address: Optional[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress] = field(default=None)
    
