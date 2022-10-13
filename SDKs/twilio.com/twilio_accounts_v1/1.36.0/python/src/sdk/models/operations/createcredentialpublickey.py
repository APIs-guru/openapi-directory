from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class CreateCredentialPublicKeyRequestBodyCreateCredentialPublicKeyRequest:
    account_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    public_key: str = field(default=None, metadata={'form': { 'field_name': 'PublicKey' }})
    

@dataclass
class CreateCredentialPublicKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialPublicKeyRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateCredentialPublicKeyRequestBodyCreateCredentialPublicKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCredentialPublicKeySecurity = field(default=None)
    

@dataclass
class CreateCredentialPublicKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    accounts_v1_credential_credential_public_key: Optional[shared.AccountsV1CredentialCredentialPublicKey] = field(default=None)
    
