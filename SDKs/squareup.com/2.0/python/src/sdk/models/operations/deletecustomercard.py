from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCustomerCardPathParams:
    card_id: str = field(default=None, metadata={'path_param': { 'field_name': 'card_id', 'style': 'simple', 'explode': False }})
    customer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCustomerCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteCustomerCardRequest:
    path_params: DeleteCustomerCardPathParams = field(default=None)
    security: DeleteCustomerCardSecurity = field(default=None)
    

@dataclass
class DeleteCustomerCardResponse:
    content_type: str = field(default=None)
    delete_customer_card_response: Optional[shared.DeleteCustomerCardResponse] = field(default=None)
    status_code: int = field(default=None)
    
