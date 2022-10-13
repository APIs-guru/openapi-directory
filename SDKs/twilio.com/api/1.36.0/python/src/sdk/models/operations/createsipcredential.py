from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipCredentialPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipCredentialRequestBodyCreateSipCredentialRequest:
    password: str = field(default=None, metadata={'form': { 'field_name': 'Password' }})
    username: str = field(default=None, metadata={'form': { 'field_name': 'Username' }})
    

@dataclass
class CreateSipCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipCredentialPathParams = field(default=None)
    request: Optional[CreateSipCredentialRequestBodyCreateSipCredentialRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipCredentialSecurity = field(default=None)
    

@dataclass
class CreateSipCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_credential_list_sip_credential: Optional[shared.APIV2010AccountSipSipCredentialListSipCredential] = field(default=None)
    
