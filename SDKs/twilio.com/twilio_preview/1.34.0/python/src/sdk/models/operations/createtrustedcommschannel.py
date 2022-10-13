from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_TRUSTED_COMMS_CHANNEL_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateTrustedCommsChannelPathParams:
    branded_channel_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'BrandedChannelSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrustedCommsChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustedCommsChannelRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateTrustedCommsChannelPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTrustedCommsChannelSecurity = field(default=None)
    

@dataclass
class CreateTrustedCommsChannelResponses:
    preview_trusted_comms_branded_channel_channel: Optional[shared.PreviewTrustedCommsBrandedChannelChannel] = field(default=None)
    

@dataclass
class CreateTrustedCommsChannelResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateTrustedCommsChannelResponses]] = field(default=None)
    status_code: int = field(default=None)
    
