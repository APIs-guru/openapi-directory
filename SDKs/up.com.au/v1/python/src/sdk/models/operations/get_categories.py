from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCategoriesQueryParams:
    filter_parent_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter[parent]', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCategoriesRequest:
    query_params: GetCategoriesQueryParams = field(default=None)
    

@dataclass
class GetCategoriesResponse:
    content_type: str = field(default=None)
    list_categories_response: Optional[shared.ListCategoriesResponse] = field(default=None)
    status_code: int = field(default=None)
    
