from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import namefound

class SummaryGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"

class SummaryIdentityStatusEnum(str, Enum):
    FOUND = "found"
    NOT_FOUND = "not_found"
    DEAD = "dead"


@dataclass_json
@dataclass
class Summary:
    date_of_birth: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_of_birth', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    death_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'death_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    drivers_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drivers_license' }})
    gender: Optional[SummaryGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    identity_status: Optional[SummaryIdentityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identity_status' }})
    names_found: List[namefound.NameFound] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'names_found' }})
    nss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nss' }})
    rfc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rfc' }})
    
