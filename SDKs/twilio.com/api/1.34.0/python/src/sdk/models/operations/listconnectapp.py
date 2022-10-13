from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CONNECT_APP_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListConnectAppPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConnectAppQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConnectAppSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListConnectAppRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListConnectAppPathParams = field(default=None)
    query_params: ListConnectAppQueryParams = field(default=None)
    security: ListConnectAppSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListConnectApp200ApplicationJSONListConnectAppResponse:
    connect_apps: Optional[List[shared.APIV2010AccountConnectApp]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connect_apps' }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListConnectAppResponses:
    list_connect_app_response: Optional[ListConnectApp200ApplicationJSONListConnectAppResponse] = field(default=None)
    

@dataclass
class ListConnectAppResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListConnectAppResponses]] = field(default=None)
    status_code: int = field(default=None)
    
