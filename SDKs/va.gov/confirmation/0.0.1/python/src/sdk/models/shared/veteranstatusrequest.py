from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VeteranStatusRequestGenderEnum(str, Enum):
    M = "M"
    F = "F"


@dataclass_json
@dataclass
class VeteranStatusRequest:
    r"""VeteranStatusRequest
    Attributes required to retrieve a Veteran's status
    """
    
    birth_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('birth_date') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    ssn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    gender: Optional[VeteranStatusRequestGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    
