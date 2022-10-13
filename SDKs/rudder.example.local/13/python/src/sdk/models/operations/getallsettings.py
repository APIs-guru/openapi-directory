from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class GetAllSettings200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_SETTINGS = "getAllSettings"


@dataclass_json
@dataclass
class GetAllSettings200ApplicationJSONData:
    settings: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settings' }})
    
class GetAllSettings200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllSettings200ApplicationJSON:
    action: GetAllSettings200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetAllSettings200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetAllSettings200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetAllSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_all_settings_200_application_json_object: Optional[GetAllSettings200ApplicationJSON] = field(default=None)
    
