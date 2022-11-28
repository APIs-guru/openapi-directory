from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDPrepaidSettingsPathParams:
    subscription_id: str = field(metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidSettingsRequest:
    path_params: GetSubscriptionsSubscriptionIDPrepaidSettingsPathParams = field()
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    prepaid_settings_info: Optional[shared.PrepaidSettingsInfo] = field(default=None)
    
