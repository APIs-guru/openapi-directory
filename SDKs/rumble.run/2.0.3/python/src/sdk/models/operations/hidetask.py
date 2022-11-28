from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class HideTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class HideTaskSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class HideTaskRequest:
    path_params: HideTaskPathParams = field()
    security: HideTaskSecurity = field()
    

@dataclass
class HideTaskResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
