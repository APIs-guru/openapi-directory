from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveSitePathParams:
    site_id: str = field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveSiteRequest:
    path_params: RemoveSitePathParams = field()
    security: RemoveSiteSecurity = field()
    

@dataclass
class RemoveSiteResponse:
    content_type: str = field()
    status_code: int = field()
    
