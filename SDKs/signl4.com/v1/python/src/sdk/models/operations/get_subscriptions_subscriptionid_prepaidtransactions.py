from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDPrepaidTransactionsPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidTransactionsRequest:
    path_params: GetSubscriptionsSubscriptionIDPrepaidTransactionsPathParams = field(default=None)
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidTransactionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    prepaid_transaction_infos: Optional[List[shared.PrepaidTransactionInfo]] = field(default=None)
    status_code: int = field(default=None)
    
