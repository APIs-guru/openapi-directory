from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSubscriptionsSubscriptionIDPrepaidSettingsPathParams:
    subscription_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subscriptionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSubscriptionsSubscriptionIDPrepaidSettingsRequests:
    prepaid_settings_info: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    prepaid_settings_info1: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    prepaid_settings_info2: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    prepaid_settings_info3: Optional[shared.PrepaidSettingsInfo] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutSubscriptionsSubscriptionIDPrepaidSettingsRequest:
    path_params: PutSubscriptionsSubscriptionIDPrepaidSettingsPathParams = field(default=None)
    request: Optional[PutSubscriptionsSubscriptionIDPrepaidSettingsRequests] = field(default=None)
    

@dataclass
class PutSubscriptionsSubscriptionIDPrepaidSettingsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    prepaid_settings_info: Optional[shared.PrepaidSettingsInfo] = field(default=None)
    status_code: int = field(default=None)
    
