from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SIP_AUTH_CALLS_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipAuthCallsIPAccessControlListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipAuthCallsIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipAuthCallsIPAccessControlListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipAuthCallsIPAccessControlListMappingPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipAuthCallsIPAccessControlListMappingSecurity = field(default=None)
    

@dataclass
class CreateSipAuthCallsIPAccessControlListMappingResponses:
    api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_ip_access_control_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsIPAccessControlListMapping] = field(default=None)
    

@dataclass
class CreateSipAuthCallsIPAccessControlListMappingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSipAuthCallsIPAccessControlListMappingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
