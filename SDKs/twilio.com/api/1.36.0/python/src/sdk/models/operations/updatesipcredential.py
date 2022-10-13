from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipCredentialPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipCredentialRequestBodyUpdateSipCredentialRequest:
    password: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Password' }})
    

@dataclass
class UpdateSipCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSipCredentialPathParams = field(default=None)
    request: Optional[UpdateSipCredentialRequestBodyUpdateSipCredentialRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSipCredentialSecurity = field(default=None)
    

@dataclass
class UpdateSipCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_credential_list_sip_credential: Optional[shared.APIV2010AccountSipSipCredentialListSipCredential] = field(default=None)
    
