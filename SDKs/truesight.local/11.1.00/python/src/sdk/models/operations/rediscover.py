from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RediscoverPathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RediscoverRequest:
    path_params: RediscoverPathParams = field()
    

@dataclass
class RediscoverResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
