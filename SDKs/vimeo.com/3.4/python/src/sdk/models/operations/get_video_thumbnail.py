from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoThumbnailPathParams:
    picture_id: float = field(metadata={'path_param': { 'field_name': 'picture_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoThumbnailRequest:
    path_params: GetVideoThumbnailPathParams = field()
    

@dataclass
class GetVideoThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
