from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CREDENTIAL_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateCredentialPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCredentialPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCredentialSecurity = field(default=None)
    

@dataclass
class UpdateCredentialResponses:
    conversations_v1_credential: Optional[shared.ConversationsV1Credential] = field(default=None)
    

@dataclass
class UpdateCredentialResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateCredentialResponses]] = field(default=None)
    status_code: int = field(default=None)
    
