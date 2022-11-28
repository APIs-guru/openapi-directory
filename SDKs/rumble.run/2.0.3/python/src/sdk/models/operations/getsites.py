from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSitesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetSitesRequest:
    security: GetSitesSecurity = field()
    

@dataclass
class GetSitesResponse:
    content_type: str = field()
    status_code: int = field()
    sites: Optional[List[shared.Site]] = field(default=None)
    
