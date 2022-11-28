from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransmissionTypes:
    ach: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ACH') }})
    same_day_ach: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SAME_DAY_ACH') }})
    wire: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WIRE') }})
    
