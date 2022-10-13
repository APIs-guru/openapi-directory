from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SmartMeDeviceConfigurationGetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SmartMeDeviceConfigurationGetRequest:
    path_params: SmartMeDeviceConfigurationGetPathParams = field(default=None)
    

@dataclass
class SmartMeDeviceConfigurationGetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    smart_me_device_configuration_container: Optional[shared.SmartMeDeviceConfigurationContainer] = field(default=None)
    status_code: int = field(default=None)
    
