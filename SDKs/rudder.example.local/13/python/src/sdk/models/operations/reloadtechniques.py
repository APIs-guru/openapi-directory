from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ReloadTechniques200ApplicationJSONActionEnum(str, Enum):
    RELOAD_TECHNIQUES = "reloadTechniques"

class ReloadTechniques200ApplicationJSONDataTechniquesEnum(str, Enum):
    STARTED = "Started"


@dataclass_json
@dataclass
class ReloadTechniques200ApplicationJSONData:
    techniques: ReloadTechniques200ApplicationJSONDataTechniquesEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'techniques' }})
    
class ReloadTechniques200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ReloadTechniques200ApplicationJSON:
    action: ReloadTechniques200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ReloadTechniques200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ReloadTechniques200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ReloadTechniquesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reload_techniques_200_application_json_object: Optional[ReloadTechniques200ApplicationJSON] = field(default=None)
    
