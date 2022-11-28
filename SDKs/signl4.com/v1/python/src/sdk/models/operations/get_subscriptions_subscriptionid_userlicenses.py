from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDUserLicensesPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDUserLicensesRequest:
    path_params: GetSubscriptionsSubscriptionIDUserLicensesPathParams = field()
    

@dataclass
class GetSubscriptionsSubscriptionIDUserLicensesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    user_license_info: Optional[shared.UserLicenseInfo] = field(default=None)
    
