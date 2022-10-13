from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SHORT_CODE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateShortCodePathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateShortCodeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateShortCodePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateShortCodeSecurity = field(default=None)
    

@dataclass
class UpdateShortCodeResponses:
    api_v2010_account_short_code: Optional[shared.APIV2010AccountShortCode] = field(default=None)
    

@dataclass
class UpdateShortCodeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateShortCodeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
