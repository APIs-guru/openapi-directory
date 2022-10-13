from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CALL_NOTIFICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListCallNotificationPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCallNotificationQueryParams:
    log: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Log', 'style': 'form', 'explode': True }})
    message_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MessageDate', 'style': 'form', 'explode': True }})
    message_date_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MessageDate<', 'style': 'form', 'explode': True }})
    message_date_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'MessageDate>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCallNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCallNotificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListCallNotificationPathParams = field(default=None)
    query_params: ListCallNotificationQueryParams = field(default=None)
    security: ListCallNotificationSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCallNotification200ApplicationJSONListCallNotificationResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    notifications: Optional[List[shared.APIV2010AccountCallCallNotification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass
class ListCallNotificationResponses:
    list_call_notification_response: Optional[ListCallNotification200ApplicationJSONListCallNotificationResponse] = field(default=None)
    

@dataclass
class ListCallNotificationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListCallNotificationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
