from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared
CREATE_NEW_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateNewFactorPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNewFactorRequestBodyCreateNewFactorRequest:
    binding_alg: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Binding.Alg' }})
    binding_public_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Binding.PublicKey' }})
    binding_secret: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Binding.Secret' }})
    config_alg: Optional[shared.NewFactorEnumTotpAlgorithmsEnum] = field(default=None, metadata={'form': { 'field_name': 'Config.Alg' }})
    config_app_id: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Config.AppId' }})
    config_code_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Config.CodeLength' }})
    config_notification_platform: Optional[shared.NewFactorEnumNotificationPlatformsEnum] = field(default=None, metadata={'form': { 'field_name': 'Config.NotificationPlatform' }})
    config_notification_token: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Config.NotificationToken' }})
    config_sdk_version: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Config.SdkVersion' }})
    config_skew: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Config.Skew' }})
    config_time_step: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Config.TimeStep' }})
    factor_type: shared.NewFactorEnumFactorTypesEnum = field(default=None, metadata={'form': { 'field_name': 'FactorType' }})
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    metadata: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Metadata' }})
    

@dataclass
class CreateNewFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNewFactorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateNewFactorPathParams = field(default=None)
    request: Optional[CreateNewFactorRequestBodyCreateNewFactorRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNewFactorSecurity = field(default=None)
    

@dataclass
class CreateNewFactorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_entity_new_factor: Optional[shared.VerifyV2ServiceEntityNewFactor] = field(default=None)
    
