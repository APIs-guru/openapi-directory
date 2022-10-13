from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTextTrackAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class CreateTextTrackAlt1RequestBodyTypeEnum(str, Enum):
    CAPTIONS = "captions"
    CHAPTERS = "chapters"
    DESCRIPTIONS = "descriptions"
    METADATA = "metadata"
    SUBTITLES = "subtitles"


@dataclass_json
@dataclass
class CreateTextTrackAlt1RequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: CreateTextTrackAlt1RequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateTextTrackAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTextTrackAlt1Request:
    path_params: CreateTextTrackAlt1PathParams = field(default=None)
    request: CreateTextTrackAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.video.texttrack+json' }})
    security: CreateTextTrackAlt1Security = field(default=None)
    

@dataclass
class CreateTextTrackAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    text_track: Optional[shared.TextTrack] = field(default=None)
    
