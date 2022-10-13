from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListCustomerGroupsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCustomerGroupsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListCustomerGroupsRequest:
    query_params: ListCustomerGroupsQueryParams = field(default=None)
    security: ListCustomerGroupsSecurity = field(default=None)
    

@dataclass
class ListCustomerGroupsResponse:
    content_type: str = field(default=None)
    list_customer_groups_response: Optional[shared.ListCustomerGroupsResponse] = field(default=None)
    status_code: int = field(default=None)
    
