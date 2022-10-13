from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PatientWaitTimeServiceEnum(str, Enum):
    AUDIOLOGY = "Audiology"
    CARDIOLOGY = "Cardiology"
    CAREGIVER_SUPPORT = "CaregiverSupport"
    COVID19_VACCINE = "Covid19Vaccine"
    DENTAL_SERVICES = "DentalServices"
    DERMATOLOGY = "Dermatology"
    EMERGENCY_CARE = "EmergencyCare"
    GASTROENTEROLOGY = "Gastroenterology"
    GYNECOLOGY = "Gynecology"
    MENTAL_HEALTH_CARE = "MentalHealthCare"
    OPHTHALMOLOGY = "Ophthalmology"
    OPTOMETRY = "Optometry"
    ORTHOPEDICS = "Orthopedics"
    NUTRITION = "Nutrition"
    PODIATRY = "Podiatry"
    PRIMARY_CARE = "PrimaryCare"
    SPECIALTY_CARE = "SpecialtyCare"
    URGENT_CARE = "UrgentCare"
    UROLOGY = "Urology"
    WOMENS_HEALTH = "WomensHealth"


@dataclass_json
@dataclass
class PatientWaitTime:
    established: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'established' }})
    new: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'new' }})
    service: PatientWaitTimeServiceEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
