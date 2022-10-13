from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDCategoryRulesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDCategoryRulesRequest:
    path_params: GetUsersIDCategoryRulesPathParams = field(default=None)
    

@dataclass
class GetUsersIDCategoryRulesResponse:
    category_rules: Optional[List[shared.CategoryRule]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
