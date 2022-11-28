from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ReloadTechniques200ApplicationJSONActionEnum(str, Enum):
    RELOAD_TECHNIQUES = "reloadTechniques"

class ReloadTechniques200ApplicationJSONDataTechniquesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class ReloadTechniques200ApplicationJSONData:
    techniques: ReloadTechniques200ApplicationJSONDataTechniquesEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('techniques') }})
    
class ReloadTechniques200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadTechniques200ApplicationJSON:
    action: ReloadTechniques200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ReloadTechniques200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ReloadTechniques200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ReloadTechniquesResponse:
    content_type: str = field()
    status_code: int = field()
    reload_techniques_200_application_json_object: Optional[ReloadTechniques200ApplicationJSON] = field(default=None)
    
