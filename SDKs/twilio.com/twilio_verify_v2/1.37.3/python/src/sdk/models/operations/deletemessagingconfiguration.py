from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteMessagingConfigurationPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'Country', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteMessagingConfigurationRequest:
    path_params: DeleteMessagingConfigurationPathParams = field()
    security: DeleteMessagingConfigurationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteMessagingConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    
