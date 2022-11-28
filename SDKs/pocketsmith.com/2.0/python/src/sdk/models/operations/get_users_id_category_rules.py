from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDCategoryRulesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDCategoryRulesRequest:
    path_params: GetUsersIDCategoryRulesPathParams = field()
    

@dataclass
class GetUsersIDCategoryRulesResponse:
    content_type: str = field()
    status_code: int = field()
    category_rules: Optional[List[shared.CategoryRule]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
