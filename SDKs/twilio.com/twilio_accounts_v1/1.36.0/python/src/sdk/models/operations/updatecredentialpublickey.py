from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class UpdateCredentialPublicKeyPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateCredentialPublicKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCredentialPublicKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCredentialPublicKeyPathParams = field(default=None)
    request: Optional[UpdateCredentialPublicKeyUpdateCredentialPublicKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCredentialPublicKeySecurity = field(default=None)
    

@dataclass
class UpdateCredentialPublicKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    accounts_v1_credential_credential_public_key: Optional[shared.AccountsV1CredentialCredentialPublicKey] = field(default=None)
    
