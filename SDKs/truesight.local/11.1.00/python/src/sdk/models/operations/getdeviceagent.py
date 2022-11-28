from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetDeviceAgentPathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceAgentRequest:
    path_params: GetDeviceAgentPathParams = field()
    

@dataclass
class GetDeviceAgentResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
