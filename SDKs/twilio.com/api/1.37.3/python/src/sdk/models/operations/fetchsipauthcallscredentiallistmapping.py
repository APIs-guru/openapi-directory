from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIP_AUTH_CALLS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipAuthCallsCredentialListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipAuthCallsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipAuthCallsCredentialListMappingRequest:
    path_params: FetchSipAuthCallsCredentialListMappingPathParams = field()
    security: FetchSipAuthCallsCredentialListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSipAuthCallsCredentialListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_domain_sip_auth_sip_auth_calls_sip_auth_calls_credential_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping] = field(default=None)
    
