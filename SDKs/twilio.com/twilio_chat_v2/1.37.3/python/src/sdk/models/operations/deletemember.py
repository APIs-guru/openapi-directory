from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


DELETE_MEMBER_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class DeleteMemberPathParams:
    channel_sid: str = field(metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMemberHeaders:
    x_twilio_webhook_enabled: Optional[shared.MemberEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMemberRequest:
    headers: DeleteMemberHeaders = field()
    path_params: DeleteMemberPathParams = field()
    security: DeleteMemberSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteMemberResponse:
    content_type: str = field()
    status_code: int = field()
    
