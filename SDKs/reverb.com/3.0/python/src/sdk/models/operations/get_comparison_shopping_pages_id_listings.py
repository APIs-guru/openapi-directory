from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetComparisonShoppingPagesIDListingsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComparisonShoppingPagesIDListingsQueryParams:
    condition: str = field(default=None, metadata={'query_param': { 'field_name': 'condition', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetComparisonShoppingPagesIDListingsRequest:
    path_params: GetComparisonShoppingPagesIDListingsPathParams = field(default=None)
    query_params: GetComparisonShoppingPagesIDListingsQueryParams = field(default=None)
    

@dataclass
class GetComparisonShoppingPagesIDListingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
