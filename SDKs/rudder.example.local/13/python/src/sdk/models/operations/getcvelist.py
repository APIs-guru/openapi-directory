from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class GetCveListRequestBody:
    cve_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cveIds' }})
    

@dataclass
class GetCveListRequest:
    request: Optional[GetCveListRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class GetCveList200ApplicationJSONActionEnum(str, Enum):
    GET_CVE_LIST = "getCVEList"


@dataclass_json
@dataclass
class GetCveList200ApplicationJSONData:
    cv_es: List[shared.CveDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CVEs' }})
    
class GetCveList200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetCveList200ApplicationJSON:
    action: GetCveList200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetCveList200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetCveList200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetCveListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_cve_list_200_application_json_object: Optional[GetCveList200ApplicationJSON] = field(default=None)
    
