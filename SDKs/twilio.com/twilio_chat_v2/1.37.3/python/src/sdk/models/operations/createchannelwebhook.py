from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_CHANNEL_WEBHOOK_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateChannelWebhookPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateChannelWebhookCreateChannelWebhookRequest:
    type: shared.ChannelWebhookEnumTypeEnum = field(metadata={'form': { 'field_name': 'Type' }})
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ChannelWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_retry_count: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Configuration.RetryCount' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclass
class CreateChannelWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChannelWebhookRequest:
    path_params: CreateChannelWebhookPathParams = field()
    security: CreateChannelWebhookSecurity = field()
    request: Optional[CreateChannelWebhookCreateChannelWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateChannelWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v2_service_channel_channel_webhook: Optional[shared.ChatV2ServiceChannelChannelWebhook] = field(default=None)
    
