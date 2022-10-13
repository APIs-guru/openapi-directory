from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import usage_trigger_enum_recurring_enum
from . import usage_trigger_enum_trigger_field_enum
from . import usage_trigger_enum_usage_category_enum

class APIV2010AccountUsageUsageTriggerCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class APIV2010AccountUsageUsageTrigger:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    callback_method: Optional[APIV2010AccountUsageUsageTriggerCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback_method' }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback_url' }})
    current_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_value' }})
    date_created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created' }})
    date_fired: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_fired' }})
    date_updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    recurring: Optional[usage_trigger_enum_recurring_enum.UsageTriggerEnumRecurringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recurring' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    trigger_by: Optional[usage_trigger_enum_trigger_field_enum.UsageTriggerEnumTriggerFieldEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger_by' }})
    trigger_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger_value' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    usage_category: Optional[usage_trigger_enum_usage_category_enum.UsageTriggerEnumUsageCategoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_category' }})
    usage_record_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_record_uri' }})
    
