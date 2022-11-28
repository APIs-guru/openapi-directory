from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_ACCOUNT_USAGE_RECORD_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class ListAccountUsageRecordQueryParams:
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'End', 'style': 'form', 'explode': True }})
    granularity: Optional[shared.AccountUsageRecordEnumGranularityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Granularity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'Start', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAccountUsageRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListAccountUsageRecordListAccountUsageRecordResponseMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class ListAccountUsageRecordListAccountUsageRecordResponse:
    meta: Optional[ListAccountUsageRecordListAccountUsageRecordResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    usage_records: Optional[List[shared.WirelessV1AccountUsageRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_records') }})
    

@dataclass
class ListAccountUsageRecordRequest:
    query_params: ListAccountUsageRecordQueryParams = field()
    security: ListAccountUsageRecordSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListAccountUsageRecordResponse:
    content_type: str = field()
    status_code: int = field()
    list_account_usage_record_response: Optional[ListAccountUsageRecordListAccountUsageRecordResponse] = field(default=None)
    
