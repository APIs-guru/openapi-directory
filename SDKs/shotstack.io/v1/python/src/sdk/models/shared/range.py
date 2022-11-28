from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Range:
    r"""Range
    Specify a time range to render, i.e. to render only a portion of a video or audio file. Omit this setting to  export the entire video. Range can also be used to render a frame at a specific time point - setting a range and output format as `jpg` will output a single frame image at the range `start` point.
    """
    
    length: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
