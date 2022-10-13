from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDevicesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDevicesIDRequest:
    path_params: PutDevicesIDPathParams = field(default=None)
    request: shared.Device = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDevicesIDResponse:
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    status_code: int = field(default=None)
    
