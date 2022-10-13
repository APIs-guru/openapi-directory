from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDPrepaidBalancePathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidBalanceRequest:
    path_params: GetSubscriptionsSubscriptionIDPrepaidBalancePathParams = field(default=None)
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidBalanceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    prepaid_balance_info: Optional[shared.PrepaidBalanceInfo] = field(default=None)
    status_code: int = field(default=None)
    
