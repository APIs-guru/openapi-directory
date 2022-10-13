from dataclasses import dataclass, field



@dataclass
class HideTaskPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class HideTaskSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class HideTaskRequest:
    path_params: HideTaskPathParams = field(default=None)
    security: HideTaskSecurity = field(default=None)
    

@dataclass
class HideTaskResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
