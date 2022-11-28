from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoMetrics:
    r"""VideoMetrics
    Metrics corresponding to a Video.
    """
    
    media_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_key') }})
    view_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('view_count') }})
    playback_0_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_0_count') }})
    playback_100_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_100_count') }})
    playback_25_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_25_count') }})
    playback_50_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_50_count') }})
    playback_75_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_75_count') }})
    
