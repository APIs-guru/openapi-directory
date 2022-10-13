from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class GetSystemInfo200ApplicationJSONActionEnum(str, Enum):
    GET_SYSTEM_INFO = "getSystemInfo"


@dataclass_json
@dataclass
class GetSystemInfo200ApplicationJSONData:
    rudder: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rudder' }})
    
class GetSystemInfo200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetSystemInfo200ApplicationJSON:
    action: GetSystemInfo200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetSystemInfo200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetSystemInfo200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetSystemInfoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_system_info_200_application_json_object: Optional[GetSystemInfo200ApplicationJSON] = field(default=None)
    
