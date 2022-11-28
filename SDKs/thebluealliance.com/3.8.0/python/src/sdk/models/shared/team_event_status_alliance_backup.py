from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamEventStatusAllianceBackup:
    r"""TeamEventStatusAllianceBackup
    Backup status, may be null.
    """
    
    in_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in') }})
    out: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out') }})
    
