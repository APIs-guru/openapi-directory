from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueryQueryParams:
    q: str = field(metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    count: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    in_url_prefixes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inUrlPrefixes', 'style': 'form', 'explode': True }})
    start: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subdomains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subdomains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryRequest:
    query_params: GetQueryQueryParams = field()
    

@dataclass
class GetQueryResponse:
    content_type: str = field()
    status_code: int = field()
    
