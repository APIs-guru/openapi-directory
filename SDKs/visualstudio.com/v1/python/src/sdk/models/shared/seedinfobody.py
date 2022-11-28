from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SeedInfoBody:
    git_config: Optional[GitConfigOptionsBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gitConfig') }})
    recurse_clone: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurseClone') }})
    repository: Optional[RepositoryInfoBody] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repository') }})
    seed_moniker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seedMoniker') }})
    seed_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seedType') }})
    
