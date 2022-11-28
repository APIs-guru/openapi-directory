from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ViewsIDDeletePathParams:
    view_id: str = field(metadata={'path_param': { 'field_name': 'view_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewsIDDeleteRequest:
    path_params: ViewsIDDeletePathParams = field()
    

@dataclass
class ViewsIDDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    
