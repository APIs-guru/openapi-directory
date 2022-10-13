from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIDevicesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIDevicesIDRequest:
    path_params: GetAPIDevicesIDPathParams = field(default=None)
    

@dataclass
class GetAPIDevicesIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    status_code: int = field(default=None)
    
