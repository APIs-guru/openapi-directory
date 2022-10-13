from dataclasses import dataclass, field
from typing import Optional
DELETE_CREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteCredentialPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCredentialPathParams = field(default=None)
    security: DeleteCredentialSecurity = field(default=None)
    

@dataclass
class DeleteCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
