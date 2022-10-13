from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCustomerPathParams:
    customer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerQueryParams:
    version: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'version', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteCustomerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteCustomerRequest:
    path_params: DeleteCustomerPathParams = field(default=None)
    query_params: DeleteCustomerQueryParams = field(default=None)
    security: DeleteCustomerSecurity = field(default=None)
    

@dataclass
class DeleteCustomerResponse:
    content_type: str = field(default=None)
    delete_customer_response: Optional[shared.DeleteCustomerResponse] = field(default=None)
    status_code: int = field(default=None)
    
