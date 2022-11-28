from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetHealthcheckResult200ApplicationJSONActionEnum(str, Enum):
    GET_HEALTHCHECK_RESULT = "getHealthcheckResult"

class GetHealthcheckResult200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetHealthcheckResult200ApplicationJSON:
    action: GetHealthcheckResult200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: List[shared.Check] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetHealthcheckResult200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetHealthcheckResultResponse:
    content_type: str = field()
    status_code: int = field()
    get_healthcheck_result_200_application_json_object: Optional[GetHealthcheckResult200ApplicationJSON] = field(default=None)
    
