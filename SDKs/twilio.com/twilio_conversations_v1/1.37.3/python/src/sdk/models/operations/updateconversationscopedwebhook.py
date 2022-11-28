from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_CONVERSATION_SCOPED_WEBHOOK_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConversationScopedWebhookPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest:
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ConversationScopedWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclass
class UpdateConversationScopedWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConversationScopedWebhookRequest:
    path_params: UpdateConversationScopedWebhookPathParams = field()
    security: UpdateConversationScopedWebhookSecurity = field()
    request: Optional[UpdateConversationScopedWebhookUpdateConversationScopedWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateConversationScopedWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_conversation_conversation_scoped_webhook: Optional[shared.ConversationsV1ConversationConversationScopedWebhook] = field(default=None)
    
