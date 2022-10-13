from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_USAGE_RECORD_DAILY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListUsageRecordDailyPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsageRecordDailyQueryParams:
    category: Optional[shared.UsageRecordDailyEnumCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Category', 'style': 'form', 'explode': True }})
    end_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'EndDate', 'style': 'form', 'explode': True }})
    include_subaccounts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'IncludeSubaccounts', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'StartDate', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsageRecordDailySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUsageRecordDailyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUsageRecordDailyPathParams = field(default=None)
    query_params: ListUsageRecordDailyQueryParams = field(default=None)
    security: ListUsageRecordDailySecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUsageRecordDaily200ApplicationJSONListUsageRecordDailyResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    usage_records: Optional[List[shared.APIV2010AccountUsageUsageRecordUsageRecordDaily]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_records' }})
    

@dataclass
class ListUsageRecordDailyResponse:
    content_type: str = field(default=None)
    list_usage_record_daily_response: Optional[ListUsageRecordDaily200ApplicationJSONListUsageRecordDailyResponse] = field(default=None)
    status_code: int = field(default=None)
    
