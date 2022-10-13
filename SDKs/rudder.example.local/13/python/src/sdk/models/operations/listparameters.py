from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListParameters200ApplicationJSONActionEnum(str, Enum):
    LIST_PARAMETERS = "listParameters"


@dataclass_json
@dataclass
class ListParameters200ApplicationJSONData:
    parameters: List[shared.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
class ListParameters200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListParameters200ApplicationJSON:
    action: ListParameters200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListParameters200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListParameters200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListParametersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_parameters_200_application_json_object: Optional[ListParameters200ApplicationJSON] = field(default=None)
    
