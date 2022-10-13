from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DeleteParameterPathParams:
    parameter_id: str = field(default=None, metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteParameterRequest:
    path_params: DeleteParameterPathParams = field(default=None)
    
class DeleteParameter200ApplicationJSONActionEnum(str, Enum):
    DELETE_PARAMETER = "deleteParameter"


@dataclass_json
@dataclass
class DeleteParameter200ApplicationJSONData:
    parameters: List[shared.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
class DeleteParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteParameter200ApplicationJSON:
    action: DeleteParameter200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: DeleteParameter200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: DeleteParameter200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    
class DeleteParameter500ApplicationJSONActionEnum(str, Enum):
    DELETE_PARAMETER = "deleteParameter"

class DeleteParameter500ApplicationJSONResultEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteParameter500ApplicationJSON:
    action: DeleteParameter500ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    error_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorDetails' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: DeleteParameter500ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class DeleteParameterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_parameter_200_application_json_object: Optional[DeleteParameter200ApplicationJSON] = field(default=None)
    delete_parameter_500_application_json_object: Optional[DeleteParameter500ApplicationJSON] = field(default=None)
    
