from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConversationScopedWebhookPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConversationScopedWebhookRequestBodyCreateConversationScopedWebhookRequest:
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ConversationScopedWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_replay_after: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Configuration.ReplayAfter' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    target: shared.ConversationScopedWebhookEnumTargetEnum = field(default=None, metadata={'form': { 'field_name': 'Target' }})
    

@dataclass
class CreateConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConversationScopedWebhookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateConversationScopedWebhookPathParams = field(default=None)
    request: Optional[CreateConversationScopedWebhookRequestBodyCreateConversationScopedWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateConversationScopedWebhookSecurity = field(default=None)
    

@dataclass
class CreateConversationScopedWebhookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared.ConversationsV1ConversationConversationScopedWebhook] = field(default=None)
    
