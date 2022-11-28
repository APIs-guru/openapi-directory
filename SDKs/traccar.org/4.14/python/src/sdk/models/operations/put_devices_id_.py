from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDevicesIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDevicesIDRequest:
    path_params: PutDevicesIDPathParams = field()
    request: shared.Device = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDevicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    
