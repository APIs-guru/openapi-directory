from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SmartMeDeviceConfigurationGetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SmartMeDeviceConfigurationGetRequest:
    path_params: SmartMeDeviceConfigurationGetPathParams = field()
    

@dataclass
class SmartMeDeviceConfigurationGetResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    smart_me_device_configuration_container: Optional[shared.SmartMeDeviceConfigurationContainer] = field(default=None)
    
