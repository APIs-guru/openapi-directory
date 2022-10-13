from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field(default=None)
    request: shared.Task = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTaskSecurity = field(default=None)
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    task: Optional[shared.Task] = field(default=None)
    
