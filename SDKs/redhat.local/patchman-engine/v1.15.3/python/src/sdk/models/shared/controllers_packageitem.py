from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ControllersPackageItem:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    systems_installed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systems_installed') }})
    systems_updatable: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systems_updatable') }})
    
