from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTaskChangeReportPathParams:
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskChangeReportSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTaskChangeReportRequest:
    path_params: GetTaskChangeReportPathParams = field()
    security: GetTaskChangeReportSecurity = field()
    

@dataclass
class GetTaskChangeReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
