from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_APPLICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateApplicationPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateApplicationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateApplicationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateApplicationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateApplicationSecurity = field(default=None)
    

@dataclass
class UpdateApplicationResponses:
    api_v2010_account_application: Optional[shared.APIV2010AccountApplication] = field(default=None)
    

@dataclass
class UpdateApplicationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateApplicationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
