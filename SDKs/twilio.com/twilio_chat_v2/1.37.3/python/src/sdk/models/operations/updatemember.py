from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateMemberPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMemberHeaders:
    x_twilio_webhook_enabled: Optional[shared.MemberEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMemberUpdateMemberRequest:
    attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    last_consumed_message_index: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'LastConsumedMessageIndex' }})
    last_consumption_timestamp: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'LastConsumptionTimestamp' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class UpdateMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMemberRequest:
    headers: UpdateMemberHeaders = field()
    path_params: UpdateMemberPathParams = field()
    security: UpdateMemberSecurity = field()
    request: Optional[UpdateMemberUpdateMemberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMemberResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v2_service_channel_member: Optional[shared.ChatV2ServiceChannelMember] = field(default=None)
    
