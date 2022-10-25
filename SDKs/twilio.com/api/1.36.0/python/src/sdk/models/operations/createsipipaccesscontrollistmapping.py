from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipIPAccessControlListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest:
    ip_access_control_list_sid: str = field(default=None, metadata={'form': { 'field_name': 'IpAccessControlListSid' }})
    

@dataclass
class CreateSipIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipIPAccessControlListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipIPAccessControlListMappingPathParams = field(default=None)
    request: Optional[CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipIPAccessControlListMappingSecurity = field(default=None)
    

@dataclass
class CreateSipIPAccessControlListMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping] = field(default=None)
    
