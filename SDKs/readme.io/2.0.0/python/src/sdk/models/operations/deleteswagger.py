from dataclasses import dataclass, field



@dataclass
class DeleteSwaggerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSwaggerSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSwaggerRequest:
    path_params: DeleteSwaggerPathParams = field(default=None)
    security: DeleteSwaggerSecurity = field(default=None)
    

@dataclass
class DeleteSwaggerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
