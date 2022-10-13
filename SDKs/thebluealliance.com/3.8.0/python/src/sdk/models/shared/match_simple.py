from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import match_alliance
from . import match_alliance


@dataclass_json
@dataclass
class MatchSimpleAlliances:
    blue: Optional[match_alliance.MatchAlliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blue' }})
    red: Optional[match_alliance.MatchAlliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'red' }})
    
class MatchSimpleCompLevelEnum(str, Enum):
    QM = "qm"
    EF = "ef"
    QF = "qf"
    SF = "sf"
    F = "f"

class MatchSimpleWinningAllianceEnum(str, Enum):
    RED = "red"
    BLUE = "blue"
    UNKNOWN = ""


@dataclass_json
@dataclass
class MatchSimple:
    actual_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actual_time' }})
    alliances: Optional[MatchSimpleAlliances] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alliances' }})
    comp_level: MatchSimpleCompLevelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comp_level' }})
    event_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_key' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    match_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'match_number' }})
    predicted_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predicted_time' }})
    set_number: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'set_number' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    winning_alliance: Optional[MatchSimpleWinningAllianceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'winning_alliance' }})
    
