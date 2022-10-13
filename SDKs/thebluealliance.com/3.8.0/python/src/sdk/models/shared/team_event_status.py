from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import team_event_status_alliance
from . import team_event_status_playoff
from . import team_event_status_rank


@dataclass_json
@dataclass
class TeamEventStatus:
    alliance: Optional[team_event_status_alliance.TeamEventStatusAlliance] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alliance' }})
    alliance_status_str: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alliance_status_str' }})
    last_match_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_match_key' }})
    next_match_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_match_key' }})
    overall_status_str: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall_status_str' }})
    playoff: Optional[team_event_status_playoff.TeamEventStatusPlayoff] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playoff' }})
    playoff_status_str: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playoff_status_str' }})
    qual: Optional[team_event_status_rank.TeamEventStatusRank] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qual' }})
    
