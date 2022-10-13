from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCredentialSecurity = field(default=None)
    

@dataclass
class CreateCredentialResponses:
    chat_v2_credential: Optional[shared.ChatV2Credential] = field(default=None)
    

@dataclass
class CreateCredentialResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCredentialResponses]] = field(default=None)
    status_code: int = field(default=None)
    
