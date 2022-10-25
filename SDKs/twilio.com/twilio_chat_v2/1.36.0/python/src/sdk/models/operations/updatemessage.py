from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_MESSAGE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateMessagePathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.MessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

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
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMessagePathParams = field(default=None)
    headers: UpdateMessageHeaders = field(default=None)
    request: Optional[UpdateMessageUpdateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMessageSecurity = field(default=None)
    

@dataclass
class UpdateMessageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    chat_v2_service_channel_message: Optional[shared.ChatV2ServiceChannelMessage] = field(default=None)
    
