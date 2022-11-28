from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerJourneyPlannerCycleHireDockingStationData:
    destination_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationId') }})
    destination_number_of_bikes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationNumberOfBikes') }})
    destination_number_of_empty_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationNumberOfEmptySlots') }})
    origin_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originId') }})
    origin_number_of_bikes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originNumberOfBikes') }})
    origin_number_of_empty_slots: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originNumberOfEmptySlots') }})
    
