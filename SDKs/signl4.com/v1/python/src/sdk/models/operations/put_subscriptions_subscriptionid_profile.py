from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSubscriptionsSubscriptionIDProfilePathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSubscriptionsSubscriptionIDProfileRequests:
    subscription_profile: Optional[shared.SubscriptionProfile] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    subscription_profile1: Optional[shared.SubscriptionProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    subscription_profile2: Optional[shared.SubscriptionProfile] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    subscription_profile3: Optional[shared.SubscriptionProfile] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSubscriptionsSubscriptionIDProfileRequest:
    path_params: PutSubscriptionsSubscriptionIDProfilePathParams = field(default=None)
    request: Optional[PutSubscriptionsSubscriptionIDProfileRequests] = field(default=None)
    

@dataclass
class PutSubscriptionsSubscriptionIDProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    subscription_info: Optional[shared.SubscriptionInfo] = field(default=None)
    
