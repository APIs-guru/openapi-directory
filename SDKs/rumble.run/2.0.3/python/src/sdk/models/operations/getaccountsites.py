from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountSitesQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountSitesSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountSitesRequest:
    query_params: GetAccountSitesQueryParams = field()
    security: GetAccountSitesSecurity = field()
    

@dataclass
class GetAccountSitesResponse:
    content_type: str = field()
    status_code: int = field()
    sites: Optional[List[shared.Site]] = field(default=None)
    
