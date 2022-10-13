from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_timetables_disambiguation
from . import tfl_api_presentation_entities_matchedstop
from . import tfl_api_presentation_entities_matchedstop
from . import tfl_api_presentation_entities_timetable


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesTimetableResponse:
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    disambiguation: Optional[tfl_api_presentation_entities_timetables_disambiguation.TflAPIPresentationEntitiesTimetablesDisambiguation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disambiguation' }})
    line_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineId' }})
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineName' }})
    pdf_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pdfUrl' }})
    stations: Optional[List[tfl_api_presentation_entities_matchedstop.TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stations' }})
    status_error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusErrorMessage' }})
    stops: Optional[List[tfl_api_presentation_entities_matchedstop.TflAPIPresentationEntitiesMatchedStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stops' }})
    timetable: Optional[tfl_api_presentation_entities_timetable.TflAPIPresentationEntitiesTimetable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timetable' }})
    
