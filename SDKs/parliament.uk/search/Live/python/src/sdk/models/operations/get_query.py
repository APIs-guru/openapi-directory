from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueryQueryParams:
    count: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    in_url_prefixes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'inUrlPrefixes', 'style': 'form', 'explode': True }})
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    start: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    subdomains: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'subdomains', 'style': 'form', 'explode': True }})
    

@dataclass
class GetQueryRequest:
    query_params: GetQueryQueryParams = field(default=None)
    

@dataclass
class GetQueryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
