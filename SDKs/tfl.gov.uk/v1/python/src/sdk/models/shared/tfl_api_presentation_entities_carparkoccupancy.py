from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesCarParkOccupancy:
    bays: Optional[List[TflAPIPresentationEntitiesBay]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bays') }})
    car_park_details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carParkDetailsUrl') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
