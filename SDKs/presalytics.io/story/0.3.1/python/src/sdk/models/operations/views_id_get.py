from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ViewsIDGetPathParams:
    view_id: str = field(metadata={'path_param': { 'field_name': 'view_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ViewsIDGetRequest:
    path_params: ViewsIDGetPathParams = field()
    

@dataclass
class ViewsIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    problem_detail: Optional[Any] = field(default=None)
    view: Optional[shared.View] = field(default=None)
    
