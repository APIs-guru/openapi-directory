from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCustomerGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteCustomerGroupRequest:
    path_params: DeleteCustomerGroupPathParams = field(default=None)
    security: DeleteCustomerGroupSecurity = field(default=None)
    

@dataclass
class DeleteCustomerGroupResponse:
    content_type: str = field(default=None)
    delete_customer_group_response: Optional[shared.DeleteCustomerGroupResponse] = field(default=None)
    status_code: int = field(default=None)
    
