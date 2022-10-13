from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipCredentialPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSipCredentialPathParams = field(default=None)
    security: FetchSipCredentialSecurity = field(default=None)
    

@dataclass
class FetchSipCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_credential_list_sip_credential: Optional[shared.APIV2010AccountSipSipCredentialListSipCredential] = field(default=None)
    
