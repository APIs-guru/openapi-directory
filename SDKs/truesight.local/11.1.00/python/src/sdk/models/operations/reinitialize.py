from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReinitializePathParams:
    device_id: int = field(metadata={'path_param': { 'field_name': 'deviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReinitializeRequest:
    path_params: ReinitializePathParams = field()
    request: shared.ReinitializeActionConfiguration = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReinitializeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
