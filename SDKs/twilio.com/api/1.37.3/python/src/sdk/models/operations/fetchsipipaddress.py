from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipIPAddressPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = field(metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipIPAddressRequest:
    path_params: FetchSipIPAddressPathParams = field()
    security: FetchSipIPAddressSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSipIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_ip_access_control_list_sip_ip_address: Optional[shared.APIV2010AccountSipSipIPAccessControlListSipIPAddress] = field(default=None)
    
