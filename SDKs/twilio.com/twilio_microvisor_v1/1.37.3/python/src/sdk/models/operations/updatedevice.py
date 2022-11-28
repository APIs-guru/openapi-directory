from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_DEVICE_SERVERS = [
	"https://microvisor.twilio.com",
]


@dataclass
class UpdateDevicePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeviceUpdateDeviceRequest:
    logging_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LoggingEnabled' }})
    target_app: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'TargetApp' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateDeviceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateDeviceRequest:
    path_params: UpdateDevicePathParams = field()
    security: UpdateDeviceSecurity = field()
    request: Optional[UpdateDeviceUpdateDeviceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    microvisor_v1_device: Optional[shared.MicrovisorV1Device] = field(default=None)
    
