from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SIP_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipCredentialListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipCredentialListMappingRequestBodyCreateSipCredentialListMappingRequest:
    credential_list_sid: str = field(default=None, metadata={'form': { 'field_name': 'CredentialListSid' }})
    

@dataclass
class CreateSipCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipCredentialListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipCredentialListMappingPathParams = field(default=None)
    request: Optional[CreateSipCredentialListMappingRequestBodyCreateSipCredentialListMappingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipCredentialListMappingSecurity = field(default=None)
    

@dataclass
class CreateSipCredentialListMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_domain_sip_credential_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipCredentialListMapping] = field(default=None)
    
