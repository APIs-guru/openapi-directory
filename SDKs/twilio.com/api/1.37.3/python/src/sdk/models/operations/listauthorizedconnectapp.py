from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_AUTHORIZED_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListAuthorizedConnectAppPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListAuthorizedConnectAppQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAuthorizedConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListAuthorizedConnectAppListAuthorizedConnectAppResponse:
    authorized_connect_apps: Optional[List[shared.APIV2010AccountAuthorizedConnectApp]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorized_connect_apps') }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListAuthorizedConnectAppRequest:
    path_params: ListAuthorizedConnectAppPathParams = field()
    query_params: ListAuthorizedConnectAppQueryParams = field()
    security: ListAuthorizedConnectAppSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListAuthorizedConnectAppResponse:
    content_type: str = field()
    status_code: int = field()
    list_authorized_connect_app_response: Optional[ListAuthorizedConnectAppListAuthorizedConnectAppResponse] = field(default=None)
    
