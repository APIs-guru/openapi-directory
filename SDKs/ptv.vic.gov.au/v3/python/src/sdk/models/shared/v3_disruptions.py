from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption
from . import v3_disruption


@dataclass_json
@dataclass
class V3Disruptions:
    ferry: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ferry' }})
    general: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'general' }})
    interstate_train: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interstate_train' }})
    metro_bus: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_bus' }})
    metro_train: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_train' }})
    metro_tram: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_tram' }})
    night_bus: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'night_bus' }})
    regional_bus: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regional_bus' }})
    regional_coach: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regional_coach' }})
    regional_train: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regional_train' }})
    school_bus: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school_bus' }})
    skybus: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skybus' }})
    taxi: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxi' }})
    telebus: Optional[List[v3_disruption.V3Disruption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'telebus' }})
    
