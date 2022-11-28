from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerFareTap:
    atco_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('atcoCode') }})
    tap_details: Optional[TflAPIPresentationEntitiesJourneyPlannerFareTapDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tapDetails') }})
    
