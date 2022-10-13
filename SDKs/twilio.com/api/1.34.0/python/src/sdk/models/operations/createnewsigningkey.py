from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_NEW_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateNewSigningKeyPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNewSigningKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNewSigningKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateNewSigningKeyPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNewSigningKeySecurity = field(default=None)
    

@dataclass
class CreateNewSigningKeyResponses:
    api_v2010_account_new_signing_key: Optional[shared.APIV2010AccountNewSigningKey] = field(default=None)
    

@dataclass
class CreateNewSigningKeyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateNewSigningKeyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
