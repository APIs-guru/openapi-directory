from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateVideoThumbnailAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateVideoThumbnailAlt1RequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    

@dataclass
class CreateVideoThumbnailAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVideoThumbnailAlt1Request:
    path_params: CreateVideoThumbnailAlt1PathParams = field(default=None)
    request: Optional[CreateVideoThumbnailAlt1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    security: CreateVideoThumbnailAlt1Security = field(default=None)
    

@dataclass
class CreateVideoThumbnailAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    picture: Optional[shared.Picture] = field(default=None)
    
