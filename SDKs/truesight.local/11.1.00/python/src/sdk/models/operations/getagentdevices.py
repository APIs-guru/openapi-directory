from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAgentDevicesPathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentDevicesRequest:
    path_params: GetAgentDevicesPathParams = field()
    

@dataclass
class GetAgentDevicesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
