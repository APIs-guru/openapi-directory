from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadGroups200ApplicationJSONActionEnum(str, Enum):
    RELOAD_GROUPS = "reloadGroups"

class ReloadGroups200ApplicationJSONDataGroupsEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class ReloadGroups200ApplicationJSONData:
    groups: ReloadGroups200ApplicationJSONDataGroupsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    
class ReloadGroups200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadGroups200ApplicationJSON:
    action: ReloadGroups200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadGroups200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadGroups200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    reload_groups_200_application_json_object: Optional[ReloadGroups200ApplicationJSON] = field(default=None)
    
