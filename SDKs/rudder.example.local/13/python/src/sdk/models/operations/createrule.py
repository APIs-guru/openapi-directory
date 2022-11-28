from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class CreateRule200ApplicationJSONActionEnum(str, Enum):
    CREATE_RULE = "createRule"


@dataclass_json
@dataclass
class CreateRule200ApplicationJSONData:
    rules: List[shared.Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class CreateRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class CreateRule200ApplicationJSON:
    action: CreateRule200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: CreateRule200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: CreateRule200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class CreateRuleRequest:
    request: Optional[shared.RuleNew] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRuleResponse:
    content_type: str = field()
    status_code: int = field()
    create_rule_200_application_json_object: Optional[CreateRule200ApplicationJSON] = field(default=None)
    
