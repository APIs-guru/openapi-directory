from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListAccountUsageRecordRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListAccountUsageRecordQueryParams = field(default=None)
    security: ListAccountUsageRecordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListAccountUsageRecord200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListAccountUsageRecord200ApplicationJSONListAccountUsageRecordResponse:
    meta: Optional[ListAccountUsageRecord200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    usage_records: Optional[List[shared.WirelessV1AccountUsageRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_records' }})
    

@dataclass
class ListAccountUsageRecordResponses:
    list_account_usage_record_response: Optional[ListAccountUsageRecord200ApplicationJSONListAccountUsageRecordResponse] = field(default=None)
    

@dataclass
class ListAccountUsageRecordResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListAccountUsageRecordResponses]] = field(default=None)
    status_code: int = field(default=None)
    
