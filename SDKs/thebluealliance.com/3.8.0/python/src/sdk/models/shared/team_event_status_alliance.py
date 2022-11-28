from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TeamEventStatusAlliance:
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    pick: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pick') }})
    backup: Optional[TeamEventStatusAllianceBackup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
