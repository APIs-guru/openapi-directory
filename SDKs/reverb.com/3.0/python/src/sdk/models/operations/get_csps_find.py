from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCspsFindQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    slug: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'slug', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCspsFindRequest:
    query_params: GetCspsFindQueryParams = field(default=None)
    

@dataclass
class GetCspsFindResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
