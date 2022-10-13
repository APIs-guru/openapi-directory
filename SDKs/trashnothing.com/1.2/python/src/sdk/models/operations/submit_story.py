from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubmitStoryRequestBody:
    content: str = field(default=None, metadata={'multipart_form': { 'field_name': 'content' }})
    device_pixel_ratio: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'device_pixel_ratio' }})
    photo_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'photo_ids' }})
    sharing: str = field(default=None, metadata={'multipart_form': { 'field_name': 'sharing' }})
    title: str = field(default=None, metadata={'multipart_form': { 'field_name': 'title' }})
    

@dataclass
class SubmitStoryRequest:
    request: SubmitStoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class SubmitStoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    story: Optional[shared.Story] = field(default=None)
    
