from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TeamEventStatusRankRanking:
    dq: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dq') }})
    matches_played: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches_played') }})
    qual_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_average') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    record: Optional[WltRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    sort_orders: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_orders') }})
    team_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    

@dataclass_json
@dataclass
class TeamEventStatusRankSortOrderInfo:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    

@dataclass_json
@dataclass
class TeamEventStatusRank:
    num_teams: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_teams') }})
    ranking: Optional[TeamEventStatusRankRanking] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    sort_order_info: Optional[List[TeamEventStatusRankSortOrderInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_order_info') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
