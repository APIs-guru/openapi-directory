from dataclasses import dataclass, field



@dataclass
class GetDevicePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceRequest:
    path_params: GetDevicePathParams = field(default=None)
    

@dataclass
class GetDeviceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
