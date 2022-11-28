from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RuleCategory:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parent: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
