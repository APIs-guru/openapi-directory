from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_USAGE_RECORD_SERVERS = [
	"https://wireless.twilio.com",
]


@dataclass
class ListUsageRecordPathParams:
    sim_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsageRecordQueryParams:
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'End', 'style': 'form', 'explode': True }})
    granularity: Optional[shared.UsageRecordEnumGranularityEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Granularity', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    start: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'Start', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsageRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUsageRecordRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUsageRecordPathParams = field(default=None)
    query_params: ListUsageRecordQueryParams = field(default=None)
    security: ListUsageRecordSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUsageRecord200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListUsageRecord200ApplicationJSONListUsageRecordResponse:
    meta: Optional[ListUsageRecord200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    usage_records: Optional[List[shared.WirelessV1SimUsageRecord]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_records' }})
    

@dataclass
class ListUsageRecordResponses:
    list_usage_record_response: Optional[ListUsageRecord200ApplicationJSONListUsageRecordResponse] = field(default=None)
    

@dataclass
class ListUsageRecordResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListUsageRecordResponses]] = field(default=None)
    status_code: int = field(default=None)
    
