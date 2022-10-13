from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateFactorPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFactorRequestBodyUpdateFactorRequest:
    auth_payload: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AuthPayload' }})
    config_alg: Optional[shared.FactorEnumTotpAlgorithmsEnum] = field(default=None, metadata={'form': { 'field_name': 'Config.Alg' }})
    config_code_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Config.CodeLength' }})
    config_notification_platform: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Config.NotificationPlatform' }})
    config_notification_token: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Config.NotificationToken' }})
    config_sdk_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Config.SdkVersion' }})
    config_skew: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Config.Skew' }})
    config_time_step: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Config.TimeStep' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFactorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFactorPathParams = field(default=None)
    request: Optional[UpdateFactorRequestBodyUpdateFactorRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFactorSecurity = field(default=None)
    

@dataclass
class UpdateFactorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_entity_factor: Optional[shared.VerifyV2ServiceEntityFactor] = field(default=None)
    
