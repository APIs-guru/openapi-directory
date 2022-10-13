from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateCveRequestBody:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    years: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'years' }})
    

@dataclass
class UpdateCveRequest:
    request: Optional[UpdateCveRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    
class UpdateCve200ApplicationJSONActionEnum(str, Enum):
    UPDATE_CVE = "updateCVE"


@dataclass_json
@dataclass
class UpdateCve200ApplicationJSONData:
    cv_es: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CVEs' }})
    
class UpdateCve200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateCve200ApplicationJSON:
    action: UpdateCve200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: UpdateCve200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: UpdateCve200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdateCveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_cve_200_application_json_object: Optional[UpdateCve200ApplicationJSON] = field(default=None)
    
