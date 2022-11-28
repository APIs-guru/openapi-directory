from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_USER_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateUserChannelPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserChannelUpdateUserChannelRequest:
    last_consumed_message_index: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'LastConsumedMessageIndex' }})
    last_consumption_timestamp: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'LastConsumptionTimestamp' }})
    notification_level: Optional[shared.UserChannelEnumNotificationLevelEnum] = field(default=None, metadata={'form': { 'field_name': 'NotificationLevel' }})
    

@dataclass
class UpdateUserChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserChannelRequest:
    path_params: UpdateUserChannelPathParams = field()
    security: UpdateUserChannelSecurity = field()
    request: Optional[UpdateUserChannelUpdateUserChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUserChannelResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v2_service_user_user_channel: Optional[shared.IPMessagingV2ServiceUserUserChannel] = field(default=None)
    
