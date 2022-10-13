from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipAuthCallsCredentialListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipAuthCallsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipAuthCallsCredentialListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipAuthCallsCredentialListMappingPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipAuthCallsCredentialListMappingSecurity = field(default=None)
    

@dataclass
class CreateSipAuthCallsCredentialListMappingResponses:
    api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping] = field(default=None)
    

@dataclass
class CreateSipAuthCallsCredentialListMappingResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSipAuthCallsCredentialListMappingResponses]] = field(default=None)
    status_code: int = field(default=None)
    
