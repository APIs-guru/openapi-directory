from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipAuthRegistrationsCredentialListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipAuthRegistrationsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipAuthRegistrationsCredentialListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSipAuthRegistrationsCredentialListMappingPathParams = field(default=None)
    security: DeleteSipAuthRegistrationsCredentialListMappingSecurity = field(default=None)
    

@dataclass
class DeleteSipAuthRegistrationsCredentialListMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
