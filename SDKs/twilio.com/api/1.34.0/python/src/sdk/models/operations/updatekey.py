from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateKeyPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateKeyPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateKeySecurity = field(default=None)
    

@dataclass
class UpdateKeyResponses:
    api_v2010_account_key: Optional[shared.APIV2010AccountKey] = field(default=None)
    

@dataclass
class UpdateKeyResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateKeyResponses]] = field(default=None)
    status_code: int = field(default=None)
    
