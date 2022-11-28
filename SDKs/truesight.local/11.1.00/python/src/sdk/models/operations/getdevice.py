from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDevicePathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceRequest:
    path_params: GetDevicePathParams = field()
    

@dataclass
class GetDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
