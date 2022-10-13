from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_orderedroute
from . import tfl_api_presentation_entities_matchedstop
from . import tfl_api_presentation_entities_stoppointsequence


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesRouteSequence:
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    is_outbound_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isOutboundOnly' }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineId' }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineName' }})
    line_strings: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineStrings' }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    ordered_line_routes: Optional[List[tfl_api_presentation_entities_orderedroute.TflAPIPresentationEntitiesOrderedRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderedLineRoutes' }})
    stations: Optional[List[tfl_api_presentation_entities_matchedstop.TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stations' }})
    stop_point_sequences: Optional[List[tfl_api_presentation_entities_stoppointsequence.TflAPIPresentationEntitiesStopPointSequence]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stopPointSequences' }})
    
