from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateCustomerGroupPathParams:
    group_id: str = field(default=None, metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateCustomerGroupRequest:
    path_params: UpdateCustomerGroupPathParams = field(default=None)
    request: shared.UpdateCustomerGroupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCustomerGroupSecurity = field(default=None)
    

@dataclass
class UpdateCustomerGroupResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_customer_group_response: Optional[shared.UpdateCustomerGroupResponse] = field(default=None)
    
