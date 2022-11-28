from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TeamEventStatus:
    alliance: Optional[TeamEventStatusAlliance] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance') }})
    alliance_status_str: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance_status_str') }})
    last_match_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_match_key') }})
    next_match_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_match_key') }})
    overall_status_str: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall_status_str') }})
    playoff: Optional[TeamEventStatusPlayoff] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff') }})
    playoff_status_str: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff_status_str') }})
    qual: Optional[TeamEventStatusRank] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual') }})
    
