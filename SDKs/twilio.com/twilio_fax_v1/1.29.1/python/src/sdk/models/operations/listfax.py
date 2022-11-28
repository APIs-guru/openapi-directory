from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_FAX_SERVERS = [
	"https://fax.twilio.com",
]


@dataclass
class ListFaxQueryParams:
    date_created_after: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedAfter', 'style': 'form', 'explode': True }})
    date_created_on_or_before: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'DateCreatedOnOrBefore', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'To', 'style': 'form', 'explode': True }})
    

@dataclass
class ListFaxSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListFaxListFaxResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListFaxListFaxResponse:
    faxes: Optional[List[shared.FaxV1Fax]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faxes') }})
    meta: Optional[ListFaxListFaxResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass
class ListFaxRequest:
    query_params: ListFaxQueryParams = field()
    security: ListFaxSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListFaxResponse:
    content_type: str = field()
    status_code: int = field()
    list_fax_response: Optional[ListFaxListFaxResponse] = field(default=None)
    
