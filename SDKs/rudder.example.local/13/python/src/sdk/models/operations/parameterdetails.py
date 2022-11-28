from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ParameterDetailsPathParams:
    parameter_id: str = field(metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    
class ParameterDetails200ApplicationJSONActionEnum(str, Enum):
    PARAMETER_DETAILS = "parameterDetails"


@dataclass_json
@dataclass
class ParameterDetails200ApplicationJSONData:
    r"""ParameterDetails200ApplicationJSONData
    Parameters
    """
    
    parameters: List[shared.Parameter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class ParameterDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ParameterDetails200ApplicationJSON:
    action: ParameterDetails200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ParameterDetails200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: ParameterDetails200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ParameterDetailsRequest:
    path_params: ParameterDetailsPathParams = field()
    

@dataclass
class ParameterDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    parameter_details_200_application_json_object: Optional[ParameterDetails200ApplicationJSON] = field(default=None)
    
