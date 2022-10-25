from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SERVICE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceConfigurationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceConfigurationUpdateServiceConfigurationRequest:
    default_chat_service_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultChatServiceRoleSid' }})
    default_conversation_creator_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultConversationCreatorRoleSid' }})
    default_conversation_role_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DefaultConversationRoleSid' }})
    reachability_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'ReachabilityEnabled' }})
    

@dataclass
class UpdateServiceConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceConfigurationPathParams = field(default=None)
    request: Optional[UpdateServiceConfigurationUpdateServiceConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateServiceConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_configuration: Optional[shared.ConversationsV1ServiceServiceConfiguration] = field(default=None)
    
