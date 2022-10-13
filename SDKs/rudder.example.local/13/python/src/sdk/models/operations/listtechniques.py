from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListTechniques200ApplicationJSONActionEnum(str, Enum):
    LIST_TECHNIQUES = "listTechniques"


@dataclass_json
@dataclass
class ListTechniques200ApplicationJSONData:
    techniques: List[shared.Techniques] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'techniques' }})
    
class ListTechniques200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListTechniques200ApplicationJSON:
    action: ListTechniques200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListTechniques200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListTechniques200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListTechniquesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_techniques_200_application_json_object: Optional[ListTechniques200ApplicationJSON] = field(default=None)
    
