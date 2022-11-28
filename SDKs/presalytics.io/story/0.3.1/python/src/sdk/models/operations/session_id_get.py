from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SessionIDGetPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionIDGetQueryParams:
    include_relationships: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_relationships', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionIDGetRequest:
    path_params: SessionIDGetPathParams = field()
    query_params: SessionIDGetQueryParams = field()
    

@dataclass
class SessionIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    session: Optional[shared.Session] = field(default=None)
    
