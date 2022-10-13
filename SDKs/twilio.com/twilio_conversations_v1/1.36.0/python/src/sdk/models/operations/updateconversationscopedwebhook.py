from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
UPDATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationScopedWebhookPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationScopedWebhookRequestBodyUpdateConversationScopedWebhookRequest:
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ConversationScopedWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclass
class UpdateConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateConversationScopedWebhookPathParams = field(default=None)
    request: Optional[UpdateConversationScopedWebhookRequestBodyUpdateConversationScopedWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class UpdateConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared.ConversationsV1ConversationConversationScopedWebhook] = field(default=None)
    
