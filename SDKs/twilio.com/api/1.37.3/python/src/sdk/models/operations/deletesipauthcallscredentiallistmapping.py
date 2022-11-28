from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipAuthCallsCredentialListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipAuthCallsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipAuthCallsCredentialListMappingRequest:
    path_params: DeleteSipAuthCallsCredentialListMappingPathParams = field()
    security: DeleteSipAuthCallsCredentialListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSipAuthCallsCredentialListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    
