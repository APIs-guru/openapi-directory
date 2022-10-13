from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSitesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSitesRequest:
    security: GetSitesSecurity = field(default=None)
    

@dataclass
class GetSitesResponse:
    content_type: str = field(default=None)
    sites: Optional[List[shared.Site]] = field(default=None)
    status_code: int = field(default=None)
    
