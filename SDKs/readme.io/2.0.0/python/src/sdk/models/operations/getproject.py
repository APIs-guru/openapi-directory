from dataclasses import dataclass, field



@dataclass
class GetProjectSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetProjectRequest:
    security: GetProjectSecurity = field(default=None)
    

@dataclass
class GetProjectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
