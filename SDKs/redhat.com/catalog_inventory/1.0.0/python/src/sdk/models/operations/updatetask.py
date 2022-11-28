from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateTaskPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskRequest:
    path_params: UpdateTaskPathParams = field()
    request: shared.TaskInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateTaskResponse:
    content_type: str = field()
    status_code: int = field()
    error_not_found: Optional[shared.ErrorNotFound] = field(default=None)
    
