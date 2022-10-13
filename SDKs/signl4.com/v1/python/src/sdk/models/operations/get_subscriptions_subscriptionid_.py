from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDRequest:
    path_params: GetSubscriptionsSubscriptionIDPathParams = field(default=None)
    

@dataclass
class GetSubscriptionsSubscriptionIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    subscription_info: Optional[shared.SubscriptionInfo] = field(default=None)
    
