from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class TextTrackTypeEnum(str, Enum):
    CAPTIONS = "captions"
    SUBTITLES = "subtitles"


@dataclass_json
@dataclass
class TextTrack:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    hls_link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hls_link' }})
    hls_link_expires_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hls_link_expires_time' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    link: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    link_expires_time: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link_expires_time' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: TextTrackTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
