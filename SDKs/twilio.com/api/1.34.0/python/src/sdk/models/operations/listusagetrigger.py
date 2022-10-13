from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListUsageTriggerPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsageTriggerQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    recurring: Optional[shared.UsageTriggerEnumRecurringEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Recurring', 'style': 'form', 'explode': True }})
    trigger_by: Optional[shared.UsageTriggerEnumTriggerFieldEnum] = field(default=None, metadata={'query_param': { 'field_name': 'TriggerBy', 'style': 'form', 'explode': True }})
    usage_category: Optional[shared.UsageTriggerEnumUsageCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'UsageCategory', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListUsageTriggerRequest:
    server_url: Optional[str] = field(default=None)
    path_params: ListUsageTriggerPathParams = field(default=None)
    query_params: ListUsageTriggerQueryParams = field(default=None)
    security: ListUsageTriggerSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListUsageTrigger200ApplicationJSONListUsageTriggerResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_uri' }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_uri' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_uri' }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    usage_triggers: Optional[List[shared.APIV2010AccountUsageUsageTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_triggers' }})
    

@dataclass
class ListUsageTriggerResponses:
    list_usage_trigger_response: Optional[ListUsageTrigger200ApplicationJSONListUsageTriggerResponse] = field(default=None)
    

@dataclass
class ListUsageTriggerResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ListUsageTriggerResponses]] = field(default=None)
    status_code: int = field(default=None)
    
