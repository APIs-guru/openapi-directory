from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CancelSubscriptionPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelSubscriptionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelSubscriptionRequest:
    path_params: CancelSubscriptionPathParams = field(default=None)
    security: CancelSubscriptionSecurity = field(default=None)
    

@dataclass
class CancelSubscriptionResponse:
    cancel_subscription_response: Optional[shared.CancelSubscriptionResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
