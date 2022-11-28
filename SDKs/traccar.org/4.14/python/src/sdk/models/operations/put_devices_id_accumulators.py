from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PutDevicesIDAccumulatorsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDevicesIDAccumulatorsRequest:
    path_params: PutDevicesIDAccumulatorsPathParams = field()
    request: shared.DeviceAccumulators = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDevicesIDAccumulatorsResponse:
    content_type: str = field()
    status_code: int = field()
    
