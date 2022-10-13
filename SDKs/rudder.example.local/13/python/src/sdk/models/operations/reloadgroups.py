from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReloadGroups200ApplicationJSONActionEnum(str, Enum):
    RELOAD_GROUPS = "reloadGroups"

class ReloadGroups200ApplicationJSONDataGroupsEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class ReloadGroups200ApplicationJSONData:
    groups: ReloadGroups200ApplicationJSONDataGroupsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    
class ReloadGroups200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadGroups200ApplicationJSON:
    action: ReloadGroups200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ReloadGroups200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadGroups200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadGroupsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reload_groups_200_application_json_object: Optional[ReloadGroups200ApplicationJSON] = field(default=None)
    
