from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventDistrictPointsPoints:
    alliance_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alliance_points' }})
    award_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'award_points' }})
    elim_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elim_points' }})
    qual_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qual_points' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class EventDistrictPointsTiebreakers:
    highest_qual_scores: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highest_qual_scores' }})
    qual_wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qual_wins' }})
    

@dataclass_json
@dataclass
class EventDistrictPoints:
    points: dict[str, EventDistrictPointsPoints] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    tiebreakers: Optional[dict[str, EventDistrictPointsTiebreakers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tiebreakers' }})
    
