from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_LOG_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class ListLogPathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListLogQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    function_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FunctionSid', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ListLogSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListLogRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListLogPathParams = field(default=None)
    query_params: ListLogQueryParams = field(default=None)
    security: ListLogSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListLog200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListLog200ApplicationJSONListLogResponse:
    logs: Optional[List[shared.ServerlessV1ServiceEnvironmentLog]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logs' }})
    meta: Optional[ListLog200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListLogResponses:
    list_log_response: Optional[ListLog200ApplicationJSONListLogResponse] = field(default=None)
    

@dataclass
class ListLogResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListLogResponses]] = field(default=None)
    status_code: int = field(default=None)
    
