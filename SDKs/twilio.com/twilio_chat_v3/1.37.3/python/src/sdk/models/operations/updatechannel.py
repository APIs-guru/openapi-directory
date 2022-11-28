from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateChannelPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared.ChannelEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelUpdateChannelRequest:
    messaging_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    type: Optional[shared.ChannelEnumChannelTypeEnum] = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class UpdateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChannelRequest:
    headers: UpdateChannelHeaders = field()
    path_params: UpdateChannelPathParams = field()
    security: UpdateChannelSecurity = field()
    request: Optional[UpdateChannelUpdateChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateChannelResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v3_channel: Optional[shared.ChatV3Channel] = field(default=None)
    
