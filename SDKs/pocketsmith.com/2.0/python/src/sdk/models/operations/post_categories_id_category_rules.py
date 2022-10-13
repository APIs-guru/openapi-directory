from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostCategoriesIDCategoryRulesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostCategoriesIDCategoryRulesRequestBody:
    apply_to_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apply_to_all' }})
    apply_to_uncategorised: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apply_to_uncategorised' }})
    payee_matches: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_matches' }})
    

@dataclass
class PostCategoriesIDCategoryRulesRequest:
    path_params: PostCategoriesIDCategoryRulesPathParams = field(default=None)
    request: Optional[PostCategoriesIDCategoryRulesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCategoriesIDCategoryRulesResponse:
    category_rule: Optional[shared.CategoryRule] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
