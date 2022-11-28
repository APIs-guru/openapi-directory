from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateConfigurationUpdateConfigurationRequest:
    default_chat_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultChatServiceSid' }})
    default_closed_timer: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultClosedTimer' }})
    default_inactive_timer: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultInactiveTimer' }})
    default_messaging_service_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultMessagingServiceSid' }})
    

@dataclass
class UpdateConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateConfigurationRequest:
    security: UpdateConfigurationSecurity = field()
    request: Optional[UpdateConfigurationUpdateConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_configuration: Optional[shared.ConversationsV1Configuration] = field(default=None)
    
