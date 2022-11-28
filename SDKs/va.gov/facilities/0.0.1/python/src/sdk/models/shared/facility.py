from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FacilityTypeEnum(str, Enum):
    VA_FACILITIES = "va_facilities"


@dataclass_json
@dataclass
class Facility:
    r"""Facility
    JSON API-compliant object describing a VA facility
    """
    
    attributes: FacilityAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: FacilityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
