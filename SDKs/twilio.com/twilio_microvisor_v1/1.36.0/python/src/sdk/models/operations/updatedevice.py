from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_DEVICE_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class UpdateDevicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeviceUpdateDeviceRequest:
    logging_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LoggingEnabled' }})
    target_app: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TargetApp' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeviceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateDevicePathParams = field(default=None)
    request: Optional[UpdateDeviceUpdateDeviceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateDeviceSecurity = field(default=None)
    

@dataclass
class UpdateDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    microvisor_v1_device: Optional[shared.MicrovisorV1Device] = field(default=None)
    
