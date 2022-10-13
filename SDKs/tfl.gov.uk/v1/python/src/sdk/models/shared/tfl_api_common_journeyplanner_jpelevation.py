from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPICommonJourneyPlannerJpElevation:
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    end_lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endLat' }})
    end_lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endLon' }})
    gradient: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gradient' }})
    height_from_previous_point: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heightFromPreviousPoint' }})
    start_lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startLat' }})
    start_lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startLon' }})
    
