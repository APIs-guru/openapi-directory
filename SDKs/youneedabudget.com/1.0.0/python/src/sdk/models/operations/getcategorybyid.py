from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoryByIDPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    category_id: str = field(metadata={'path_param': { 'field_name': 'category_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoryByIDRequest:
    path_params: GetCategoryByIDPathParams = field()
    

@dataclass
class GetCategoryByIDResponse:
    content_type: str = field()
    status_code: int = field()
    category_response: Optional[shared.CategoryResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
