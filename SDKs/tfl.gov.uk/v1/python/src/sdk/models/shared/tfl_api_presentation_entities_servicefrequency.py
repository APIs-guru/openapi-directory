from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesServiceFrequency:
    highest_frequency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highestFrequency' }})
    lowest_frequency: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lowestFrequency' }})
    
