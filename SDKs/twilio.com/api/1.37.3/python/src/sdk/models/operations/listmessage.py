from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListMessagePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMessageQueryParams:
    date_sent: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateSent', 'style': 'form', 'explode': True }})
    date_sent_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateSent<', 'style': 'form', 'explode': True }})
    date_sent_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateSent>', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'To', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMessageListMessageResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    messages: Optional[List[shared.APIV2010AccountMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListMessageRequest:
    path_params: ListMessagePathParams = field()
    query_params: ListMessageQueryParams = field()
    security: ListMessageSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMessageResponse:
    content_type: str = field()
    status_code: int = field()
    list_message_response: Optional[ListMessageListMessageResponse] = field(default=None)
    
