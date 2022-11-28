from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Timeline:
    r"""Timeline
    A timeline represents the contents of a video edit over time, an audio edit over time, in seconds, or an image layout. A timeline consists of layers called tracks. Tracks are composed of titles, images, audio, html or video segments referred to as clips which are placed along the track at specific starting point and lasting for a specific amount of time.
    """
    
    tracks: List[Track] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracks') }})
    background: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background') }})
    cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache') }})
    fonts: Optional[List[Font]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fonts') }})
    soundtrack: Optional[Soundtrack] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('soundtrack') }})
    
