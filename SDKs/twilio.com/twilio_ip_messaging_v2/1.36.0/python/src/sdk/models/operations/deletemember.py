from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
DELETE_MEMBER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteMemberPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMemberHeaders:
    x_twilio_webhook_enabled: Optional[shared.MemberEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMemberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteMemberPathParams = field(default=None)
    headers: DeleteMemberHeaders = field(default=None)
    security: DeleteMemberSecurity = field(default=None)
    

@dataclass
class DeleteMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
