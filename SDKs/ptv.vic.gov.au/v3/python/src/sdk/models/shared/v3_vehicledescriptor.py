from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V3VehicleDescriptor:
    air_conditioned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('air_conditioned') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('length') }})
    low_floor: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('low_floor') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplier') }})
    
