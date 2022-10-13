from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTokenQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTokenRequest:
    query_params: GetTokenQueryParams = field(default=None)
    

@dataclass
class GetTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
