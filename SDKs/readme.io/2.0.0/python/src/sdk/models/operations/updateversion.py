from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateVersionPathParams:
    version_id: str = field(default=None, metadata={'path_param': { 'field_name': 'versionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateVersionSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateVersionRequest:
    path_params: UpdateVersionPathParams = field(default=None)
    request: shared.Version = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateVersionSecurity = field(default=None)
    

@dataclass
class UpdateVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
