from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Version:
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    codename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('codename') }})
    is_beta: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_beta') }})
    is_deprecated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_deprecated') }})
    is_hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_hidden') }})
    is_stable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_stable') }})
    
