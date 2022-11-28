from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_CHANNEL_SERVERS = [
	"https://flex-api.twilio.com",
]


@dataclass
class CreateChannelCreateChannelRequest:
    chat_friendly_name: str = field(metadata={'form': { 'field_name': 'ChatFriendlyName' }})
    chat_user_friendly_name: str = field(metadata={'form': { 'field_name': 'ChatUserFriendlyName' }})
    flex_flow_sid: str = field(metadata={'form': { 'field_name': 'FlexFlowSid' }})
    identity: str = field(metadata={'form': { 'field_name': 'Identity' }})
    chat_unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ChatUniqueName' }})
    long_lived: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LongLived' }})
    pre_engagement_data: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PreEngagementData' }})
    target: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Target' }})
    task_attributes: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TaskAttributes' }})
    task_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TaskSid' }})
    

@dataclass
class CreateChannelSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateChannelRequest:
    security: CreateChannelSecurity = field()
    request: Optional[CreateChannelCreateChannelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateChannelResponse:
    content_type: str = field()
    status_code: int = field()
    flex_v1_channel: Optional[shared.FlexV1Channel] = field(default=None)
    
