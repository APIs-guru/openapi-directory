from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetVersionPathParams:
    version_id: str = field(metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVersionSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetVersionRequest:
    path_params: GetVersionPathParams = field()
    security: GetVersionSecurity = field()
    

@dataclass
class GetVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
