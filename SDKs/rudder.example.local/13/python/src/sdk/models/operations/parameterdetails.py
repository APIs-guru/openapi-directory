from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ParameterDetailsPathParams:
    parameter_id: str = field(default=None, metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ParameterDetailsRequest:
    path_params: ParameterDetailsPathParams = field(default=None)
    
class ParameterDetails200ApplicationJSONActionEnum(str, Enum):
    PARAMETER_DETAILS = "parameterDetails"


@dataclass_json
@dataclass
class ParameterDetails200ApplicationJSONData:
    parameters: List[shared.Parameter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    
class ParameterDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ParameterDetails200ApplicationJSON:
    action: ParameterDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ParameterDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: ParameterDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ParameterDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    parameter_details_200_application_json_object: Optional[ParameterDetails200ApplicationJSON] = field(default=None)
    
