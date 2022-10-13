from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RemoveGroupFromCustomerPathParams:
    customer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveGroupFromCustomerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RemoveGroupFromCustomerRequest:
    path_params: RemoveGroupFromCustomerPathParams = field(default=None)
    security: RemoveGroupFromCustomerSecurity = field(default=None)
    

@dataclass
class RemoveGroupFromCustomerResponse:
    content_type: str = field(default=None)
    remove_group_from_customer_response: Optional[shared.RemoveGroupFromCustomerResponse] = field(default=None)
    status_code: int = field(default=None)
    
