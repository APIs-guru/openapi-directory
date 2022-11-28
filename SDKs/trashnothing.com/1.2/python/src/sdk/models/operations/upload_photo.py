from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadPhotoRequestBodyPhoto:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    photo: str = field(metadata={'multipart_form': { 'field_name': 'photo' }})
    

@dataclass
class UploadPhotoRequestBody:
    photo: UploadPhotoRequestBodyPhoto = field(metadata={'multipart_form': { 'file': True }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'device_pixel_ratio' }})
    

@dataclass
class UploadPhotoRequest:
    request: UploadPhotoRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadPhotoResponse:
    content_type: str = field()
    status_code: int = field()
    photo_result: Optional[shared.PhotoResult] = field(default=None)
    
