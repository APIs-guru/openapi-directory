from dataclasses import dataclass, field
from typing import Optional
DELETE_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class DeleteCredentialPublicKeyPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialPublicKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialPublicKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCredentialPublicKeyPathParams = field(default=None)
    security: DeleteCredentialPublicKeySecurity = field(default=None)
    

@dataclass
class DeleteCredentialPublicKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
