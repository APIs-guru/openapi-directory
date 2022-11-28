from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class UpdateWebChannelPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWebChannelUpdateWebChannelRequest:
    chat_status: Optional[shared.WebChannelEnumChatStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'ChatStatus' }})
    post_engagement_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PostEngagementData' }})
    

@dataclass
class UpdateWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateWebChannelRequest:
    path_params: UpdateWebChannelPathParams = field()
    security: UpdateWebChannelSecurity = field()
    request: Optional[UpdateWebChannelUpdateWebChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateWebChannelResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_web_channel: Optional[shared.FlexV1WebChannel] = field(default=None)
    
