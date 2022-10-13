from dataclasses import dataclass, field



@dataclass
class GetVersionPathParams:
    version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVersionSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetVersionRequest:
    path_params: GetVersionPathParams = field(default=None)
    security: GetVersionSecurity = field(default=None)
    

@dataclass
class GetVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
