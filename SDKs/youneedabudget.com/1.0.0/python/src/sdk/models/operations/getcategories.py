from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoriesPathParams:
    budget_id: str = field(metadata={'path_param': { 'field_name': 'budget_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesQueryParams:
    last_knowledge_of_server: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'last_knowledge_of_server', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoriesRequest:
    path_params: GetCategoriesPathParams = field()
    query_params: GetCategoriesQueryParams = field()
    

@dataclass
class GetCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    categories_response: Optional[shared.CategoriesResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
