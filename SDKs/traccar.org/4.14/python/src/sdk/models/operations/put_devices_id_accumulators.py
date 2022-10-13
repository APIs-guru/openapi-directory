from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutDevicesIDAccumulatorsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDevicesIDAccumulatorsRequest:
    path_params: PutDevicesIDAccumulatorsPathParams = field(default=None)
    request: shared.DeviceAccumulators = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDevicesIDAccumulatorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
