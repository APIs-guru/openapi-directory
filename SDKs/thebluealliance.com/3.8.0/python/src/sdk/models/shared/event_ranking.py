from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wlt_record


@dataclass_json
@dataclass
class EventRankingExtraStatsInfo:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    precision: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    

@dataclass_json
@dataclass
class EventRankingRankings:
    dq: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dq' }})
    extra_stats: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra_stats' }})
    matches_played: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matches_played' }})
    qual_average: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qual_average' }})
    rank: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rank' }})
    record: wlt_record.WltRecord = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record' }})
    sort_orders: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_orders' }})
    team_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team_key' }})
    

@dataclass_json
@dataclass
class EventRankingSortOrderInfo:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    precision: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'precision' }})
    

@dataclass_json
@dataclass
class EventRanking:
    extra_stats_info: Optional[List[EventRankingExtraStatsInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extra_stats_info' }})
    rankings: List[EventRankingRankings] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rankings' }})
    sort_order_info: List[EventRankingSortOrderInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sort_order_info' }})
    
