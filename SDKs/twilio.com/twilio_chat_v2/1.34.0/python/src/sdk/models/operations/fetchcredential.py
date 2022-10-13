from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchCredentialPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCredentialPathParams = field(default=None)
    security: FetchCredentialSecurity = field(default=None)
    

@dataclass
class FetchCredentialResponses:
    chat_v2_credential: Optional[shared.ChatV2Credential] = field(default=None)
    

@dataclass
class FetchCredentialResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCredentialResponses]] = field(default=None)
    status_code: int = field(default=None)
    
