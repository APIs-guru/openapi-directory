from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tfl_api_presentation_entities_journeyplanner_faretapdetails


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesJourneyPlannerFareTap:
    atco_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'atcoCode' }})
    tap_details: Optional[tfl_api_presentation_entities_journeyplanner_faretapdetails.TflAPIPresentationEntitiesJourneyPlannerFareTapDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tapDetails' }})
    
