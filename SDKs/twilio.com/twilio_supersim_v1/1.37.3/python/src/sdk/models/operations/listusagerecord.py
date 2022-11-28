from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_USAGE_RECORD_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class ListUsageRecordQueryParams:
    end_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    fleet: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Fleet', 'style': 'form', 'explode': True }})
    granularity: Optional[shared.UsageRecordEnumGranularityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Granularity', 'style': 'form', 'explode': True }})
    group: Optional[shared.UsageRecordEnumGroupEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Group', 'style': 'form', 'explode': True }})
    iso_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    network: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Network', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    sim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Sim', 'style': 'form', 'explode': True }})
    start_time: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsageRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUsageRecordListUsageRecordResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListUsageRecordListUsageRecordResponse:
    meta: Optional[ListUsageRecordListUsageRecordResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    usage_records: Optional[List[shared.SupersimV1UsageRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclass
class ListUsageRecordRequest:
    query_params: ListUsageRecordQueryParams = field()
    security: ListUsageRecordSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUsageRecordResponse:
    content_type: str = field()
    status_code: int = field()
    list_usage_record_response: Optional[ListUsageRecordListUsageRecordResponse] = field(default=None)
    
