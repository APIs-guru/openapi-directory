from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_stoppoint


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSectionNaptanEntrySequence:
    ordinal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ordinal' }})
    stop_point: Optional[tfl_api_presentation_entities_stoppoint.TflAPIPresentationEntitiesStopPoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopPoint' }})
    
