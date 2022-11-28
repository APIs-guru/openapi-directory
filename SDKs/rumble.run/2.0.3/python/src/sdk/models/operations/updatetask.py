from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTaskPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field()
    request: shared.Task = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateTaskSecurity = field()
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    task: Optional[shared.Task] = field(default=None)
    
