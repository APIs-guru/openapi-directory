from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SessionsIDViewsGetPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionsIDViewsGetRequest:
    path_params: SessionsIDViewsGetPathParams = field(default=None)
    

@dataclass
class SessionsIDViewsGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    views: Optional[List[shared.View]] = field(default=None)
    
