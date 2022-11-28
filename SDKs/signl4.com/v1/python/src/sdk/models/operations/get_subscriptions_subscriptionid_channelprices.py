from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDChannelPricesPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDChannelPricesRequest:
    path_params: GetSubscriptionsSubscriptionIDChannelPricesPathParams = field()
    

@dataclass
class GetSubscriptionsSubscriptionIDChannelPricesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    channel_price_info: Optional[shared.ChannelPriceInfo] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
