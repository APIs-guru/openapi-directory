from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segmentfilter
from . import timerange


@dataclass_json
@dataclass
class SearchAvailabilityFilter:
    booking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booking_id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    segment_filters: Optional[List[segmentfilter.SegmentFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment_filters' }})
    start_at_range: timerange.TimeRange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_at_range' }})
    
