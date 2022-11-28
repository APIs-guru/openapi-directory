from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientManagement:
    condition: Optional[FhirCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    encounters: Optional[List[FhirEncounter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encounters') }})
    group_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCode') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    observations: Optional[List[FhirObservation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observations') }})
    patient: Optional[FhirPatient] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    practitioners: Optional[List[FhirPractitioner]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('practitioners') }})
    
