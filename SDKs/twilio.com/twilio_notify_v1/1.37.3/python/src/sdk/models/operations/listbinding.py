from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_BINDING_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class ListBindingPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListBindingQueryParams:
    end_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    identity: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Identity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    tag: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'Tag', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBindingSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListBindingListBindingResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListBindingListBindingResponse:
    bindings: Optional[List[shared.NotifyV1ServiceBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bindings') }})
    meta: Optional[ListBindingListBindingResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListBindingRequest:
    path_params: ListBindingPathParams = field()
    query_params: ListBindingQueryParams = field()
    security: ListBindingSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListBindingResponse:
    content_type: str = field()
    status_code: int = field()
    list_binding_response: Optional[ListBindingListBindingResponse] = field(default=None)
    
