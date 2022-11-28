from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetProjectSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetProjectRequest:
    security: GetProjectSecurity = field()
    

@dataclass
class GetProjectResponse:
    content_type: str = field()
    status_code: int = field()
    
