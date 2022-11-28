from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerPath:
    elevation: Optional[List[TflAPICommonJourneyPlannerJpElevation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elevation') }})
    line_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineString') }})
    stop_points: Optional[List[TflAPIPresentationEntitiesIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stopPoints') }})
    
