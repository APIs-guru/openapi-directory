from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_NEW_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateNewKeyPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNewKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNewKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateNewKeyPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNewKeySecurity = field(default=None)
    

@dataclass
class CreateNewKeyResponses:
    api_v2010_account_new_key: Optional[shared.APIV2010AccountNewKey] = field(default=None)
    

@dataclass
class CreateNewKeyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateNewKeyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
