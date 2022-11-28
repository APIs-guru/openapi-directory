from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class StopTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopTaskSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StopTaskRequest:
    path_params: StopTaskPathParams = field()
    security: StopTaskSecurity = field()
    

@dataclass
class StopTaskResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
