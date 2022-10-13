from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipIPAccessControlListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipIPAccessControlListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSipIPAccessControlListMappingPathParams = field(default=None)
    security: FetchSipIPAccessControlListMappingSecurity = field(default=None)
    

@dataclass
class FetchSipIPAccessControlListMappingResponses:
    api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping] = field(default=None)
    

@dataclass
class FetchSipIPAccessControlListMappingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSipIPAccessControlListMappingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
