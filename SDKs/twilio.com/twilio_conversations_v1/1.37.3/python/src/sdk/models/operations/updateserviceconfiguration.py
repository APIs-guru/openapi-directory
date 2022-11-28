from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SERVICE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConfigurationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConfigurationUpdateServiceConfigurationRequest:
    default_chat_service_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultChatServiceRoleSid' }})
    default_conversation_creator_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultConversationCreatorRoleSid' }})
    default_conversation_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultConversationRoleSid' }})
    reachability_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityEnabled' }})
    

@dataclass
class UpdateServiceConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConfigurationRequest:
    path_params: UpdateServiceConfigurationPathParams = field()
    security: UpdateServiceConfigurationSecurity = field()
    request: Optional[UpdateServiceConfigurationUpdateServiceConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateServiceConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_configuration: Optional[shared.ConversationsV1ServiceServiceConfiguration] = field(default=None)
    
