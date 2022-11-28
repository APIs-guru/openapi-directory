from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerFare:
    charge_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeLevel') }})
    charge_profile_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chargeProfileName') }})
    cost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    high_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highZone') }})
    is_hopper_fare: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isHopperFare') }})
    low_zone: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowZone') }})
    off_peak: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offPeak') }})
    peak: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peak') }})
    taps: Optional[List[TflAPIPresentationEntitiesJourneyPlannerFareTap]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taps') }})
    
