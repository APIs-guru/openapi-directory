from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateParameterPathParams:
    parameter_id: str = field(default=None, metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateParameterRequest:
    path_params: UpdateParameterPathParams = field(default=None)
    
class UpdateParameter200ApplicationJSONActionEnum(str, Enum):
    UPDATE_PARAMETER = "updateParameter"


@dataclass_json
@dataclass
class UpdateParameter200ApplicationJSONData:
    parameters: List[shared.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
class UpdateParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateParameter200ApplicationJSON:
    action: UpdateParameter200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateParameter200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: UpdateParameter200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateParameterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_parameter_200_application_json_object: Optional[UpdateParameter200ApplicationJSON] = field(default=None)
    
