from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_MESSAGING_CONFIGURATION_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateMessagingConfigurationPathParams:
    country: str = field(metadata={'path_param': { 'field_name': 'Country', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessagingConfigurationUpdateMessagingConfigurationRequest:
    messaging_service_sid: str = field(metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    

@dataclass
class UpdateMessagingConfigurationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessagingConfigurationRequest:
    path_params: UpdateMessagingConfigurationPathParams = field()
    security: UpdateMessagingConfigurationSecurity = field()
    request: Optional[UpdateMessagingConfigurationUpdateMessagingConfigurationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMessagingConfigurationResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_messaging_configuration: Optional[shared.VerifyV2ServiceMessagingConfiguration] = field(default=None)
    
