from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoMetrics:
    media_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media_key' }})
    playback_0_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback_0_count' }})
    playback_100_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback_100_count' }})
    playback_25_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback_25_count' }})
    playback_50_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback_50_count' }})
    playback_75_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playback_75_count' }})
    view_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view_count' }})
    
