from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SegmentObject:
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'confidence' }})
    duration: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    loudness_end: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loudness_end' }})
    loudness_max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loudness_max' }})
    loudness_max_time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loudness_max_time' }})
    loudness_start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loudness_start' }})
    pitches: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitches' }})
    start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    timbre: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timbre' }})
    
