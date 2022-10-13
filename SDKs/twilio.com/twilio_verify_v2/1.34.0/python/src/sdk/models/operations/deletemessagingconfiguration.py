from dataclasses import dataclass, field
from typing import Optional
DELETE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteMessagingConfigurationPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'Country', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMessagingConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteMessagingConfigurationPathParams = field(default=None)
    security: DeleteMessagingConfigurationSecurity = field(default=None)
    

@dataclass
class DeleteMessagingConfigurationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
