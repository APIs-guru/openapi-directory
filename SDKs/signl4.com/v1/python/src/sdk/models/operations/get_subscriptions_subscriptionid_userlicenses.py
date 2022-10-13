from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDUserLicensesPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDUserLicensesRequest:
    path_params: GetSubscriptionsSubscriptionIDUserLicensesPathParams = field(default=None)
    

@dataclass
class GetSubscriptionsSubscriptionIDUserLicensesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    user_license_info: Optional[shared.UserLicenseInfo] = field(default=None)
    
