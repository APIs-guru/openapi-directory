from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostCategoriesIDCategoryRulesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostCategoriesIDCategoryRulesRequestBody:
    payee_matches: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_matches') }})
    apply_to_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apply_to_all') }})
    apply_to_uncategorised: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apply_to_uncategorised') }})
    

@dataclass
class PostCategoriesIDCategoryRulesRequest:
    path_params: PostCategoriesIDCategoryRulesPathParams = field()
    request: Optional[PostCategoriesIDCategoryRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCategoriesIDCategoryRulesResponse:
    content_type: str = field()
    status_code: int = field()
    category_rule: Optional[shared.CategoryRule] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
