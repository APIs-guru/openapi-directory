from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DistrictRankingEventPoints:
    alliance_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance_points') }})
    award_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('award_points') }})
    district_cmp: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('district_cmp') }})
    elim_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('elim_points') }})
    event_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_key') }})
    qual_points: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_points') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class DistrictRanking:
    r"""DistrictRanking
    Rank of a team in a district.
    """
    
    point_total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('point_total') }})
    rank: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    team_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    event_points: Optional[List[DistrictRankingEventPoints]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_points') }})
    rookie_bonus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rookie_bonus') }})
    
