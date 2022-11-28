from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_USAGE_RECORD_ALL_TIME_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListUsageRecordAllTimePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsageRecordAllTimeQueryParams:
    category: Optional[shared.UsageRecordAllTimeEnumCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Category', 'style': 'form', 'explode': True }})
    end_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IncludeSubaccounts', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsageRecordAllTimeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUsageRecordAllTimeListUsageRecordAllTimeResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    usage_records: Optional[List[shared.APIV2010AccountUsageUsageRecordUsageRecordAllTime]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclass
class ListUsageRecordAllTimeRequest:
    path_params: ListUsageRecordAllTimePathParams = field()
    query_params: ListUsageRecordAllTimeQueryParams = field()
    security: ListUsageRecordAllTimeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUsageRecordAllTimeResponse:
    content_type: str = field()
    status_code: int = field()
    list_usage_record_all_time_response: Optional[ListUsageRecordAllTimeListUsageRecordAllTimeResponse] = field(default=None)
    
