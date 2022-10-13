from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DistrictRankingEventPoints:
    alliance_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alliance_points' }})
    award_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'award_points' }})
    district_cmp: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'district_cmp' }})
    elim_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elim_points' }})
    event_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_key' }})
    qual_points: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qual_points' }})
    total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class DistrictRanking:
    event_points: Optional[List[DistrictRankingEventPoints]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_points' }})
    point_total: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'point_total' }})
    rank: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    rookie_bonus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rookie_bonus' }})
    team_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_key' }})
    
