from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GitStatus:
    ahead: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ahead') }})
    behind: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behind') }})
    branch: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('branch') }})
    commit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commit') }})
    has_uncommitted_changes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUncommittedChanges') }})
    has_unpushed_changes: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasUnpushedChanges') }})
    
