from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConnectAppPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConnectAppRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConnectAppPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConnectAppSecurity = field(default=None)
    

@dataclass
class UpdateConnectAppResponses:
    api_v2010_account_connect_app: Optional[shared.APIV2010AccountConnectApp] = field(default=None)
    

@dataclass
class UpdateConnectAppResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateConnectAppResponses]] = field(default=None)
    status_code: int = field(default=None)
    
