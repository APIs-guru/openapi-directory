from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ListParameters200ApplicationJSONActionEnum(str, Enum):
    LIST_PARAMETERS = "listParameters"


@dataclass_json
@dataclass
class ListParameters200ApplicationJSONData:
    r"""ListParameters200ApplicationJSONData
    Parameters
    """
    
    parameters: List[shared.Parameter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class ListParameters200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListParameters200ApplicationJSON:
    action: ListParameters200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListParameters200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListParameters200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListParametersResponse:
    content_type: str = field()
    status_code: int = field()
    list_parameters_200_application_json_object: Optional[ListParameters200ApplicationJSON] = field(default=None)
    
