from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTaskPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field(default=None)
    request: shared.Task = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field(default=None)
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    status_code: int = field(default=None)
    
