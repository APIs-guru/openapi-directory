from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fhircontact
from . import group
from . import fhiridentifier
from . import fhirpractitioner


@dataclass_json
@dataclass
class FhirPatient:
    address1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address1' }})
    address2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address2' }})
    address3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address3' }})
    address4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address4' }})
    contacts: Optional[List[fhircontact.FhirContact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    date_of_birth: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOfBirth', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_of_birth_no_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOfBirthNoTime' }})
    forename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'forename' }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    group_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupCode' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    identifiers: Optional[List[fhiridentifier.FhirIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    practitioners: Optional[List[fhirpractitioner.FhirPractitioner]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'practitioners' }})
    surname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surname' }})
    
