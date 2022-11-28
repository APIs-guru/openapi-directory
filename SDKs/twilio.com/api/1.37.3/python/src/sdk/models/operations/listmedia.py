from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_MEDIA_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListMediaPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    message_sid: str = field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListMediaQueryParams:
    date_created: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated', 'style': 'form', 'explode': True }})
    date_created_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated<', 'style': 'form', 'explode': True }})
    date_created_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListMediaSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListMediaListMediaResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    media_list: Optional[List[shared.APIV2010AccountMessageMedia]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_list') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListMediaRequest:
    path_params: ListMediaPathParams = field()
    query_params: ListMediaQueryParams = field()
    security: ListMediaSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListMediaResponse:
    content_type: str = field()
    status_code: int = field()
    list_media_response: Optional[ListMediaListMediaResponse] = field(default=None)
    
