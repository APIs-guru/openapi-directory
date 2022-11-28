from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WirelessV1SimUsageRecord:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    commands: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commands') }})
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    period: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sim_sid') }})
    
