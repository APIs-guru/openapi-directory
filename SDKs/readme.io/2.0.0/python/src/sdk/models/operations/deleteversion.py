from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteVersionPathParams:
    version_id: str = field(metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVersionSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteVersionRequest:
    path_params: DeleteVersionPathParams = field()
    security: DeleteVersionSecurity = field()
    

@dataclass
class DeleteVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
