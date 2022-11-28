from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInfoQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass
class GetInfoRequest:
    query_params: GetInfoQueryParams = field()
    

@dataclass
class GetInfoResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
