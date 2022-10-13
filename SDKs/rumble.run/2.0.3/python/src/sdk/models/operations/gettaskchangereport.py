from dataclasses import dataclass, field



@dataclass
class GetTaskChangeReportPathParams:
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTaskChangeReportSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTaskChangeReportRequest:
    path_params: GetTaskChangeReportPathParams = field(default=None)
    security: GetTaskChangeReportSecurity = field(default=None)
    

@dataclass
class GetTaskChangeReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
