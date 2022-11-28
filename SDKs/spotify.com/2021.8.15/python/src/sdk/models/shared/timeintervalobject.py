from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TimeIntervalObject:
    r"""TimeIntervalObject

    https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#time-interval-object - Find more info on the official Spotify Web API Reference
    """
    
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('confidence') }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
