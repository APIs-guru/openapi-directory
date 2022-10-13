from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CacheNonceGetPathParams:
    nonce: str = field(default=None, metadata={'path_param': { 'field_name': 'nonce', 'style': 'simple', 'explode': False }})
    

@dataclass
class CacheNonceGetRequest:
    path_params: CacheNonceGetPathParams = field(default=None)
    

@dataclass
class CacheNonceGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
