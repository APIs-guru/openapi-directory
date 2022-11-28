from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoriesQueryParams:
    filter_parent_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[parent]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoriesRequest:
    query_params: GetCategoriesQueryParams = field()
    

@dataclass
class GetCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    list_categories_response: Optional[shared.ListCategoriesResponse] = field(default=None)
    
