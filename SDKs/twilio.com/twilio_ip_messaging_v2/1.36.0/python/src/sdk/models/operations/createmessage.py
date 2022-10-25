from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
CREATE_MESSAGE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class CreateMessagePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.MessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class CreateMessageCreateMessageRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    from_: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'From' }})
    last_updated_by: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'LastUpdatedBy' }})
    media_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MediaSid' }})
    

@dataclass
class CreateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateMessagePathParams = field(default=None)
    headers: CreateMessageHeaders = field(default=None)
    request: Optional[CreateMessageCreateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMessageSecurity = field(default=None)
    

@dataclass
class CreateMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ip_messaging_v2_service_channel_message: Optional[shared.IPMessagingV2ServiceChannelMessage] = field(default=None)
    
