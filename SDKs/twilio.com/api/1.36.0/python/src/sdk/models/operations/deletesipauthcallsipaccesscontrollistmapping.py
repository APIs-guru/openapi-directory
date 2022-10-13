from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SIP_AUTH_CALLS_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipAuthCallsIPAccessControlListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipAuthCallsIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipAuthCallsIPAccessControlListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSipAuthCallsIPAccessControlListMappingPathParams = field(default=None)
    security: DeleteSipAuthCallsIPAccessControlListMappingSecurity = field(default=None)
    

@dataclass
class DeleteSipAuthCallsIPAccessControlListMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
