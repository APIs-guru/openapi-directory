from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubscriptionsSubscriptionIDPrepaidSettingsPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidSettingsRequest:
    path_params: GetSubscriptionsSubscriptionIDPrepaidSettingsPathParams = field(default=None)
    

@dataclass
class GetSubscriptionsSubscriptionIDPrepaidSettingsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    prepaid_settings_info: Optional[shared.PrepaidSettingsInfo] = field(default=None)
    status_code: int = field(default=None)
    
