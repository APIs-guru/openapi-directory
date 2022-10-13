from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddGroupToCustomerPathParams:
    customer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddGroupToCustomerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddGroupToCustomerRequest:
    path_params: AddGroupToCustomerPathParams = field(default=None)
    security: AddGroupToCustomerSecurity = field(default=None)
    

@dataclass
class AddGroupToCustomerResponse:
    add_group_to_customer_response: Optional[shared.AddGroupToCustomerResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
