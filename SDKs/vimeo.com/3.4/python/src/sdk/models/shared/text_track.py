from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TextTrackTypeEnum(str, Enum):
    CAPTIONS = "captions"
    SUBTITLES = "subtitles"


@dataclass_json
@dataclass
class TextTrack:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    hls_link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hls_link') }})
    hls_link_expires_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hls_link_expires_time') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_expires_time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link_expires_time') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: TextTrackTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
