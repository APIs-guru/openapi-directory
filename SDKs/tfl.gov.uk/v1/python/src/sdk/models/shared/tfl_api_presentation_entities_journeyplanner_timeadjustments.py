from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerTimeAdjustments:
    earlier: Optional[TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earlier') }})
    earliest: Optional[TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliest') }})
    later: Optional[TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('later') }})
    latest: Optional[TflAPIPresentationEntitiesJourneyPlannerTimeAdjustment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest') }})
    
