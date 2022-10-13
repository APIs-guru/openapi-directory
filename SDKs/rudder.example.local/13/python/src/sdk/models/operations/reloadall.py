from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReloadAll200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL = "reloadAll"

class ReloadAll200ApplicationJSONDataGroupsEnum(str, Enum):
    STARTED = "Started"

class ReloadAll200ApplicationJSONDataTechniquesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class ReloadAll200ApplicationJSONData:
    groups: ReloadAll200ApplicationJSONDataGroupsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    techniques: ReloadAll200ApplicationJSONDataTechniquesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'techniques' }})
    
class ReloadAll200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadAll200ApplicationJSON:
    action: ReloadAll200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ReloadAll200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadAll200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadAllResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reload_all_200_application_json_object: Optional[ReloadAll200ApplicationJSON] = field(default=None)
    
