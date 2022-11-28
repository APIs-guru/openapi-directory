from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetAllCve200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_CVE = "getAllCve"


@dataclass_json
@dataclass
class GetAllCve200ApplicationJSONData:
    cv_es: List[shared.CveDetails] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CVEs') }})
    
class GetAllCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllCve200ApplicationJSON:
    action: GetAllCve200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetAllCve200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: GetAllCve200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetAllCveResponse:
    content_type: str = field()
    status_code: int = field()
    get_all_cve_200_application_json_object: Optional[GetAllCve200ApplicationJSON] = field(default=None)
    
