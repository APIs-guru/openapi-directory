from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_APPLICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateApplicationPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateApplicationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateApplicationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateApplicationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateApplicationSecurity = field(default=None)
    

@dataclass
class CreateApplicationResponses:
    api_v2010_account_application: Optional[shared.APIV2010AccountApplication] = field(default=None)
    

@dataclass
class CreateApplicationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateApplicationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
