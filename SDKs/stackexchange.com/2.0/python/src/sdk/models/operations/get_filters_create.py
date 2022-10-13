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
    query_params: GetFiltersCreateQueryParams = field(default=None)
    

@dataclass
class GetFiltersCreateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
