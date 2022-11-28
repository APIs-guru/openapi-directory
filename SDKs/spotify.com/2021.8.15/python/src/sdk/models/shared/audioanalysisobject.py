from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AudioAnalysisObject:
    r"""AudioAnalysisObject

    https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/#audio-analysis-object - Find more info on the official Spotify Web API Reference
    """
    
    bars: Optional[List[TimeIntervalObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bars') }})
    beats: Optional[List[TimeIntervalObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beats') }})
    sections: Optional[List[SectionObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sections') }})
    segments: Optional[List[SegmentObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    tatums: Optional[List[TimeIntervalObject]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tatums') }})
    
