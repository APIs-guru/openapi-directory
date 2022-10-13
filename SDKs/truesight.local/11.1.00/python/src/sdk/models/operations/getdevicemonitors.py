from dataclasses import dataclass, field



@dataclass
class GetDeviceMonitorsPathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceMonitorsRequest:
    path_params: GetDeviceMonitorsPathParams = field(default=None)
    

@dataclass
class GetDeviceMonitorsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
