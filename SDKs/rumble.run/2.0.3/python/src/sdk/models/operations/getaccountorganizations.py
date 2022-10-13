from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAccountOrganizationsQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountOrganizationsSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetAccountOrganizationsRequest:
    query_params: GetAccountOrganizationsQueryParams = field(default=None)
    security: GetAccountOrganizationsSecurity = field(default=None)
    

@dataclass
class GetAccountOrganizationsResponse:
    content_type: str = field(default=None)
    organizations: Optional[List[shared.Organization]] = field(default=None)
    status_code: int = field(default=None)
    
