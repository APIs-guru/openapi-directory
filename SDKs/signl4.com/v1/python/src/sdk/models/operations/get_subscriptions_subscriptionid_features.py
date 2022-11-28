from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDFeaturesPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDFeaturesRequest:
    path_params: GetSubscriptionsSubscriptionIDFeaturesPathParams = field()
    

@dataclass
class GetSubscriptionsSubscriptionIDFeaturesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    subscription_features: Optional[List[shared.SubscriptionFeature]] = field(default=None)
    
