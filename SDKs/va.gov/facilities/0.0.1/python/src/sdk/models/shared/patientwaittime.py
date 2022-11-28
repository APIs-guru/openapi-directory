from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""PatientWaitTime
    Expected wait times for new and established patients for a given health care service
    """
    
    service: PatientWaitTimeServiceEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    established: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('established') }})
    new: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new') }})
    
