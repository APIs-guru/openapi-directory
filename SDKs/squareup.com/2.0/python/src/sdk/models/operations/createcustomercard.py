from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCustomerCardPathParams:
    customer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCustomerCardSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCustomerCardRequest:
    path_params: CreateCustomerCardPathParams = field(default=None)
    request: shared.CreateCustomerCardRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomerCardSecurity = field(default=None)
    

@dataclass
class CreateCustomerCardResponse:
    content_type: str = field(default=None)
    create_customer_card_response: Optional[shared.CreateCustomerCardResponse] = field(default=None)
    status_code: int = field(default=None)
    
