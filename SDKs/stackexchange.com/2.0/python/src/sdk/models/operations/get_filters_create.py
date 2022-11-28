from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFiltersCreateQueryParams:
    base: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'base', 'style': 'form', 'explode': True }})
    exclude: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    unsafe: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'unsafe', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFiltersCreateRequest:
    query_params: GetFiltersCreateQueryParams = field()
    

@dataclass
class GetFiltersCreateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
