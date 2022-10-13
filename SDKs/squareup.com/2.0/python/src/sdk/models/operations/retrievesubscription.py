from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveSubscriptionPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscription_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RetrieveSubscriptionSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RetrieveSubscriptionRequest:
    path_params: RetrieveSubscriptionPathParams = field(default=None)
    security: RetrieveSubscriptionSecurity = field(default=None)
    

@dataclass
class RetrieveSubscriptionResponse:
    content_type: str = field(default=None)
    retrieve_subscription_response: Optional[shared.RetrieveSubscriptionResponse] = field(default=None)
    status_code: int = field(default=None)
    
