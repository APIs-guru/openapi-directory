from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_TRUSTED_COMMS_CHANNEL_SERVERS = [
	"https://preview.twilio.com",
]


@dataclass
class CreateTrustedCommsChannelPathParams:
    branded_channel_sid: str = field(metadata={'path_param': { 'field_name': 'BrandedChannelSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTrustedCommsChannelCreateTrustedCommsChannelRequest:
    phone_number_sid: str = field(metadata={'form': { 'field_name': 'PhoneNumberSid' }})
    

@dataclass
class CreateTrustedCommsChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTrustedCommsChannelRequest:
    path_params: CreateTrustedCommsChannelPathParams = field()
    security: CreateTrustedCommsChannelSecurity = field()
    request: Optional[CreateTrustedCommsChannelCreateTrustedCommsChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTrustedCommsChannelResponse:
    content_type: str = field()
    status_code: int = field()
    preview_trusted_comms_branded_channel_channel: Optional[shared.PreviewTrustedCommsBrandedChannelChannel] = field(default=None)
    
