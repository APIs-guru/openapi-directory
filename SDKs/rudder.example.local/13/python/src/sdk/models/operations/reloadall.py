from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadAll200ApplicationJSONActionEnum(str, Enum):
    RELOAD_ALL = "reloadAll"

class ReloadAll200ApplicationJSONDataGroupsEnum(str, Enum):
    STARTED = "Started"

class ReloadAll200ApplicationJSONDataTechniquesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class ReloadAll200ApplicationJSONData:
    groups: ReloadAll200ApplicationJSONDataGroupsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    techniques: ReloadAll200ApplicationJSONDataTechniquesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('techniques') }})
    
class ReloadAll200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadAll200ApplicationJSON:
    action: ReloadAll200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadAll200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadAll200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadAllResponse:
    content_type: str = field()
    status_code: int = field()
    reload_all_200_application_json_object: Optional[ReloadAll200ApplicationJSON] = field(default=None)
    
