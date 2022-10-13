from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListDirectives200ApplicationJSONActionEnum(str, Enum):
    LIST_DIRECTIVES = "listDirectives"


@dataclass_json
@dataclass
class ListDirectives200ApplicationJSONData:
    directives: List[shared.Directive] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directives' }})
    
class ListDirectives200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListDirectives200ApplicationJSON:
    action: ListDirectives200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListDirectives200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListDirectives200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListDirectivesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_directives_200_application_json_object: Optional[ListDirectives200ApplicationJSON] = field(default=None)
    
