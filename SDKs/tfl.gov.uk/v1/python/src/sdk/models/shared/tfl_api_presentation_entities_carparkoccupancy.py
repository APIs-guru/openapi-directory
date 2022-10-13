from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_bay


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesCarParkOccupancy:
    bays: Optional[List[tfl_api_presentation_entities_bay.TflAPIPresentationEntitiesBay]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bays' }})
    car_park_details_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carParkDetailsUrl' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
