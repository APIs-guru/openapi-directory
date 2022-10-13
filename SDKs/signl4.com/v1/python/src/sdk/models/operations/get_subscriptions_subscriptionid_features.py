from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDFeaturesPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDFeaturesRequest:
    path_params: GetSubscriptionsSubscriptionIDFeaturesPathParams = field(default=None)
    

@dataclass
class GetSubscriptionsSubscriptionIDFeaturesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    subscription_features: Optional[List[shared.SubscriptionFeature]] = field(default=None)
    
