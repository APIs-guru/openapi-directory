from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fhircondition
from . import fhirencounter
from . import fhirobservation
from . import fhirpatient
from . import fhirpractitioner


@dataclass_json
@dataclass
class PatientManagement:
    condition: Optional[fhircondition.FhirCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    encounters: Optional[List[fhirencounter.FhirEncounter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encounters' }})
    group_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCode' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    observations: Optional[List[fhirobservation.FhirObservation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observations' }})
    patient: Optional[fhirpatient.FhirPatient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    practitioners: Optional[List[fhirpractitioner.FhirPractitioner]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'practitioners' }})
    
