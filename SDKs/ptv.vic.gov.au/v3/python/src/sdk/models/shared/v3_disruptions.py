from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class V3Disruptions:
    ferry: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ferry') }})
    general: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('general') }})
    interstate_train: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interstate_train') }})
    metro_bus: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metro_bus') }})
    metro_train: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metro_train') }})
    metro_tram: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metro_tram') }})
    night_bus: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('night_bus') }})
    regional_bus: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regional_bus') }})
    regional_coach: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regional_coach') }})
    regional_train: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regional_train') }})
    school_bus: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('school_bus') }})
    skybus: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skybus') }})
    taxi: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxi') }})
    telebus: Optional[List[V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('telebus') }})
    
