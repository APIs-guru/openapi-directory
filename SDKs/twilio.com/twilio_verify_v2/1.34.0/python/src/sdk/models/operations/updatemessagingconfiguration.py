from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateMessagingConfigurationPathParams:
    country: str = field(default=None, metadata={'path_param': { 'field_name': 'Country', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessagingConfigurationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateMessagingConfigurationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateMessagingConfigurationSecurity = field(default=None)
    

@dataclass
class UpdateMessagingConfigurationResponses:
    verify_v2_service_messaging_configuration: Optional[shared.VerifyV2ServiceMessagingConfiguration] = field(default=None)
    

@dataclass
class UpdateMessagingConfigurationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateMessagingConfigurationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
