from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesServiceFrequency:
    highest_frequency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highestFrequency') }})
    lowest_frequency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lowestFrequency') }})
    
