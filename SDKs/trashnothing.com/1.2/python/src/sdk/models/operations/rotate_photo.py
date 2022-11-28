from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RotatePhotoPathParams:
    photo_id: str = field(metadata={'path_param': { 'field_name': 'photo_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RotatePhotoQueryParams:
    degrees: int = field(metadata={'query_param': { 'field_name': 'degrees', 'style': 'form', 'explode': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'device_pixel_ratio', 'style': 'form', 'explode': True }})
    

@dataclass
class RotatePhotoRequest:
    path_params: RotatePhotoPathParams = field()
    query_params: RotatePhotoQueryParams = field()
    

@dataclass
class RotatePhotoResponse:
    content_type: str = field()
    status_code: int = field()
    photo_result: Optional[shared.PhotoResult] = field(default=None)
    
