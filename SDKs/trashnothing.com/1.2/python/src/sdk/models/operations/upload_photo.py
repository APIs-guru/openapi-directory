from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UploadPhotoRequestBodyPhoto:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    photo: str = field(default=None, metadata={'multipart_form': { 'field_name': 'photo' }})
    

@dataclass
class UploadPhotoRequestBody:
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'device_pixel_ratio' }})
    photo: UploadPhotoRequestBodyPhoto = field(default=None, metadata={'multipart_form': { 'file': True }})
    

@dataclass
class UploadPhotoRequest:
    request: UploadPhotoRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class UploadPhotoResponse:
    content_type: str = field(default=None)
    photo_result: Optional[shared.PhotoResult] = field(default=None)
    status_code: int = field(default=None)
    
