from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CHANNEL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class DeleteChannelPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteChannelRequest:
    path_params: DeleteChannelPathParams = field()
    security: DeleteChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteChannelResponse:
    content_type: str = field()
    status_code: int = field()
    
