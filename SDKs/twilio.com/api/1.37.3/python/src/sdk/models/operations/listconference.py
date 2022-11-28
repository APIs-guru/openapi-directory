from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListConferencePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListConferenceQueryParams:
    date_created: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated', 'style': 'form', 'explode': True }})
    date_created_less_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated<', 'style': 'form', 'explode': True }})
    date_created_greater_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreated>', 'style': 'form', 'explode': True }})
    date_updated: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateUpdated', 'style': 'form', 'explode': True }})
    date_updated_less_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateUpdated<', 'style': 'form', 'explode': True }})
    date_updated_greater_than_: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'DateUpdated>', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared.ConferenceEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclass
class ListConferenceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListConferenceListConferenceResponse:
    conferences: Optional[List[shared.APIV2010AccountConference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferences') }})
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass
class ListConferenceRequest:
    path_params: ListConferencePathParams = field()
    query_params: ListConferenceQueryParams = field()
    security: ListConferenceSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListConferenceResponse:
    content_type: str = field()
    status_code: int = field()
    list_conference_response: Optional[ListConferenceListConferenceResponse] = field(default=None)
    
