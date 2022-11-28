from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTaskRequest:
    path_params: GetTaskPathParams = field()
    security: GetTaskSecurity = field()
    

@dataclass
class GetTaskResponse:
    content_type: str = field()
    status_code: int = field()
    task: Optional[shared.Task] = field(default=None)
    
