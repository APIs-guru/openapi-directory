from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SetProfileImageRequestBodyPhoto:
    content: bytes = field(default=None, metadata={'multipart_form': { 'content': True }})
    photo: str = field(default=None, metadata={'multipart_form': { 'field_name': 'photo' }})
    

@dataclass
class SetProfileImageRequestBody:
    crop: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'crop' }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'device_pixel_ratio' }})
    photo: Optional[SetProfileImageRequestBodyPhoto] = field(default=None, metadata={'multipart_form': { 'file': True }})
    photo_id: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_id' }})
    set_default: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'set_default' }})
    

@dataclass
class SetProfileImageRequest:
    request: Optional[SetProfileImageRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass_json
@dataclass
class SetProfileImage200ApplicationJSON:
    photo: Optional[shared.PhotoResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photo' }})
    user: Optional[shared.CurrentUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass
class SetProfileImageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_profile_image_200_application_json_object: Optional[SetProfileImage200ApplicationJSON] = field(default=None)
    
