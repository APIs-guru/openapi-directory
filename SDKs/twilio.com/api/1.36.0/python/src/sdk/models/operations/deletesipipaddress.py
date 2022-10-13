from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SIP_IP_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipIPAddressPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    ip_access_control_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'IpAccessControlListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipIPAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipIPAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSipIPAddressPathParams = field(default=None)
    security: DeleteSipIPAddressSecurity = field(default=None)
    

@dataclass
class DeleteSipIPAddressResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
