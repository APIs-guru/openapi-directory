from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesBay:
    bay_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bayCount') }})
    bay_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bayType') }})
    free: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    occupied: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('occupied') }})
    
