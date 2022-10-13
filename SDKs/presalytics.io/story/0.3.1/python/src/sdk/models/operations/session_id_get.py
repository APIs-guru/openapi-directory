from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SessionIDGetPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionIDGetQueryParams:
    include_relationships: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionIDGetRequest:
    path_params: SessionIDGetPathParams = field(default=None)
    query_params: SessionIDGetQueryParams = field(default=None)
    

@dataclass
class SessionIDGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    session: Optional[shared.Session] = field(default=None)
    
