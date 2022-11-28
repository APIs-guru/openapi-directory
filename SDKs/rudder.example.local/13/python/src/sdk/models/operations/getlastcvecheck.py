from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetLastCveCheck200ApplicationJSONActionEnum(str, Enum):
    GET_LAST_CVE_CHECK = "getLastCVECheck"


@dataclass_json
@dataclass
class GetLastCveCheck200ApplicationJSONData:
    cve_checks: List[shared.CveCheck] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEChecks') }})
    
class GetLastCveCheck200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetLastCveCheck200ApplicationJSON:
    action: GetLastCveCheck200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetLastCveCheck200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetLastCveCheck200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetLastCveCheckResponse:
    content_type: str = field()
    status_code: int = field()
    get_last_cve_check_200_application_json_object: Optional[GetLastCveCheck200ApplicationJSON] = field(default=None)
    
