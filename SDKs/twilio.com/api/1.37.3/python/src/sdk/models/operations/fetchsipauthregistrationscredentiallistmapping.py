from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipAuthRegistrationsCredentialListMappingPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipAuthRegistrationsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipAuthRegistrationsCredentialListMappingRequest:
    path_params: FetchSipAuthRegistrationsCredentialListMappingPathParams = field()
    security: FetchSipAuthRegistrationsCredentialListMappingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSipAuthRegistrationsCredentialListMappingResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_domain_sip_auth_sip_auth_registrations_sip_auth_registrations_credential_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping] = field(default=None)
    
