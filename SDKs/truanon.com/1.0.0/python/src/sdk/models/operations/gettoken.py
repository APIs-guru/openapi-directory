from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTokenQueryParams:
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    service: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTokenRequest:
    query_params: GetTokenQueryParams = field()
    

@dataclass
class GetTokenResponse:
    content_type: str = field()
    status_code: int = field()
    
