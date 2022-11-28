from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CALL_NOTIFICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListCallNotificationPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListCallNotificationQueryParams:
    log: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'Log', 'style': 'form', 'explode': True }})
    message_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'MessageDate', 'style': 'form', 'explode': True }})
    message_date_less_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'MessageDate<', 'style': 'form', 'explode': True }})
    message_date_greater_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'MessageDate>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCallNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListCallNotificationListCallNotificationResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    notifications: Optional[List[shared.APIV2010AccountCallCallNotification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListCallNotificationRequest:
    path_params: ListCallNotificationPathParams = field()
    query_params: ListCallNotificationQueryParams = field()
    security: ListCallNotificationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListCallNotificationResponse:
    content_type: str = field()
    status_code: int = field()
    list_call_notification_response: Optional[ListCallNotificationListCallNotificationResponse] = field(default=None)
    
