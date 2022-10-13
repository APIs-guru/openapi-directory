from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Vaccine:
    dose: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dose' }})
    identity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityType' }})
    identity_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityValue' }})
    vaccinated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vaccinatedBy' }})
    vaccination_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vaccinationDate' }})
    vaccination_place: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vaccinationPlace' }})
    vaccination_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vaccinationStatus' }})
    vaccine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vaccineName' }})
    
