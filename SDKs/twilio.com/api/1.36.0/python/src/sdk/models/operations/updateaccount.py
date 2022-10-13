from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateAccountPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAccountRequestBodyUpdateAccountRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.AccountEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateAccountSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAccountRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAccountPathParams = field(default=None)
    request: Optional[UpdateAccountRequestBodyUpdateAccountRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAccountSecurity = field(default=None)
    

@dataclass
class UpdateAccountResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account: Optional[shared.APIV2010Account] = field(default=None)
    
