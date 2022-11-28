from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteChangelogPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChangelogSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteChangelogRequest:
    path_params: DeleteChangelogPathParams = field()
    security: DeleteChangelogSecurity = field()
    

@dataclass
class DeleteChangelogResponse:
    content_type: str = field()
    status_code: int = field()
    
