from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Vaccine:
    dose: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dose') }})
    identity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityType') }})
    identity_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityValue') }})
    vaccinated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaccinatedBy') }})
    vaccination_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaccinationDate') }})
    vaccination_place: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaccinationPlace') }})
    vaccination_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaccinationStatus') }})
    vaccine_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vaccineName') }})
    
