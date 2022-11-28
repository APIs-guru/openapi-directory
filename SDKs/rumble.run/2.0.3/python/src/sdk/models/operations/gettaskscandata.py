from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaskScanDataPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskScanDataSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTaskScanDataRequest:
    path_params: GetTaskScanDataPathParams = field()
    security: GetTaskScanDataSecurity = field()
    

@dataclass
class GetTaskScanDataResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
