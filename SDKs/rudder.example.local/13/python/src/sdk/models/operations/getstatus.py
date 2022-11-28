from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetStatus200ApplicationJSONActionEnum(str, Enum):
    GET_STATUS = "getStatus"

class GetStatus200ApplicationJSONDataGlobalEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class GetStatus200ApplicationJSONData:
    r"""GetStatus200ApplicationJSONData
    Status of the service
    """
    
    global_: Optional[GetStatus200ApplicationJSONDataGlobalEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('global') }})
    
class GetStatus200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetStatus200ApplicationJSON:
    action: GetStatus200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetStatus200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetStatus200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetStatusResponse:
    content_type: str = field()
    status_code: int = field()
    get_status_200_application_json_object: Optional[GetStatus200ApplicationJSON] = field(default=None)
    
