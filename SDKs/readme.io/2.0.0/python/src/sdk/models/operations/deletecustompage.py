from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteCustomPagePathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomPageSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCustomPageRequest:
    path_params: DeleteCustomPagePathParams = field()
    security: DeleteCustomPageSecurity = field()
    

@dataclass
class DeleteCustomPageResponse:
    content_type: str = field()
    status_code: int = field()
    
