from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventDistrictPointsPoints:
    alliance_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance_points') }})
    award_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('award_points') }})
    elim_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('elim_points') }})
    qual_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_points') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class EventDistrictPointsTiebreakers:
    highest_qual_scores: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highest_qual_scores') }})
    qual_wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_wins') }})
    

@dataclass_json
@dataclass
class EventDistrictPoints:
    points: dict[str, EventDistrictPointsPoints] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    tiebreakers: Optional[dict[str, EventDistrictPointsTiebreakers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiebreakers') }})
    
