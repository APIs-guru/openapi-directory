from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesBikePointOccupancy:
    r"""TflAPIPresentationEntitiesBikePointOccupancy
    Bike point occupancy
    """
    
    bikes_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bikesCount') }})
    empty_docks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emptyDocks') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    total_docks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDocks') }})
    
