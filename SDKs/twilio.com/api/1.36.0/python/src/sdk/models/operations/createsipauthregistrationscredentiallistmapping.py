from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SIP_AUTH_REGISTRATIONS_CREDENTIAL_LIST_MAPPING_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipAuthRegistrationsCredentialListMappingPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    domain_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'DomainSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest:
    credential_list_sid: str = field(default=None, metadata={'form': { 'field_name': 'CredentialListSid' }})
    

@dataclass
class CreateSipAuthRegistrationsCredentialListMappingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipAuthRegistrationsCredentialListMappingRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipAuthRegistrationsCredentialListMappingPathParams = field(default=None)
    request: Optional[CreateSipAuthRegistrationsCredentialListMappingCreateSipAuthRegistrationsCredentialListMappingRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipAuthRegistrationsCredentialListMappingSecurity = field(default=None)
    

@dataclass
class CreateSipAuthRegistrationsCredentialListMappingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_domain_sip_auth_sip_auth_registrations_sip_auth_registrations_credential_list_mapping: Optional[shared.APIV2010AccountSipSipDomainSipAuthSipAuthRegistrationsSipAuthRegistrationsCredentialListMapping] = field(default=None)
    
