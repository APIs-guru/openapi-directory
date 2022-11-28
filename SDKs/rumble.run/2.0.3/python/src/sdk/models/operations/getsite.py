from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSitePathParams:
    site_id: str = field(metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSiteRequest:
    path_params: GetSitePathParams = field()
    security: GetSiteSecurity = field()
    

@dataclass
class GetSiteResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
