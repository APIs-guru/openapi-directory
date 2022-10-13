from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class GetAllCve200ApplicationJSONActionEnum(str, Enum):
    GET_ALL_CVE = "getAllCve"


@dataclass_json
@dataclass
class GetAllCve200ApplicationJSONData:
    cv_es: List[shared.CveDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CVEs' }})
    
class GetAllCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetAllCve200ApplicationJSON:
    action: GetAllCve200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetAllCve200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetAllCve200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetAllCveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_all_cve_200_application_json_object: Optional[GetAllCve200ApplicationJSON] = field(default=None)
    
