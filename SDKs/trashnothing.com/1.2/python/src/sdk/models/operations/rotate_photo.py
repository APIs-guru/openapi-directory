from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RotatePhotoPathParams:
    photo_id: str = field(default=None, metadata={'path_param': { 'field_name': 'photo_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotatePhotoQueryParams:
    degrees: int = field(default=None, metadata={'query_param': { 'field_name': 'degrees', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    

@dataclass
class RotatePhotoRequest:
    path_params: RotatePhotoPathParams = field(default=None)
    query_params: RotatePhotoQueryParams = field(default=None)
    

@dataclass
class RotatePhotoResponse:
    content_type: str = field(default=None)
    photo_result: Optional[shared.PhotoResult] = field(default=None)
    status_code: int = field(default=None)
    
