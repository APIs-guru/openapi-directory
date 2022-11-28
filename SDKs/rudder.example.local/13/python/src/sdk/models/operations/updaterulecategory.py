from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateRuleCategoryPathParams:
    rule_category_id: str = field(metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    
class UpdateRuleCategory200ApplicationJSONActionEnum(str, Enum):
    UPDATE_RULE_CATEGORY = "UpdateRuleCategory"


@dataclass_json
@dataclass
class UpdateRuleCategory200ApplicationJSONData:
    rule_categories: List[shared.RuleCategory] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleCategories') }})
    
class UpdateRuleCategory200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class UpdateRuleCategory200ApplicationJSON:
    action: UpdateRuleCategory200ApplicationJSONActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: UpdateRuleCategory200ApplicationJSONData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: UpdateRuleCategory200ApplicationJSONResultEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class UpdateRuleCategoryRequest:
    path_params: UpdateRuleCategoryPathParams = field()
    request: shared.RuleCategoryUpdate = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateRuleCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    update_rule_category_200_application_json_object: Optional[UpdateRuleCategory200ApplicationJSON] = field(default=None)
    
