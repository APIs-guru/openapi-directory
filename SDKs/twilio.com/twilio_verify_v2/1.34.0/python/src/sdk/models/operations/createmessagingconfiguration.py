from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateMessagingConfigurationPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessagingConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateMessagingConfigurationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMessagingConfigurationSecurity = field(default=None)
    

@dataclass
class CreateMessagingConfigurationResponses:
    verify_v2_service_messaging_configuration: Optional[shared.VerifyV2ServiceMessagingConfiguration] = field(default=None)
    

@dataclass
class CreateMessagingConfigurationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateMessagingConfigurationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
