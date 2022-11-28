from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPICustomDeviceIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPICustomDeviceIDRequest:
    path_params: GetAPICustomDeviceIDPathParams = field()
    

@dataclass
class GetAPICustomDeviceIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    custom_device_to_post: Optional[shared.CustomDeviceToPost] = field(default=None)
    
