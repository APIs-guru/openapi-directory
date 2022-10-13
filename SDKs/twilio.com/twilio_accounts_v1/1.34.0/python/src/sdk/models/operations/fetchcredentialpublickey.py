from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CREDENTIAL_PUBLIC_KEY_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class FetchCredentialPublicKeyPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCredentialPublicKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCredentialPublicKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCredentialPublicKeyPathParams = field(default=None)
    security: FetchCredentialPublicKeySecurity = field(default=None)
    

@dataclass
class FetchCredentialPublicKeyResponses:
    accounts_v1_credential_credential_public_key: Optional[shared.AccountsV1CredentialCredentialPublicKey] = field(default=None)
    

@dataclass
class FetchCredentialPublicKeyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCredentialPublicKeyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
