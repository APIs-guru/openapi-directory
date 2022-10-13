from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSitePathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSiteRequest:
    path_params: GetSitePathParams = field(default=None)
    security: GetSiteSecurity = field(default=None)
    

@dataclass
class GetSiteResponse:
    content_type: str = field(default=None)
    site: Optional[shared.Site] = field(default=None)
    status_code: int = field(default=None)
    
