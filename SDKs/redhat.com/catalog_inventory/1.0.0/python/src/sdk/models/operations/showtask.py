from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ShowTaskPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ShowTaskRequest:
    path_params: ShowTaskPathParams = field(default=None)
    

@dataclass
class ShowTaskResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    status_code: int = field(default=None)
    task: Optional[shared.Task] = field(default=None)
    
