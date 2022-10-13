from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDChannelPricesPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDChannelPricesRequest:
    path_params: GetSubscriptionsSubscriptionIDChannelPricesPathParams = field(default=None)
    

@dataclass
class GetSubscriptionsSubscriptionIDChannelPricesResponse:
    body: bytes = field(default=None)
    channel_price_info: Optional[shared.ChannelPriceInfo] = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
