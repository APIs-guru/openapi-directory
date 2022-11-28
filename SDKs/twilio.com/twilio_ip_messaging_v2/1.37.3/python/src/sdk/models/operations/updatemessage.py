from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_MESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateMessagePathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.MessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessageUpdateMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    from_: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'From' }})
    last_updated_by: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'LastUpdatedBy' }})
    

@dataclass
class UpdateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessageRequest:
    headers: UpdateMessageHeaders = field()
    path_params: UpdateMessagePathParams = field()
    security: UpdateMessageSecurity = field()
    request: Optional[UpdateMessageUpdateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMessageResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v2_service_channel_message: Optional[shared.IPMessagingV2ServiceChannelMessage] = field(default=None)
    
