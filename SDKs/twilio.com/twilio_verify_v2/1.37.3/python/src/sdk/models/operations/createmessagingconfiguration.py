from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateMessagingConfigurationPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateMessagingConfigurationCreateMessagingConfigurationRequest:
    country: str = field(metadata={'form': { 'field_name': 'Country' }})
    messaging_service_sid: str = field(metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    

@dataclass
class CreateMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMessagingConfigurationRequest:
    path_params: CreateMessagingConfigurationPathParams = field()
    security: CreateMessagingConfigurationSecurity = field()
    request: Optional[CreateMessagingConfigurationCreateMessagingConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateMessagingConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_messaging_configuration: Optional[shared.VerifyV2ServiceMessagingConfiguration] = field(default=None)
    
