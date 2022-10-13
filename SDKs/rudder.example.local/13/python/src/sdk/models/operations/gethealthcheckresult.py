from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetHealthcheckResult200ApplicationJSONActionEnum(str, Enum):
    GET_HEALTHCHECK_RESULT = "getHealthcheckResult"

class GetHealthcheckResult200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetHealthcheckResult200ApplicationJSON:
    action: GetHealthcheckResult200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: List[shared.Check] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetHealthcheckResult200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetHealthcheckResultResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_healthcheck_result_200_application_json_object: Optional[GetHealthcheckResult200ApplicationJSON] = field(default=None)
    
