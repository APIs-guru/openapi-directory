from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class DeleteCredentialPublicKeyPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialPublicKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialPublicKeyRequest:
    path_params: DeleteCredentialPublicKeyPathParams = field()
    security: DeleteCredentialPublicKeySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCredentialPublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
