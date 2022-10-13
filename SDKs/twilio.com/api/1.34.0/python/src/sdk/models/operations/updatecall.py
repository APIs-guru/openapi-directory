from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CALL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateCallPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCallPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCallSecurity = field(default=None)
    

@dataclass
class UpdateCallResponses:
    api_v2010_account_call: Optional[shared.APIV2010AccountCall] = field(default=None)
    

@dataclass
class UpdateCallResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateCallResponses]] = field(default=None)
    status_code: int = field(default=None)
    
