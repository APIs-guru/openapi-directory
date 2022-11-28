from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetComparisonShoppingPagesFindQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass
class GetComparisonShoppingPagesFindRequest:
    query_params: GetComparisonShoppingPagesFindQueryParams = field()
    

@dataclass
class GetComparisonShoppingPagesFindResponse:
    content_type: str = field()
    status_code: int = field()
    
