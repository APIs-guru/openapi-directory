from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIP_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipCredentialListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipCredentialListMappingRequest:
    path_params: FetchSipCredentialListMappingPathParams = field()
    security: FetchSipCredentialListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSipCredentialListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_domain_sip_credential_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipCredentialListMapping] = field(default=None)
    
