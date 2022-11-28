from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDeviceMonitorsPathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceMonitorsRequest:
    path_params: GetDeviceMonitorsPathParams = field()
    

@dataclass
class GetDeviceMonitorsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
