from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GetStatus200ApplicationJSONActionEnum(str, Enum):
    GET_STATUS = "getStatus"

class GetStatus200ApplicationJSONDataGlobalEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class GetStatus200ApplicationJSONData:
    global_: Optional[GetStatus200ApplicationJSONDataGlobalEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'global' }})
    
class GetStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetStatus200ApplicationJSON:
    action: GetStatus200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetStatus200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetStatus200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_status_200_application_json_object: Optional[GetStatus200ApplicationJSON] = field(default=None)
    
