from dataclasses import dataclass, field



@dataclass
class StopTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class StopTaskSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StopTaskRequest:
    path_params: StopTaskPathParams = field(default=None)
    security: StopTaskSecurity = field(default=None)
    

@dataclass
class StopTaskResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
