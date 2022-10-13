from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_CHANNEL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateChannelPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateChannelHeaders:
    x_twilio_webhook_enabled: Optional[shared.ChannelEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateChannelRequestBodyUpdateChannelRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    created_by: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CreatedBy' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateChannelPathParams = field(default=None)
    headers: UpdateChannelHeaders = field(default=None)
    request: Optional[UpdateChannelRequestBodyUpdateChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateChannelSecurity = field(default=None)
    

@dataclass
class UpdateChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    chat_v2_service_channel: Optional[shared.ChatV2ServiceChannel] = field(default=None)
    
