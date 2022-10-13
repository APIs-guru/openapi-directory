from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_interval


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesStationInterval:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    intervals: Optional[List[tfl_api_presentation_entities_interval.TflAPIPresentationEntitiesInterval]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervals' }})
    
