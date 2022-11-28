from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateParameterPathParams:
    parameter_id: str = field(metadata={'path_param': { 'field_name': 'parameterId', 'style': 'simple', 'explode': False }})
    
class UpdateParameter200ApplicationJSONActionEnum(str, Enum):
    UPDATE_PARAMETER = "updateParameter"


@dataclass_json
@dataclass
class UpdateParameter200ApplicationJSONData:
    r"""UpdateParameter200ApplicationJSONData
    Parameters
    """
    
    parameters: List[shared.Parameter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class UpdateParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateParameter200ApplicationJSON:
    action: UpdateParameter200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateParameter200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: UpdateParameter200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateParameterRequest:
    path_params: UpdateParameterPathParams = field()
    

@dataclass
class UpdateParameterResponse:
    content_type: str = field()
    status_code: int = field()
    update_parameter_200_application_json_object: Optional[UpdateParameter200ApplicationJSON] = field(default=None)
    
