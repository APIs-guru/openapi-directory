from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CheckCve200ApplicationJSONActionEnum(str, Enum):
    CHECK_CVE = "checkCVE"


@dataclass_json
@dataclass
class CheckCve200ApplicationJSONData:
    cve_checks: List[shared.CveCheck] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cveChecks' }})
    
class CheckCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CheckCve200ApplicationJSON:
    action: CheckCve200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: CheckCve200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: CheckCve200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CheckCveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    check_cve_200_application_json_object: Optional[CheckCve200ApplicationJSON] = field(default=None)
    
