from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceConfigurationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceConfigurationRequest:
    path_params: FetchServiceConfigurationPathParams = field()
    security: FetchServiceConfigurationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_configuration: Optional[shared.ConversationsV1ServiceServiceConfiguration] = field(default=None)
    
