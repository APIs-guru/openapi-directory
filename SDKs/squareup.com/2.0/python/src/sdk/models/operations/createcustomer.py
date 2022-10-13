from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateCustomerSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateCustomerRequest:
    request: shared.CreateCustomerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateCustomerSecurity = field(default=None)
    

@dataclass
class CreateCustomerResponse:
    content_type: str = field(default=None)
    create_customer_response: Optional[shared.CreateCustomerResponse] = field(default=None)
    status_code: int = field(default=None)
    
