from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateSiteRequest:
    request: shared.SiteOptions = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSiteSecurity = field(default=None)
    

@dataclass
class CreateSiteResponse:
    content_type: str = field(default=None)
    site: Optional[shared.Site] = field(default=None)
    status_code: int = field(default=None)
    
