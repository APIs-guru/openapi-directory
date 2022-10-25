from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceConversationScopedWebhookPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest:
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ServiceConversationScopedWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_replay_after: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Configuration.ReplayAfter' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    target: shared.ServiceConversationScopedWebhookEnumTargetEnum = field(default=None, metadata={'form': { 'field_name': 'Target' }})
    

@dataclass
class CreateServiceConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateServiceConversationScopedWebhookPathParams = field(default=None)
    request: Optional[CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class CreateServiceConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_conversation_service_conversation_scoped_webhook: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook] = field(default=None)
    
