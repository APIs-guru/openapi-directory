from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateTextTrackAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class CreateTextTrackAlt1RequestBodyTypeEnum(str, Enum):
    CAPTIONS = "captions"
    CHAPTERS = "chapters"
    DESCRIPTIONS = "descriptions"
    METADATA = "metadata"
    SUBTITLES = "subtitles"


@dataclass_json
@dataclass
class CreateTextTrackAlt1RequestBody:
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateTextTrackAlt1RequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    

@dataclass
class CreateTextTrackAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateTextTrackAlt1Request:
    path_params: CreateTextTrackAlt1PathParams = field()
    request: CreateTextTrackAlt1RequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video.texttrack+json' }})
    security: CreateTextTrackAlt1Security = field()
    

@dataclass
class CreateTextTrackAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    text_track: Optional[shared.TextTrack] = field(default=None)
    
