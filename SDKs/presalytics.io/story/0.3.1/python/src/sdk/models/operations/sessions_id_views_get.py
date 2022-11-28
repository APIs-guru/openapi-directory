from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class SessionsIDViewsGetPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'session_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionsIDViewsGetRequest:
    path_params: SessionsIDViewsGetPathParams = field()
    

@dataclass
class SessionsIDViewsGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    views: Optional[List[shared.View]] = field(default=None)
    
