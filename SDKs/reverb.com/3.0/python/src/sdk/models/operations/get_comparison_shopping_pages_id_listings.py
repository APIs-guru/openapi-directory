from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetComparisonShoppingPagesIDListingsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComparisonShoppingPagesIDListingsQueryParams:
    condition: str = field(metadata={'query_param': { 'field_name': 'condition', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetComparisonShoppingPagesIDListingsRequest:
    path_params: GetComparisonShoppingPagesIDListingsPathParams = field()
    query_params: GetComparisonShoppingPagesIDListingsQueryParams = field()
    

@dataclass
class GetComparisonShoppingPagesIDListingsResponse:
    content_type: str = field()
    status_code: int = field()
    
