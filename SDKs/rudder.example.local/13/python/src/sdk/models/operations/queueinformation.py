from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class QueueInformation200ApplicationJSONActionEnum(str, Enum):
    QUEUE_INFORMATION = "queueInformation"


@dataclass_json
@dataclass
class QueueInformation200ApplicationJSONData:
    queue_max_size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueMaxSize' }})
    queue_saturated: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queueSaturated' }})
    
class QueueInformation200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class QueueInformation200ApplicationJSON:
    action: QueueInformation200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: QueueInformation200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: QueueInformation200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class QueueInformationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    queue_information_200_application_json_object: Optional[QueueInformation200ApplicationJSON] = field(default=None)
    
