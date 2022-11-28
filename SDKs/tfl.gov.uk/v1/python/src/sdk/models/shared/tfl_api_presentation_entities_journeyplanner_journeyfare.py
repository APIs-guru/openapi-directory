from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerJourneyFare:
    caveats: Optional[List[TflAPIPresentationEntitiesJourneyPlannerFareCaveat]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caveats') }})
    fares: Optional[List[TflAPIPresentationEntitiesJourneyPlannerFare]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fares') }})
    total_cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalCost') }})
    
