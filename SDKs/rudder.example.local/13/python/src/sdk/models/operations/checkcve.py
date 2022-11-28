from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CheckCve200ApplicationJSONActionEnum(str, Enum):
    CHECK_CVE = "checkCVE"


@dataclass_json
@dataclass
class CheckCve200ApplicationJSONData:
    cve_checks: List[shared.CveCheck] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cveChecks') }})
    
class CheckCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CheckCve200ApplicationJSON:
    action: CheckCve200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CheckCve200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CheckCve200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CheckCveResponse:
    content_type: str = field()
    status_code: int = field()
    check_cve_200_application_json_object: Optional[CheckCve200ApplicationJSON] = field(default=None)
    
