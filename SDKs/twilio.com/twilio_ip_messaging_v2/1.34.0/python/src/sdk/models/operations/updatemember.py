from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_MEMBER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateMemberPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMemberHeaders:
    x_twilio_webhook_enabled: Optional[shared.MemberEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class UpdateMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMemberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMemberPathParams = field(default=None)
    headers: UpdateMemberHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMemberSecurity = field(default=None)
    

@dataclass
class UpdateMemberResponses:
    ip_messaging_v2_service_channel_member: Optional[shared.IPMessagingV2ServiceChannelMember] = field(default=None)
    

@dataclass
class UpdateMemberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateMemberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
