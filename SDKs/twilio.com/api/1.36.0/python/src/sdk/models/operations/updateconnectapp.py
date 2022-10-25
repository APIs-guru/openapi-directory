from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
UPDATE_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConnectAppPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
class UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateConnectAppUpdateConnectAppRequest:
    authorize_redirect_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AuthorizeRedirectUrl' }})
    company_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CompanyName' }})
    deauthorize_callback_method: Optional[UpdateConnectAppUpdateConnectAppRequestDeauthorizeCallbackMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'DeauthorizeCallbackMethod' }})
    deauthorize_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DeauthorizeCallbackUrl' }})
    description: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    homepage_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'HomepageUrl' }})
    permissions: Optional[List[shared.ConnectAppEnumPermissionEnum]] = field(default=None, metadata={'form': { 'field_name': 'Permissions' }})
    

@dataclass
class UpdateConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConnectAppRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConnectAppPathParams = field(default=None)
    request: Optional[UpdateConnectAppUpdateConnectAppRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConnectAppSecurity = field(default=None)
    

@dataclass
class UpdateConnectAppResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_connect_app: Optional[shared.APIV2010AccountConnectApp] = field(default=None)
    
