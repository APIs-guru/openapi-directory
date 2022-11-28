from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ControllersPackageSystemItem:
    available_evra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_evra') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    installed_evra: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installed_evra') }})
    updatable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatable') }})
    
