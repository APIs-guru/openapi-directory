from dataclasses import dataclass, field



@dataclass
class DeleteVersionPathParams:
    version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVersionSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteVersionRequest:
    path_params: DeleteVersionPathParams = field(default=None)
    security: DeleteVersionSecurity = field(default=None)
    

@dataclass
class DeleteVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
