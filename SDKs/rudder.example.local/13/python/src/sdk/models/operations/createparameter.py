from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateParameter200ApplicationJSONActionEnum(str, Enum):
    CREATE_PARAMETER = "createParameter"


@dataclass_json
@dataclass
class CreateParameter200ApplicationJSONData:
    r"""CreateParameter200ApplicationJSONData
    Parameters
    """
    
    parameters: List[shared.Parameter] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    
class CreateParameter200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateParameter200ApplicationJSON:
    action: CreateParameter200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateParameter200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: CreateParameter200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateParameterRequest:
    request: shared.Parameter = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateParameterResponse:
    content_type: str = field()
    status_code: int = field()
    create_parameter_200_application_json_object: Optional[CreateParameter200ApplicationJSON] = field(default=None)
    
