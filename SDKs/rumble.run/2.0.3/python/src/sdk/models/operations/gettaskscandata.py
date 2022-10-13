from dataclasses import dataclass, field



@dataclass
class GetTaskScanDataPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskScanDataSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTaskScanDataRequest:
    path_params: GetTaskScanDataPathParams = field(default=None)
    security: GetTaskScanDataSecurity = field(default=None)
    

@dataclass
class GetTaskScanDataResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
