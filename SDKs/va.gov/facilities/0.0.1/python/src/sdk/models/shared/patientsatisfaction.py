from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatientSatisfaction:
    r"""PatientSatisfaction
    Veteran-reported satisfaction scores for health care services
    """
    
    primary_care_routine: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_care_routine') }})
    primary_care_urgent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary_care_urgent') }})
    specialty_care_routine: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialty_care_routine') }})
    specialty_care_urgent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('specialty_care_urgent') }})
    
