from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class ListRules200ApplicationJSONActionEnum(str, Enum):
    LIST_RULES = "listRules"


@dataclass_json
@dataclass
class ListRules200ApplicationJSONData:
    rules: List[shared.Rule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    
class ListRules200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListRules200ApplicationJSON:
    action: ListRules200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: ListRules200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: ListRules200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ListRulesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_rules_200_application_json_object: Optional[ListRules200ApplicationJSON] = field(default=None)
    
