from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubmitStoryRequestBody:
    content: str = field(metadata={'multipart_form': { 'field_name': 'content' }})
    sharing: str = field(metadata={'multipart_form': { 'field_name': 'sharing' }})
    title: str = field(metadata={'multipart_form': { 'field_name': 'title' }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'device_pixel_ratio' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    

@dataclass
class SubmitStoryRequest:
    request: SubmitStoryRequestBody = field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SubmitStoryResponse:
    content_type: str = field()
    status_code: int = field()
    story: Optional[shared.Story] = field(default=None)
    
