from dataclasses import dataclass, field



@dataclass
class GetDeviceAgentPathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceAgentRequest:
    path_params: GetDeviceAgentPathParams = field(default=None)
    

@dataclass
class GetDeviceAgentResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
