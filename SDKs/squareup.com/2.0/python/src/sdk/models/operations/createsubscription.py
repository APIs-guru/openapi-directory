from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateSubscriptionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateSubscriptionRequest:
    request: shared.CreateSubscriptionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateSubscriptionSecurity = field(default=None)
    

@dataclass
class CreateSubscriptionResponse:
    content_type: str = field(default=None)
    create_subscription_response: Optional[shared.CreateSubscriptionResponse] = field(default=None)
    status_code: int = field(default=None)
    
