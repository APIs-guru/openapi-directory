from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeintervalobject
from . import timeintervalobject
from . import sectionobject
from . import segmentobject
from . import timeintervalobject


@dataclass_json
@dataclass
class AudioAnalysisObject:
    bars: Optional[List[timeintervalobject.TimeIntervalObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bars' }})
    beats: Optional[List[timeintervalobject.TimeIntervalObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beats' }})
    sections: Optional[List[sectionobject.SectionObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sections' }})
    segments: Optional[List[segmentobject.SegmentObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    tatums: Optional[List[timeintervalobject.TimeIntervalObject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tatums' }})
    
