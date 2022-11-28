from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V3DisruptionMode:
    disruption_mode: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_mode') }})
    disruption_mode_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disruption_mode_name') }})
    
