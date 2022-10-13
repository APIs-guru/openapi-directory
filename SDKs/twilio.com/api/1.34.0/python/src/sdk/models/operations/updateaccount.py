from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateAccountPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAccountSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAccountRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAccountPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAccountSecurity = field(default=None)
    

@dataclass
class UpdateAccountResponses:
    api_v2010_account: Optional[shared.APIV2010Account] = field(default=None)
    

@dataclass
class UpdateAccountResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateAccountResponses]] = field(default=None)
    status_code: int = field(default=None)
    
