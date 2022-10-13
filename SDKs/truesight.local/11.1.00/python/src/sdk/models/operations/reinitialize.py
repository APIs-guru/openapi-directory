from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class ReinitializePathParams:
    device_id: int = field(default=None, metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReinitializeRequest:
    path_params: ReinitializePathParams = field(default=None)
    request: shared.ReinitializeActionConfiguration = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReinitializeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
