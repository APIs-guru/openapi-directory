from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_SERVICE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceConversationScopedWebhookPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest:
    target: shared.ServiceConversationScopedWebhookEnumTargetEnum = field(metadata={'form': { 'field_name': 'Target' }})
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ServiceConversationScopedWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_replay_after: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Configuration.ReplayAfter' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclass
class CreateServiceConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceConversationScopedWebhookRequest:
    path_params: CreateServiceConversationScopedWebhookPathParams = field()
    security: CreateServiceConversationScopedWebhookSecurity = field()
    request: Optional[CreateServiceConversationScopedWebhookCreateServiceConversationScopedWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateServiceConversationScopedWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_conversation_service_conversation_scoped_webhook: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook] = field(default=None)
    
