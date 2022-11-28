from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AbsenceEntitlementValueAttributes:
    entitlement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entitlement') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
class AbsenceEntitlementValueTypeEnum(str, Enum):
    TIME_OFF_TYPE = "TimeOffType"


@dataclass_json
@dataclass
class AbsenceEntitlementValue:
    attributes: Optional[AbsenceEntitlementValueAttributes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    type: Optional[AbsenceEntitlementValueTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AbsenceEntitlement:
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: List[AbsenceEntitlementValue] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
