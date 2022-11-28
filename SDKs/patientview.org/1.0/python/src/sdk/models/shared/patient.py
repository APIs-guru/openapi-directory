from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class Patient:
    diagnosis_codes: Optional[List[Code]] = field(default=None)
    fhir_allergies: Optional[List[FhirAllergy]] = field(default=None)
    fhir_conditions: Optional[List[FhirCondition]] = field(default=None)
    fhir_encounters: Optional[List[FhirEncounter]] = field(default=None)
    fhir_observations: Optional[List[FhirObservation]] = field(default=None)
    fhir_patient: Optional[FhirPatient] = field(default=None)
    fhir_practitioners: Optional[List[FhirPractitioner]] = field(default=None)
    group: Optional[Group] = field(default=None)
    id: Optional[int] = field(default=None)
    
