from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import match_alliance
from . import match_alliance


@dataclass_json
@dataclass
class MatchAlliances:
    blue: Optional[match_alliance.MatchAlliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blue' }})
    red: Optional[match_alliance.MatchAlliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'red' }})
    
class MatchCompLevelEnum(str, Enum):
    QM = "qm"
    EF = "ef"
    QF = "qf"
    SF = "sf"
    F = "f"


@dataclass_json
@dataclass
class MatchVideos:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class MatchWinningAllianceEnum(str, Enum):
    RED = "red"
    BLUE = "blue"
    UNKNOWN = ""


@dataclass_json
@dataclass
class Match:
    actual_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actual_time' }})
    alliances: Optional[MatchAlliances] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alliances' }})
    comp_level: MatchCompLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comp_level' }})
    event_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_key' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    match_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match_number' }})
    post_result_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_result_time' }})
    predicted_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predicted_time' }})
    score_breakdown: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score_breakdown' }})
    set_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'set_number' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    videos: Optional[List[MatchVideos]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'videos' }})
    winning_alliance: Optional[MatchWinningAllianceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'winning_alliance' }})
    
