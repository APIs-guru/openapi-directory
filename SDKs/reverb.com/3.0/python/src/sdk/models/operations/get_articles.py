from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetArticlesQueryParams:
    exclude_featured: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'exclude_featured', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class GetArticlesRequest:
    query_params: GetArticlesQueryParams = field()
    

@dataclass
class GetArticlesResponse:
    content_type: str = field()
    status_code: int = field()
    
