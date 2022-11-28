from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchMessagingConfigurationPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'Country', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMessagingConfigurationRequest:
    path_params: FetchMessagingConfigurationPathParams = field()
    security: FetchMessagingConfigurationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMessagingConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_messaging_configuration: Optional[shared.VerifyV2ServiceMessagingConfiguration] = field(default=None)
    
