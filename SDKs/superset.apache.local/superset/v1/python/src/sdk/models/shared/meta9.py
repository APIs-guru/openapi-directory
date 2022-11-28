from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Meta9:
    dashboard_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashboard_title') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
