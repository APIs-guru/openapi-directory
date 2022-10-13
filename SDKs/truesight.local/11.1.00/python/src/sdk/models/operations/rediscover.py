from dataclasses import dataclass, field



@dataclass
class RediscoverPathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RediscoverRequest:
    path_params: RediscoverPathParams = field(default=None)
    

@dataclass
class RediscoverResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
