from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetChangelogPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChangelogSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetChangelogRequest:
    path_params: GetChangelogPathParams = field()
    security: GetChangelogSecurity = field()
    

@dataclass
class GetChangelogResponse:
    content_type: str = field()
    status_code: int = field()
    
