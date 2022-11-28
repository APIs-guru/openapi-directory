from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerObstacle:
    incline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incline') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    stop_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopId') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
