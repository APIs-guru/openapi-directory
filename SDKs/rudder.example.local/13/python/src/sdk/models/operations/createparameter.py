from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateParameterRequest:
    request: shared.Parameter = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class CreateParameter200ApplicationJSONActionEnum(str, Enum):
    CREATE_PARAMETER = "createParameter"


@dataclass_json
@dataclass
class CreateParameter200ApplicationJSONData:
    parameters: List[shared.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
class CreateParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateParameter200ApplicationJSON:
    action: CreateParameter200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CreateParameter200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: CreateParameter200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CreateParameterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_parameter_200_application_json_object: Optional[CreateParameter200ApplicationJSON] = field(default=None)
    
