from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class SessionIDDeletePathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionIDDeleteRequest:
    path_params: SessionIDDeletePathParams = field(default=None)
    

@dataclass
class SessionIDDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    
