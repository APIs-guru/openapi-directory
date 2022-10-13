from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_ALERT_SERVERS = [
	"https://monitor.twilio.com",
]


@dataclass
class ListAlertQueryParams:
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    log_level: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'LogLevel', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAlertSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAlertRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListAlertQueryParams = field(default=None)
    security: ListAlertSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAlert200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListAlert200ApplicationJSONListAlertResponse:
    alerts: Optional[List[shared.MonitorV1Alert]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alerts' }})
    meta: Optional[ListAlert200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListAlertResponse:
    content_type: str = field(default=None)
    list_alert_response: Optional[ListAlert200ApplicationJSONListAlertResponse] = field(default=None)
    status_code: int = field(default=None)
    
