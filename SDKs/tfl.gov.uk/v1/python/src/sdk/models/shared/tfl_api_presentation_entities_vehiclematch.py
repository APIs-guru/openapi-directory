from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TflAPIPresentationEntitiesVehicleMatchComplianceEnum(str, Enum):
    NOT_AVAILABLE = "NotAvailable"
    NOT_COMPLIANT = "NotCompliant"
    COMPLIANT = "Compliant"
    EXEMPT = "Exempt"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesVehicleMatch:
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colour') }})
    compliance: Optional[TflAPIPresentationEntitiesVehicleMatchComplianceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compliance') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    vrm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vrm') }})
    
