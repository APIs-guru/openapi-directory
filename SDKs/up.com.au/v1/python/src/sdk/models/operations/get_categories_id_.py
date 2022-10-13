from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoriesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesIDRequest:
    path_params: GetCategoriesIDPathParams = field(default=None)
    

@dataclass
class GetCategoriesIDResponse:
    content_type: str = field(default=None)
    get_category_response: Optional[shared.GetCategoryResponse] = field(default=None)
    status_code: int = field(default=None)
    
