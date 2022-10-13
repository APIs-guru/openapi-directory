from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetLastCveCheck200ApplicationJSONActionEnum(str, Enum):
    GET_LAST_CVE_CHECK = "getLastCVECheck"


@dataclass_json
@dataclass
class GetLastCveCheck200ApplicationJSONData:
    cve_checks: List[shared.CveCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CVEChecks' }})
    
class GetLastCveCheck200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetLastCveCheck200ApplicationJSON:
    action: GetLastCveCheck200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetLastCveCheck200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetLastCveCheck200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetLastCveCheckResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_last_cve_check_200_application_json_object: Optional[GetLastCveCheck200ApplicationJSON] = field(default=None)
    
