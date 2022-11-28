from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CacheNonceGetPathParams:
    nonce: str = field(metadata={'path_param': { 'field_name': 'nonce', 'style': 'simple', 'explode': False }})
    

@dataclass
class CacheNonceGetRequest:
    path_params: CacheNonceGetPathParams = field()
    

@dataclass
class CacheNonceGetResponse:
    content_type: str = field()
    status_code: int = field()
    login_button: Optional[str] = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
