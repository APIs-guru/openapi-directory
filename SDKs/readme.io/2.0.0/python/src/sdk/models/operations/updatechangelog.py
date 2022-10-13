from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UpdateChangelogPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChangelogSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChangelogRequest:
    path_params: UpdateChangelogPathParams = field(default=None)
    request: shared.Changelog = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateChangelogSecurity = field(default=None)
    

@dataclass
class UpdateChangelogResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
