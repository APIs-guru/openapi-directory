from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MatchAlliances:
    r"""MatchAlliances
    A list of alliances, the teams on the alliances, and their score.
    """
    
    blue: Optional[MatchAlliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    red: Optional[MatchAlliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    
class MatchCompLevelEnum(str, Enum):
    QM = "qm"
    EF = "ef"
    QF = "qf"
    SF = "sf"
    F = "f"


@dataclass_json
@dataclass
class MatchVideos:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class MatchWinningAllianceEnum(str, Enum):
    RED = "red"
    BLUE = "blue"
    UNKNOWN = ""


@dataclass_json
@dataclass
class Match:
    comp_level: MatchCompLevelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comp_level') }})
    event_key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_key') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    match_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match_number') }})
    set_number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('set_number') }})
    actual_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_time') }})
    alliances: Optional[MatchAlliances] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliances') }})
    post_result_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_result_time') }})
    predicted_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predicted_time') }})
    score_breakdown: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score_breakdown') }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    videos: Optional[List[MatchVideos]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    winning_alliance: Optional[MatchWinningAllianceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('winning_alliance') }})
    
