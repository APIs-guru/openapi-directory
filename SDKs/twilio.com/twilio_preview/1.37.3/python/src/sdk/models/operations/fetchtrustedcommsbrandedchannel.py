from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_TRUSTED_COMMS_BRANDED_CHANNEL_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class FetchTrustedCommsBrandedChannelPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchTrustedCommsBrandedChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchTrustedCommsBrandedChannelRequest:
    path_params: FetchTrustedCommsBrandedChannelPathParams = field()
    security: FetchTrustedCommsBrandedChannelSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchTrustedCommsBrandedChannelResponse:
    content_type: str = field()
    status_code: int = field()
    preview_trusted_comms_branded_channel: Optional[shared.PreviewTrustedCommsBrandedChannel] = field(default=None)
    
