from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PatientSatisfaction:
    primary_care_routine: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_care_routine' }})
    primary_care_urgent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary_care_urgent' }})
    specialty_care_routine: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialty_care_routine' }})
    specialty_care_urgent: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'specialty_care_urgent' }})
    
