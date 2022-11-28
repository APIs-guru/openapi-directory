from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipIPAccessControlListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipIPAccessControlListMappingRequest:
    path_params: FetchSipIPAccessControlListMappingPathParams = field()
    security: FetchSipIPAccessControlListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSipIPAccessControlListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping] = field(default=None)
    
