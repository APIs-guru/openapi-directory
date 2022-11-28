from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FhirPatient:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address1') }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address2') }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address3') }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address4') }})
    contacts: Optional[List[FhirContact]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contacts') }})
    date_of_birth: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_of_birth_no_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirthNoTime') }})
    forename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forename') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    group: Optional[Group] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    group_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupCode') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    identifiers: Optional[List[FhirIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifiers') }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postcode') }})
    practitioners: Optional[List[FhirPractitioner]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('practitioners') }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surname') }})
    
