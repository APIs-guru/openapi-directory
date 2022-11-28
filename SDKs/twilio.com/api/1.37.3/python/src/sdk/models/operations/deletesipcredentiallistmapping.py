from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SIP_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipCredentialListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipCredentialListMappingRequest:
    path_params: DeleteSipCredentialListMappingPathParams = field()
    security: DeleteSipCredentialListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSipCredentialListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    
