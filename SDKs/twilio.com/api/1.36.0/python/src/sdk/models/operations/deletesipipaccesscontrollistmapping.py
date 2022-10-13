from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SIP_IP_ACCESS_CONTROL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipIPAccessControlListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipIPAccessControlListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipIPAccessControlListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSipIPAccessControlListMappingPathParams = field(default=None)
    security: DeleteSipIPAccessControlListMappingSecurity = field(default=None)
    

@dataclass
class DeleteSipIPAccessControlListMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
