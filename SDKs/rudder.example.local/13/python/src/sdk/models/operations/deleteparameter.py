from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteParameterPathParams:
    parameter_id: str = field(metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    
class DeleteParameter200ApplicationJSONActionEnum(str, Enum):
    DELETE_PARAMETER = "deleteParameter"


@dataclass_json
@dataclass
class DeleteParameter200ApplicationJSONData:
    r"""DeleteParameter200ApplicationJSONData
    Parameters
    """
    
    parameters: List[shared.Parameter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class DeleteParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteParameter200ApplicationJSON:
    action: DeleteParameter200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteParameter200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: DeleteParameter200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
class DeleteParameter500ApplicationJSONActionEnum(str, Enum):
    DELETE_PARAMETER = "deleteParameter"

class DeleteParameter500ApplicationJSONResultEnum(str, Enum):
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteParameter500ApplicationJSON:
    action: DeleteParameter500ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: DeleteParameter500ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    error_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorDetails') }})
    

@dataclass
class DeleteParameterRequest:
    path_params: DeleteParameterPathParams = field()
    

@dataclass
class DeleteParameterResponse:
    content_type: str = field()
    status_code: int = field()
    delete_parameter_200_application_json_object: Optional[DeleteParameter200ApplicationJSON] = field(default=None)
    delete_parameter_500_application_json_object: Optional[DeleteParameter500ApplicationJSON] = field(default=None)
    
