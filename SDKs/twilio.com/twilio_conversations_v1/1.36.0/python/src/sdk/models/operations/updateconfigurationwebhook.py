from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
UPDATE_CONFIGURATION_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConfigurationWebhookUpdateConfigurationWebhookRequest:
    filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Filters' }})
    method: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Method' }})
    post_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PostWebhookUrl' }})
    pre_webhook_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PreWebhookUrl' }})
    target: Optional[shared.ConfigurationWebhookEnumTargetEnum] = field(default=None, metadata={'form': { 'field_name': 'Target' }})
    

@dataclass
class UpdateConfigurationWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConfigurationWebhookRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[UpdateConfigurationWebhookUpdateConfigurationWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConfigurationWebhookSecurity = field(default=None)
    

@dataclass
class UpdateConfigurationWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_configuration_configuration_webhook: Optional[shared.ConversationsV1ConfigurationConfigurationWebhook] = field(default=None)
    
