from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetRuleCategoryDetailsPathParams:
    rule_category_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ruleCategoryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRuleCategoryDetailsRequest:
    path_params: GetRuleCategoryDetailsPathParams = field(default=None)
    
class GetRuleCategoryDetails200ApplicationJSONActionEnum(str, Enum):
    GET_RULE_CATEGORY_DETAILS = "GetRuleCategoryDetails"


@dataclass_json
@dataclass
class GetRuleCategoryDetails200ApplicationJSONData:
    rules_categories: List[shared.RuleCategory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rulesCategories' }})
    
class GetRuleCategoryDetails200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclass
class GetRuleCategoryDetails200ApplicationJSON:
    action: GetRuleCategoryDetails200ApplicationJSONActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    data: GetRuleCategoryDetails200ApplicationJSONData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    result: GetRuleCategoryDetails200ApplicationJSONResultEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetRuleCategoryDetailsResponse:
    content_type: str = field(default=None)
    get_rule_category_details_200_application_json_object: Optional[GetRuleCategoryDetails200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
