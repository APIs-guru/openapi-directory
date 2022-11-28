from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


CREATE_NEW_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateNewFactorPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNewFactorCreateNewFactorRequest:
    factor_type: shared.NewFactorEnumFactorTypesEnum = field(metadata={'form': { 'field_name': 'FactorType' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
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
    metadata: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Metadata' }})
    

@dataclass
class CreateNewFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNewFactorRequest:
    path_params: CreateNewFactorPathParams = field()
    security: CreateNewFactorSecurity = field()
    request: Optional[CreateNewFactorCreateNewFactorRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateNewFactorResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_entity_new_factor: Optional[shared.VerifyV2ServiceEntityNewFactor] = field(default=None)
    
