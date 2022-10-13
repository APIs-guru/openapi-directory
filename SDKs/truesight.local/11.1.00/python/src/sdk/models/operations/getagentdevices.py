from dataclasses import dataclass, field



@dataclass
class GetAgentDevicesPathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAgentDevicesRequest:
    path_params: GetAgentDevicesPathParams = field(default=None)
    

@dataclass
class GetAgentDevicesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
