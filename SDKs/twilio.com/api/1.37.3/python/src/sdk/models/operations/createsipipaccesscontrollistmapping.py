from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipIPAccessControlListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest:
    ip_access_control_list_sid: str = field(metadata={'form': { 'field_name': 'IpAccessControlListSid' }})
    

@dataclass
class CreateSipIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipIPAccessControlListMappingRequest:
    path_params: CreateSipIPAccessControlListMappingPathParams = field()
    security: CreateSipIPAccessControlListMappingSecurity = field()
    request: Optional[CreateSipIPAccessControlListMappingCreateSipIPAccessControlListMappingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSipIPAccessControlListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_domain_sip_ip_access_control_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipIPAccessControlListMapping] = field(default=None)
    
