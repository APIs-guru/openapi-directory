from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateCustomerPathParams:
    customer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCustomerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateCustomerRequest:
    path_params: UpdateCustomerPathParams = field(default=None)
    request: shared.UpdateCustomerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateCustomerSecurity = field(default=None)
    

@dataclass
class UpdateCustomerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_customer_response: Optional[shared.UpdateCustomerResponse] = field(default=None)
    
