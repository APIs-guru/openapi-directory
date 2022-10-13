from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MEMBER_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchMemberPathParams:
    channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChannelSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMemberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMemberPathParams = field(default=None)
    security: FetchMemberSecurity = field(default=None)
    

@dataclass
class FetchMemberResponses:
    ip_messaging_v2_service_channel_member: Optional[shared.IPMessagingV2ServiceChannelMember] = field(default=None)
    

@dataclass
class FetchMemberResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchMemberResponses]] = field(default=None)
    status_code: int = field(default=None)
    
