from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipIPAddressPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipIPAddressRequestBodyUpdateSipIPAddressRequest:
    cidr_prefix_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CidrPrefixLength' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    ip_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'IpAddress' }})
    

@dataclass
class UpdateSipIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipIPAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSipIPAddressPathParams = field(default=None)
    request: Optional[UpdateSipIPAddressRequestBodyUpdateSipIPAddressRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSipIPAddressSecurity = field(default=None)
    

@dataclass
class UpdateSipIPAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address: Optional[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress] = field(default=None)
    
