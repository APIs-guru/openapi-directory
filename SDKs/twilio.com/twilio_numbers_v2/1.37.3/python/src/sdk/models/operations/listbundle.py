from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_BUNDLE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class ListBundleQueryParams:
    friendly_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    has_valid_until_date: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HasValidUntilDate', 'style': 'form', 'explode': True }})
    iso_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    number_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NumberType', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    regulation_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'RegulationSid', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared.BundleEnumSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SortBy', 'style': 'form', 'explode': True }})
    sort_direction: Optional[shared.BundleEnumSortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SortDirection', 'style': 'form', 'explode': True }})
    status: Optional[shared.BundleEnumStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    valid_until_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ValidUntilDate', 'style': 'form', 'explode': True }})
    valid_until_date_less_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ValidUntilDate<', 'style': 'form', 'explode': True }})
    valid_until_date_greater_than_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'ValidUntilDate>', 'style': 'form', 'explode': True }})
    

@dataclass
class ListBundleSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListBundleListBundleResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListBundleListBundleResponse:
    meta: Optional[ListBundleListBundleResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    results: Optional[List[shared.NumbersV2RegulatoryComplianceBundle]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    

@dataclass
class ListBundleRequest:
    query_params: ListBundleQueryParams = field()
    security: ListBundleSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListBundleResponse:
    content_type: str = field()
    status_code: int = field()
    list_bundle_response: Optional[ListBundleListBundleResponse] = field(default=None)
    
