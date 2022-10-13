from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_WEB_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateWebChannelRequestBodyCreateWebChannelRequest:
    chat_friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'ChatFriendlyName' }})
    chat_unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ChatUniqueName' }})
    customer_friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'CustomerFriendlyName' }})
    flex_flow_sid: str = field(default=None, metadata={'form': { 'field_name': 'FlexFlowSid' }})
    identity: str = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    pre_engagement_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PreEngagementData' }})
    

@dataclass
class CreateWebChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateWebChannelRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateWebChannelRequestBodyCreateWebChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateWebChannelSecurity = field(default=None)
    

@dataclass
class CreateWebChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    flex_v1_web_channel: Optional[shared.FlexV1WebChannel] = field(default=None)
    
