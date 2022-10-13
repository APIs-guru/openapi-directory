from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPICustomDeviceIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPICustomDeviceIDRequest:
    path_params: GetAPICustomDeviceIDPathParams = field(default=None)
    

@dataclass
class GetAPICustomDeviceIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    custom_device_to_post: Optional[shared.CustomDeviceToPost] = field(default=None)
    status_code: int = field(default=None)
    
