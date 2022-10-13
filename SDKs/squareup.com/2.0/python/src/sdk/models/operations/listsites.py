from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListSitesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListSitesRequest:
    security: ListSitesSecurity = field(default=None)
    

@dataclass
class ListSitesResponse:
    content_type: str = field(default=None)
    list_sites_response: Optional[shared.ListSitesResponse] = field(default=None)
    status_code: int = field(default=None)
    
