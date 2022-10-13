from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class PurgeSoftware200ApplicationJSONActionEnum(str, Enum):
    PURGE_SOFTWARE = "purgeSoftware"

class PurgeSoftware200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class PurgeSoftware200ApplicationJSON:
    action: PurgeSoftware200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: PurgeSoftware200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PurgeSoftwareResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    purge_software_200_application_json_object: Optional[PurgeSoftware200ApplicationJSON] = field(default=None)
    
