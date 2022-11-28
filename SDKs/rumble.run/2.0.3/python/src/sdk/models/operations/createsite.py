from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateSiteSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CreateSiteRequest:
    request: shared.SiteOptions = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSiteSecurity = field()
    

@dataclass
class CreateSiteResponse:
    content_type: str = field()
    status_code: int = field()
    site: Optional[shared.Site] = field(default=None)
    
