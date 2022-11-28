from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetListingsSlugEditPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugEditSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingsSlugEditRequest:
    path_params: GetListingsSlugEditPathParams = field()
    security: GetListingsSlugEditSecurity = field()
    

@dataclass
class GetListingsSlugEditResponse:
    content_type: str = field()
    status_code: int = field()
    
