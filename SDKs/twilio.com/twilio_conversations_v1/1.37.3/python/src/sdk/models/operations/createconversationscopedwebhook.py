from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateConversationScopedWebhookPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateConversationScopedWebhookCreateConversationScopedWebhookRequest:
    target: shared.ConversationScopedWebhookEnumTargetEnum = field(metadata={'form': { 'field_name': 'Target' }})
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ConversationScopedWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_replay_after: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Configuration.ReplayAfter' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclass
class CreateConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateConversationScopedWebhookRequest:
    path_params: CreateConversationScopedWebhookPathParams = field()
    security: CreateConversationScopedWebhookSecurity = field()
    request: Optional[CreateConversationScopedWebhookCreateConversationScopedWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateConversationScopedWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared.ConversationsV1ConversationConversationScopedWebhook] = field(default=None)
    
