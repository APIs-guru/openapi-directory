from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CALL_SUMMARIES_SERVERS = [
	"https://insights.twilio.com",
]


@dataclass
class ListCallSummariesQueryParams:
    abnormal_session: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'AbnormalSession', 'style': 'form', 'explode': True }})
    branded: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'Branded', 'style': 'form', 'explode': True }})
    call_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CallState', 'style': 'form', 'explode': True }})
    call_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'CallType', 'style': 'form', 'explode': True }})
    direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Direction', 'style': 'form', 'explode': True }})
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EndTime', 'style': 'form', 'explode': True }})
    from_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'From', 'style': 'form', 'explode': True }})
    from_carrier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FromCarrier', 'style': 'form', 'explode': True }})
    from_country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'FromCountryCode', 'style': 'form', 'explode': True }})
    has_tag: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'HasTag', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    processing_state: Optional[shared.CallSummariesEnumProcessingStateRequestEnum] = field(default=None, metadata={'query_param': { 'field_name': 'ProcessingState', 'style': 'form', 'explode': True }})
    sort_by: Optional[shared.CallSummariesEnumSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'SortBy', 'style': 'form', 'explode': True }})
    start_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartTime', 'style': 'form', 'explode': True }})
    subaccount: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Subaccount', 'style': 'form', 'explode': True }})
    to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'To', 'style': 'form', 'explode': True }})
    to_carrier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ToCarrier', 'style': 'form', 'explode': True }})
    to_country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ToCountryCode', 'style': 'form', 'explode': True }})
    verified_caller: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'VerifiedCaller', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCallSummariesSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCallSummariesRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListCallSummariesQueryParams = field(default=None)
    security: ListCallSummariesSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCallSummaries200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCallSummaries200ApplicationJSONListCallSummariesResponse:
    call_summaries: Optional[List[shared.InsightsV1CallSummaries]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_summaries' }})
    meta: Optional[ListCallSummaries200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListCallSummariesResponse:
    content_type: str = field(default=None)
    list_call_summaries_response: Optional[ListCallSummaries200ApplicationJSONListCallSummariesResponse] = field(default=None)
    status_code: int = field(default=None)
    
