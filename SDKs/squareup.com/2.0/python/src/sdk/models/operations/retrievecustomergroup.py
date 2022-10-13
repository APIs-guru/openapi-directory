from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveCustomerGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveCustomerGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveCustomerGroupRequest:
    path_params: RetrieveCustomerGroupPathParams = field(default=None)
    security: RetrieveCustomerGroupSecurity = field(default=None)
    

@dataclass
class RetrieveCustomerGroupResponse:
    content_type: str = field(default=None)
    retrieve_customer_group_response: Optional[shared.RetrieveCustomerGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    
