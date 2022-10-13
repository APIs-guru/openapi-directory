from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EditVideoThumbnailPathParams:
    picture_id: float = field(default=None, metadata={'path_param': { 'field_name': 'picture_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditVideoThumbnailRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    

@dataclass
class EditVideoThumbnailSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditVideoThumbnailRequest:
    path_params: EditVideoThumbnailPathParams = field(default=None)
    request: Optional[EditVideoThumbnailRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    security: EditVideoThumbnailSecurity = field(default=None)
    

@dataclass
class EditVideoThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
