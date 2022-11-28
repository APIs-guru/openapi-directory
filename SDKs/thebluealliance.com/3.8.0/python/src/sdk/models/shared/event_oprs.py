from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventOpRs:
    r"""EventOpRs
    OPR, DPR, and CCWM for teams at the event.
    """
    
    ccwms: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ccwms') }})
    dprs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dprs') }})
    oprs: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oprs') }})
    
