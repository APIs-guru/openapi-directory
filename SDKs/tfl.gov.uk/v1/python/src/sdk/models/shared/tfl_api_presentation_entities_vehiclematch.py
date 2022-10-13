from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TflAPIPresentationEntitiesVehicleMatchComplianceEnum(str, Enum):
    NOT_AVAILABLE = "NotAvailable"
    NOT_COMPLIANT = "NotCompliant"
    COMPLIANT = "Compliant"
    EXEMPT = "Exempt"


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesVehicleMatch:
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colour' }})
    compliance: Optional[TflAPIPresentationEntitiesVehicleMatchComplianceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'compliance' }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    vrm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vrm' }})
    
