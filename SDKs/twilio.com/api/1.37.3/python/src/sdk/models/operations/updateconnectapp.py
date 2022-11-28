from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateConnectAppPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConnectAppRequest:
    path_params: UpdateConnectAppPathParams = field()
    security: UpdateConnectAppSecurity = field()
    request: Optional[UpdateConnectAppUpdateConnectAppRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateConnectAppResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_connect_app: Optional[shared.APIV2010AccountConnectApp] = field(default=None)
    
