from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class ListRules200ApplicationJSONActionEnum(str, Enum):
    LIST_RULES = "listRules"


@dataclass_json
@dataclass
class ListRules200ApplicationJSONData:
    rules: List[shared.Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class ListRules200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class ListRules200ApplicationJSON:
    action: ListRules200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ListRules200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ListRules200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class ListRulesResponse:
    content_type: str = field()
    status_code: int = field()
    list_rules_200_application_json_object: Optional[ListRules200ApplicationJSON] = field(default=None)
    
