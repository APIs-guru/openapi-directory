from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Summary
    Represents a background check summary
    """
    
    names_found: List[NameFound] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('names_found') }})
    date_of_birth: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_of_birth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    death_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('death_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    drivers_license: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drivers_license') }})
    gender: Optional[SummaryGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    identity_status: Optional[SummaryIdentityStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identity_status') }})
    nss: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nss') }})
    rfc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rfc') }})
    
