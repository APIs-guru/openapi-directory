from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSitePathParams:
    site_id: str = field(default=None, metadata={'path_param': { 'field_name': 'site_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdateSiteRequest:
    path_params: UpdateSitePathParams = field(default=None)
    request: shared.SiteOptions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateSiteSecurity = field(default=None)
    

@dataclass
class UpdateSiteResponse:
    content_type: str = field(default=None)
    site: Optional[shared.Site] = field(default=None)
    status_code: int = field(default=None)
    
