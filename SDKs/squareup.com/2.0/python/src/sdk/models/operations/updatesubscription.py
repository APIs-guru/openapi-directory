from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSubscriptionPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSubscriptionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UpdateSubscriptionRequest:
    path_params: UpdateSubscriptionPathParams = field(default=None)
    request: shared.UpdateSubscriptionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateSubscriptionSecurity = field(default=None)
    

@dataclass
class UpdateSubscriptionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    update_subscription_response: Optional[shared.UpdateSubscriptionResponse] = field(default=None)
    
