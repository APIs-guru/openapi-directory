from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteRulePathParams:
    rule_id: str = field(metadata={'path_param': { 'field_name': 'ruleId', 'style': 'simple', 'explode': False }})
    
class DeleteRule200ApplicationJSONActionEnum(str, Enum):
    DELETE_RULE = "deleteRule"


@dataclass_json
@dataclass
class DeleteRule200ApplicationJSONData:
    rules: List[shared.Rule] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    
class DeleteRule200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class DeleteRule200ApplicationJSON:
    action: DeleteRule200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: DeleteRule200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: DeleteRule200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class DeleteRuleRequest:
    path_params: DeleteRulePathParams = field()
    

@dataclass
class DeleteRuleResponse:
    content_type: str = field()
    status_code: int = field()
    delete_rule_200_application_json_object: Optional[DeleteRule200ApplicationJSON] = field(default=None)
    
