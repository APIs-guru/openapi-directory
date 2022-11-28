from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EliminationAllianceBackup:
    r"""EliminationAllianceBackup
    Backup team called in, may be null.
    """
    
    in_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    out: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out') }})
    

@dataclass_json
@dataclass
class EliminationAllianceStatus:
    current_level_record: Optional[WltRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_level_record') }})
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    playoff_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff_average') }})
    record: Optional[WltRecord] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class EliminationAlliance:
    picks: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('picks') }})
    backup: Optional[EliminationAllianceBackup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    declines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('declines') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: Optional[EliminationAllianceStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
