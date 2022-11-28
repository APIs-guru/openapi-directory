from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


LIST_USAGE_TRIGGER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class ListUsageTriggerPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListUsageTriggerQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    recurring: Optional[shared.UsageTriggerEnumRecurringEnum] = field(default=None, metadata={'query_param': { 'field_name': 'Recurring', 'style': 'form', 'explode': True }})
    trigger_by: Optional[shared.UsageTriggerEnumTriggerFieldEnum] = field(default=None, metadata={'query_param': { 'field_name': 'TriggerBy', 'style': 'form', 'explode': True }})
    usage_category: Optional[shared.UsageTriggerEnumUsageCategoryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'UsageCategory', 'style': 'form', 'explode': True }})
    

@dataclass
class ListUsageTriggerSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclass
class ListUsageTriggerListUsageTriggerResponse:
    end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    usage_triggers: Optional[List[shared.APIV2010AccountUsageUsageTrigger]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usage_triggers') }})
    

@dataclass
class ListUsageTriggerRequest:
    path_params: ListUsageTriggerPathParams = field()
    query_params: ListUsageTriggerQueryParams = field()
    security: ListUsageTriggerSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class ListUsageTriggerResponse:
    content_type: str = field()
    status_code: int = field()
    list_usage_trigger_response: Optional[ListUsageTriggerListUsageTriggerResponse] = field(default=None)
    
