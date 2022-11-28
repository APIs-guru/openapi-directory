from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from sdk.models import shared


UPDATE_CHANNEL_WEBHOOK_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateChannelWebhookPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelWebhookUpdateChannelWebhookRequest:
    configuration_filters: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Filters' }})
    configuration_flow_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.FlowSid' }})
    configuration_method: Optional[shared.ChannelWebhookEnumMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Method' }})
    configuration_retry_count: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Configuration.RetryCount' }})
    configuration_triggers: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Triggers' }})
    configuration_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Configuration.Url' }})
    

@dataclass
class UpdateChannelWebhookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChannelWebhookRequest:
    path_params: UpdateChannelWebhookPathParams = field()
    security: UpdateChannelWebhookSecurity = field()
    request: Optional[UpdateChannelWebhookUpdateChannelWebhookRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateChannelWebhookResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v2_service_channel_channel_webhook: Optional[shared.IPMessagingV2ServiceChannelChannelWebhook] = field(default=None)
    
