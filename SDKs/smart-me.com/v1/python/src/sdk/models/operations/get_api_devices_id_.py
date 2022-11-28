from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIDevicesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIDevicesIDRequest:
    path_params: GetAPIDevicesIDPathParams = field()
    

@dataclass
class GetAPIDevicesIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    
