from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventRankingExtraStatsInfo:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precision: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    

@dataclass_json
@dataclass
class EventRankingRankings:
    dq: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dq') }})
    matches_played: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches_played') }})
    rank: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    record: WltRecord = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    team_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    extra_stats: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra_stats') }})
    qual_average: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_average') }})
    sort_orders: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_orders') }})
    

@dataclass_json
@dataclass
class EventRankingSortOrderInfo:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precision: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    

@dataclass_json
@dataclass
class EventRanking:
    rankings: List[EventRankingRankings] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rankings') }})
    sort_order_info: List[EventRankingSortOrderInfo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_order_info') }})
    extra_stats_info: Optional[List[EventRankingExtraStatsInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra_stats_info') }})
    
