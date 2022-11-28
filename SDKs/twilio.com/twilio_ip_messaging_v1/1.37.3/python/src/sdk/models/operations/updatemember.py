from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_MEMBER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateMemberPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMemberUpdateMemberRequest:
    last_consumed_message_index: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'LastConsumedMessageIndex' }})
    role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RoleSid' }})
    

@dataclass
class UpdateMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMemberRequest:
    path_params: UpdateMemberPathParams = field()
    security: UpdateMemberSecurity = field()
    request: Optional[UpdateMemberUpdateMemberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMemberResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v1_service_channel_member: Optional[shared.IPMessagingV1ServiceChannelMember] = field(default=None)
    
