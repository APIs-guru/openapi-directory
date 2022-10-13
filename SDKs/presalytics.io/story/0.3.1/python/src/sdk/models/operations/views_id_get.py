from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ViewsIDGetPathParams:
    view_id: str = field(default=None, metadata={'path_param': { 'field_name': 'view_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewsIDGetRequest:
    path_params: ViewsIDGetPathParams = field(default=None)
    

@dataclass
class ViewsIDGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    problem_detail: Optional[Any] = field(default=None)
    view: Optional[shared.View] = field(default=None)
    
